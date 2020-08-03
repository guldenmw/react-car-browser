import { IVehiclesResponse } from '../interfaces';

export const FETCH_VEHICLES_START = 'fetch-vehicles-start';
export const FETCH_VEHICLES_SUCCESS = 'fetch-vehicles-success';
export const FETCH_VEHICLES_ERROR = 'fetch-vehicles-error';


export const fetchVehiclesStart = () => ({
  type: FETCH_VEHICLES_START,
});

export const fetchVehiclesSuccess = (data: IVehiclesResponse) => ({
  type: FETCH_VEHICLES_SUCCESS, data,
});

export const fetchVehiclesError = () => ({
  type: FETCH_VEHICLES_ERROR,
});
