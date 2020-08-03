import {
  FETCH_VEHICLES_START,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_ERROR,
} from '../actions';

import { IVehicle } from '../interfaces';

export interface IVehicleReducerState {
  vehicles: IVehicle[];
  message: string;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IVehicleReducerState = {
  vehicles: [],
  message: '',
  isLoading: false,
  hasError: false,
};

const vehicleReducer = (state = initialState, action: {type: string, data: any}): IVehicleReducerState => {
  const { type, data } = action;
  switch (type) {
    case FETCH_VEHICLES_START: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        message: '',
      }
    }

    case FETCH_VEHICLES_SUCCESS: {
      return {
        ...state,
        vehicles: data?.data,
        isLoading: false,
        hasError: false,
      }
    }

    case FETCH_VEHICLES_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        message: '',
      }
    }

    default:
      return state;
  }
};

export default vehicleReducer;
