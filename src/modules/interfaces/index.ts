export interface IFilters {
  manufacturer: string;
  body: string;
  priceFrom: string;
  priceTo: string;
}
export interface IVehicle {
  id: string;
  manufacturer: string;
  model: string;
  price: number;
  body: string;
  wiki: string;
  img: string;
}

export interface IVehiclesResponse {
  data: IVehicle[];
  message: string;
}