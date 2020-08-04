import { IVehicleReducerState } from '../../modules/reducer';
import { resetFilters, updateFilter } from '../../modules/actions';
import { Dispatch } from 'redux';

export const mapStateToProps = (state: IVehicleReducerState) => {
  const { filters } = state;

  return {
    filters
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateFilter(field: string, value: string) {
    dispatch(updateFilter({ field, value }));
  },
  resetFilters() {
    dispatch(resetFilters());
  },
});
