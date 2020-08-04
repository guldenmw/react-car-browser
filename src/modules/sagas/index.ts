import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_VEHICLES_START, fetchVehiclesError, fetchVehiclesSuccess } from '../actions';
import getVehicles from '../api/get-vehicles';
import getWikiSummary from '../api/get-wiki-summary';
import { IVehicle, IVehiclesResponse, IWikiResponse } from '../interfaces';

/**
 * Truncate summary to a certain length to preserve responsiveness
 */
const truncateSummary = (summary: string) => {
  let truncated = summary;
  while (truncated?.length > 210) {
    const split = truncated.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    split.pop();
    truncated = split.join(' ');
  }
  return truncated;
}

/**
 * Iterate through vehicles, appending a summary fetched
 * from Wikipedia to each vehicle object
 * @param vehicles - API response object containing vehicles nested under 'data' key
 */
const getVehicleSummaries = async (vehicles: IVehiclesResponse) => {
  return await Promise.all(vehicles?.data?.map(async (vehicle: IVehicle) => {
    // Combine manufacturer and model strings to get vehicle title
    const vehicleTitle = `${vehicle?.manufacturer}_${vehicle?.model}`;

    const wikiResponse: IWikiResponse = await getWikiSummary(vehicleTitle);
    const summary = truncateSummary(wikiResponse?.extract);

    return {
      ...vehicle,
      summary
    }
  }))
}

/**
 * Saga worker responsible for fetching all vehicles from
 * the API and their summaries from Wikipedia and
 * sending it through to the reducer to be stored
 */
function* sagaWorker() {
  try {
    const result = yield call(getVehicles);

    const vehicles: IVehicle[] = yield call(getVehicleSummaries, result);

    return yield put(fetchVehiclesSuccess(vehicles));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchVehiclesError());
  }
}

/**
 * Saga used to wait for specific action before
 * firing off it's worker saga above
 */
function* fetchVehicles() {
  yield takeLatest([FETCH_VEHICLES_START], sagaWorker);
}

export default fetchVehicles;
