import React, { FC } from 'react';
import { Filter, FilterHeader, StyledFilters } from './styles';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { IFilters } from '../../modules/interfaces';

interface IProps {
  filters?: IFilters;
  updateFilter?: (field: string, value: string) => void;
  resetFilters?: () => void;
}

const priceRange = [
  { label: 'R0', value: '0'},
  { label: 'R200 000', value: '200000'},
  { label: 'R400 000', value: '400000'},
  { label: 'R600 000', value: '600000'},
  { label: 'R800 000', value: '800000'},
  { label: 'R1 000 000', value: '1000000'},
  { label: 'R1 200 000', value: '1200000'},
  { label: 'R1 400 000', value: '1400000'},
  { label: 'R1 600 000', value: '1600000'},
  { label: 'R1 800 000', value: '1800000'},
  { label: 'R2 000 000', value: '2000000'},
]

const Filters: FC<IProps> = (props) => {
  const {
    filters,
    updateFilter,
    resetFilters,
  } = props;

  return (
    <StyledFilters className={'filters'}>
      <Filter>
        <FilterHeader>Manufacturer</FilterHeader>
        <select onChange={e => updateFilter('manufacturer', e?.target?.value)} value={filters?.manufacturer}>
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
        <select onChange={e => updateFilter('body', e?.target?.value)} value={filters?.body}>
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
        <select onChange={e => updateFilter('priceFrom', e?.target?.value)} value={filters?.priceFrom}>
          {priceRange.map(({ label, value }, index) => (
            <option value={value} key={index}>{label}</option>
          ))}
        </select>
      </Filter>
      <Filter>
        <FilterHeader>To</FilterHeader>
        <select onChange={e => updateFilter('priceTo', e?.target?.value)} value={filters?.priceTo}>
          {priceRange.map(({ label, value }, index) => (
            <option value={value} key={index}>{label}</option>
          ))}
        </select>
      </Filter>
      <Filter>
        <button onClick={resetFilters}>Reset</button>
      </Filter>
    </StyledFilters>
  );
};

Filters.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filters) as typeof Filters;
