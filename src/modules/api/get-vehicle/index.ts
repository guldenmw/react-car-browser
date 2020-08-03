import { IVehiclesResponse } from '../../interfaces';


const getVehicle = async (vehicleId: string): Promise<IVehiclesResponse> => {
  const url = `https://warpfrontendtestserver.herokuapp.com/v1/vehicle/${vehicleId}`;
  const response = await fetch(url);
  return await response.json();
};

export default getVehicle;