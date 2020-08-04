import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { IVehicle } from '../../modules/interfaces';
import { StyledPopover, StyledShoppingCartIcon } from './styles';
import { mapDispatchToProps, mapStateToProps } from './container';


interface IComponentProps {
  label: string;
}

interface IContainerProps {
  cart?: IVehicle[];
  removeItemFromCart?: (vehicle: IVehicle) => void;
}

type IProps = IComponentProps & IContainerProps;

/**
 * App Navbar component displaying branding and cart
 */
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
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant={'h6'}>{label}</Typography>
        </Box>
        <IconButton
          onClick={handleClick}
          aria-label={'show shopping cart'}
          aria-controls={'shopping-cart-menu'}
          aria-haspopup={'true'}
        >
          <Badge badgeContent={cart?.length} color={'error'}>
            <StyledShoppingCartIcon/>
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
              <Typography>
                {`${vehicle?.manufacturer} ${vehicle?.model} `}
              </Typography>
              <IconButton
                onClick={() => removeItemFromCart(vehicle)}
                aria-label={'remove from shopping cart'}
              >
                <DeleteIcon color={'error'}/>
              </IconButton>
            </div>
          ))}
          {!cart?.length && (
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pr={'20px'}>
              <Typography>Your cart is empty.</Typography>
            </Box>
          )}
        </StyledPopover>
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar) as typeof Navbar;
