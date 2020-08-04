import { Dispatch } from 'redux';
import { addItemToCart } from '../../modules/actions';
import { IVehicle } from '../../modules/interfaces';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItemToCart(vehicle: IVehicle) {
    dispatch(addItemToCart(vehicle));
  },
});