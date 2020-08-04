import { IVehicle } from '../interfaces';

export const FETCH_VEHICLES_START = 'fetch-vehicles-start';
export const FETCH_VEHICLES_SUCCESS = 'fetch-vehicles-success';
export const FETCH_VEHICLES_ERROR = 'fetch-vehicles-error';
export const UPDATE_FILTER = 'update-filter';
export const RESET_FILTERS = 'reset-filters';
export const ADD_ITEM_TO_CART = 'add-item-to-cart';
export const REMOVE_ITEM_FROM_CART = 'remove-item-from-cart';


export const fetchVehiclesStart = () => ({
  type: FETCH_VEHICLES_START,
});

export const fetchVehiclesSuccess = (data: IVehicle[]) => ({
  type: FETCH_VEHICLES_SUCCESS, data,
});

export const fetchVehiclesError = () => ({
  type: FETCH_VEHICLES_ERROR,
});

export const updateFilter = (data: { field: string, value: string }) => ({
  type: UPDATE_FILTER, data,
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});

export const addItemToCart = (data: IVehicle) => ({
  type: ADD_ITEM_TO_CART, data,
});

export const removeItemFromCart = (data: IVehicle) => ({
  type: REMOVE_ITEM_FROM_CART, data,
});
