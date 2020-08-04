import styled from 'styled-components';


export const StyledApp = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  .app-body {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
  }
  
  .vehicle-listings {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    flex-grow: 1;
  }
`;
