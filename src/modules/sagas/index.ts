import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_VEHICLES_START, fetchVehiclesError, fetchVehiclesSuccess } from '../actions';
import { getVehicles } from '../api';

function* sagaWorker(action: { type: string, data: any}) {
  try {
    const { data } = action;
    const result = yield call(getVehicles);
    return yield put(fetchVehiclesSuccess(result));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchVehiclesError());
  }
}

function* fetchVehicles() {
  yield takeLatest([FETCH_VEHICLES_START], sagaWorker);
}

export default fetchVehicles;
