import React, { FC } from 'react';
import { Branding, CartButton, StyledNavbar } from './styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface IProps {
  label: string;
}

const Navbar: FC<IProps> = (props) => {
  const { label } = props;
  return (
    <StyledNavbar>
      <Branding>{label}</Branding>
      <CartButton>
        <ShoppingCartIcon />
      </CartButton>
    </StyledNavbar>
  );
};

Navbar.defaultProps = {};

export default Navbar;
