import React, { FC } from 'react';
import { IVehicle } from '../../modules/interfaces';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { StyledVehicleCard } from './styles';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './container';
import { Button, IconButton } from '@material-ui/core';

const imageBaseUrl = 'https://warpfrontendtestserver.herokuapp.com/public'

interface IComponentProps {
  vehicle: IVehicle;
}

interface IContainerProps {
  addItemToCart?: (vehicle: IVehicle) => void;
}

type IProps = IComponentProps & IContainerProps;

const VehicleCard: FC<IProps> = (props) => {
  const { vehicle, addItemToCart } = props;

  const vehicleDescription = `${vehicle?.manufacturer}_${vehicle?.model}`;
  const imgUrl = `${imageBaseUrl}/${vehicleDescription}.jpg`;

  return (
    <StyledVehicleCard>
      <img className={'vehicle-image'} src={imgUrl} alt={vehicleDescription}/>
      <div className={'vehicle-details'}>
        <div className={'vehicle-detail'}>
          <span className={'label'}>Manufacturer: </span>
          <span className={'value'}>{vehicle?.manufacturer}</span>
        </div>

        <div className={'vehicle-detail'}>
          <span className={'label'}>Model: </span>
          <span className={'value'}>{vehicle?.model}</span>
        </div>

        <div className={'vehicle-detail'}>
          <span className={'label'}>Body: </span>
          <span className={'value'}>{vehicle?.body}</span>
        </div>
      </div>
      <div className={'vehicle-price'}>
        <span>{`R${vehicle?.price}`}</span>
      </div>
      <div className={'add-to-cart'}>
        <Button
          variant={'contained'}
          onClick={e => addItemToCart(vehicle)}
          startIcon={<AddShoppingCartIcon/>}
        >
          Add to cart
        </Button>
      </div>
    </StyledVehicleCard>
  );
};

VehicleCard.defaultProps = {};

export default connect(null, mapDispatchToProps)(VehicleCard) as typeof VehicleCard;
