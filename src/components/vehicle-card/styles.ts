import styled from 'styled-components';


export const StyledVehicleCard = styled.div<any>`
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  display: flex;
  margin: 10px 20px;
  max-width: 1200px;
  max-height: 180px;
  
  img {
    height: 180px;
    min-width: 350px;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
  }

  .vehicle-listing-body {
    margin: 15px 20px;
    width: 100%;
    display: flex;
    
    .description {
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    .add-to-cart {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      min-width: 150px;
      margin-left: 15px;

      .vehicle-price {
        span {
          font-size: 25px;
        }
      }
    }
  }
`;
