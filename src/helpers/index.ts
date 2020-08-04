import { IFilters, IVehicle } from '../modules/interfaces';

export const getFilteredVehicles = (vehicles: IVehicle[], filters: IFilters): IVehicle[] => {
  let filteredVehicles = vehicles;

  Object.entries(filters).forEach(([key, val]) => {
    if (['Any', '0'].includes(val)) {
      return;
    } else if (['manufacturer', 'body'].includes(key)) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle?.[key] === val);
    } else if (key === 'priceFrom') {
      const price = Number(val);
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle?.price >= price);
    } else if (key === 'priceTo') {
      const price = Number(val);
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle?.price <= price);
    }
  });

  return filteredVehicles;
}