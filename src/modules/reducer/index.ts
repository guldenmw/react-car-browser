import {
  FETCH_VEHICLES_START,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_ERROR, UPDATE_FILTER, RESET_FILTERS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART,
} from '../actions';

import { IFilters, IVehicle } from '../interfaces';

export interface IVehicleReducerState {
  vehicles: IVehicle[];
  message: string;
  isLoading: boolean;
  hasError: boolean;
  filters: IFilters;
  cart: IVehicle[];
}

const initialState: IVehicleReducerState = {
  vehicles: [],
  message: '',
  isLoading: false,
  hasError: false,
  filters: {
    manufacturer: 'Any',
    body: 'Any',
    priceFrom: '0',
    priceTo: '0',
  },
  cart: [],
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
        vehicles: data,
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

    case UPDATE_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [data?.field]: data?.value,
        }
      }
    }

    case RESET_FILTERS: {
      return {
        ...state,
        filters: {
          manufacturer: 'Any',
          body: 'Any',
          priceFrom: '0',
          priceTo: '0',
        }
      }
    }

    case ADD_ITEM_TO_CART: {
      return {
        ...state,
        cart: [
          ...state.cart,
          data,
        ]
      }
    }

    case REMOVE_ITEM_FROM_CART: {
      console.log('state?.cart: ', state?.cart);
      console.log('data: ', data);
      const filteredCart = state?.cart?.filter(item => item?.id !== data?.id);
      console.log('filteredCart: ', filteredCart);
      return {
        ...state,
        cart: filteredCart,
      }
    }

    default:
      return state;
  }
};

export default vehicleReducer;
