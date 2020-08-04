import styled from 'styled-components';
import { Popover } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: #fff;
`;

export const StyledPopover = styled(Popover)`
  .MuiPaper-root {
    min-width: 250px;
    padding: 10px 0 10px 20px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
      padding-right: 15px;
    }
  }
`;