import { Dispatch } from 'redux';
import { IVehicleReducerState } from '../../modules/reducer';
import { fetchVehiclesStart } from '../../modules/actions';
import { getFilteredVehicles } from '../../helpers';


export const mapStateToProps = (state: IVehicleReducerState) => {
  const { vehicles, isLoading, hasError, filters } = state;
  const filteredVehicles = getFilteredVehicles(vehicles, filters);

  return {
    vehicles: filteredVehicles,
    isLoading,
    hasError,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchVehicles() {
    dispatch(fetchVehiclesStart());
  },
});
