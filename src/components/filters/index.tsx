import React, { FC } from 'react';
import { Filter, FilterHeader, StyledFilters } from './styles';

interface IProps {
  [x: string]: any;
}

const priceRange = [
  { label: 'R0', value: '0'},
  { label: 'R100 000', value: '100000'},
  { label: 'R200 000', value: '200000'},
  { label: 'R300 000', value: '300000'},
  { label: 'R400 000', value: '400000'},
  { label: 'R500 000', value: '500000'},
  { label: 'R600 000', value: '600000'},
  { label: 'R700 000', value: '700000'},
  { label: 'R800 000', value: '800000'},
  { label: 'R900 000', value: '900000'},
  { label: 'R1 000 000', value: '1000000'},
  { label: 'R1 100 000', value: '1100000'},
  { label: 'R1 200 000', value: '1200000'},
  { label: 'R1 300 000', value: '1300000'},
  { label: 'R1 400 000', value: '1400000'},
  { label: 'R1 500 000', value: '1500000'},
  { label: 'R1 600 000', value: '1600000'},
  { label: 'R1 700 000', value: '1700000'},
  { label: 'R1 800 000', value: '1800000'},
  { label: 'R1 900 000', value: '1900000'},
  { label: 'R2 000 000', value: '2000000'},
]

const Filters: FC<IProps> = (props) => {
  const { } = props;
  return (
    <StyledFilters className={'filters'}>
      <Filter>
        <FilterHeader>Manufacturer</FilterHeader>
        <select>
          <option value={'Any'}>Any</option>
          <option value={'Nissan'}>Nissan</option>
          <option value={'BMW'}>BMW</option>
          <option value={'Audi'}>Audi</option>
          <option value={'Mercedes-Benz'}>Mercedes-Benz</option>
          <option value={'Ford'}>Ford</option>
        </select>
      </Filter>
      <Filter>
        <FilterHeader>Body Style</FilterHeader>
        <select>
          <option value={'Any'}>Any</option>
          <option value={'Coupé'}>Coupé</option>
          <option value={'Sedan'}>Sedan</option>
          <option value={'SUV'}>SUV</option>
        </select>
      </Filter>
      <Filter>
        <FilterHeader>Price Range</FilterHeader>
      </Filter>
      <Filter>
        <FilterHeader>From</FilterHeader>
        <select>
          {priceRange.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </Filter>
      <Filter>
        <FilterHeader>To</FilterHeader>
        <select>
          {priceRange.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </Filter>
    </StyledFilters>
  );
};

Filters.defaultProps = {};

export default Filters;
