import { IVehicleReducerState } from '../../modules/reducer';
import { fetchVehiclesStart } from '../../modules/actions';
import { Dispatch } from 'redux';

export const mapStateToProps = (state: IVehicleReducerState) => {
  const { vehicles, isLoading, hasError } = state;

  return {
    vehicles,
    isLoading,
    hasError,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchVehicles() {
    dispatch(fetchVehiclesStart());
  },
});
