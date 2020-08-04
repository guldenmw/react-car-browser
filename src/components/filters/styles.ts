import styled from 'styled-components';


export const StyledFilters = styled.div<any>`
  background-color: #f1f1f1;
  height: 100%;
  width: 200px;
  padding: 0 10px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  select {
    border-radius: 4px;
    height: 20px;
  }
`;

export const FilterHeader = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
`;