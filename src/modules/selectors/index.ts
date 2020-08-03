import { IVehicleReducerState } from '../reducer';

export const getVehiclesSelector = (state: IVehicleReducerState) => {
  return state?.vehicles;
}