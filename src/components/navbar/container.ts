import { Dispatch } from 'redux';
import { removeItemFromCart } from '../../modules/actions';
import { IVehicle } from '../../modules/interfaces';
import { IVehicleReducerState } from '../../modules/reducer';

export const mapStateToProps = (state: IVehicleReducerState) => {
  const { cart } = state;

  return {
    cart,
  };
};
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeItemFromCart(vehicle: IVehicle) {
    dispatch(removeItemFromCart(vehicle));
  },
});