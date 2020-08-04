import styled from 'styled-components';


export const StyledVehicleCard = styled.div<any>`
  //border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  display: flex;
  margin: 10px 20px;
  padding: 20px;
  position: relative;
  
  img {
    height: 180px;
    width: 350px;
    object-fit: cover;
    border-radius: 5px;
  }

  .vehicle-details {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    justify-content: center;

    .vehicle-detail {
      display: flex;
      padding-bottom: 20px;
      font-size: 18px;

      .label {
        line-height: 14px;
        font-weight: 500;
        min-width: 110px;
      }
      
      .value {
        flex: 1;
        line-height: 14px;
        font-weight: 500;
        padding-left: 15px;
      }
    }
  }
  
  .vehicle-price {
    position: absolute;
    right: 30px;
    
    span {
      font-size: 25px;
    }
  }
  
  .add-to-cart {
    position: absolute;
    right: 30px;
    bottom: 20px;
    
    button {
      background-color: #8bc34a;
    }
  }
`;
