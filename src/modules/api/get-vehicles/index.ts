import { IVehiclesResponse } from '../../interfaces';


/**
 * API wrapper responsible for fetching all vehicles
 */
const getVehicles = async (): Promise<IVehiclesResponse> => {
  const url = `https://warpfrontendtestserver.herokuapp.com/v1/vehicles`;
  const response = await fetch(url);
  return await response.json();
};

export default getVehicles;