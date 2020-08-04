import React, { FC } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import { Badge, IconButton } from '@material-ui/core';
import { IVehicle } from '../../modules/interfaces';
import { Branding, StyledNavbar, StyledPopover } from './styles';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';

interface IComponentProps {
  label: string;
}

interface IContainerProps {
  cart?: IVehicle[];
  removeItemFromCart?: (vehicle: IVehicle) => void;
}

type IProps = IComponentProps & IContainerProps;

const Navbar: FC<IProps> = (props) => {
  const {
    label,
    cart,
    removeItemFromCart,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledNavbar>
      <Branding>{label}</Branding>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={cart?.length} color={'error'}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <StyledPopover
        id={'cart'}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {!!cart?.length && cart?.map((vehicle, index) => (
          <div className={'cart-item'} key={index}>
            <span>{`${vehicle?.manufacturer} ${vehicle?.model} - R${vehicle?.price}`}</span>
            <IconButton
              onClick={e => removeItemFromCart(vehicle)}
              aria-label={'remove from shopping cart'}
            >
              <DeleteIcon/>
            </IconButton>
          </div>
        ))}
        {!cart?.length && (
          <span className={'empty'}>Your cart is empty.</span>
        )}
      </StyledPopover>
    </StyledNavbar>
  );
};

Navbar.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar) as typeof Navbar;
