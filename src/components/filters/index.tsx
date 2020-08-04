import React, { FC } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Filter, FilterHeader, StyledFilters } from './styles';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { IFilters } from '../../modules/interfaces';
import { Button, TextField } from '@material-ui/core';

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
]

/**
 * Component responsible for updating filter values to state
 *
 * @param props
 * @constructor
 */
const Filters: FC<IProps> = (props) => {
  const {
    filters,
    updateFilter,
    resetFilters,
  } = props;
  const priceFrom = priceRange.find((price) => price?.value === filters?.priceFrom);
  const priceTo = priceRange.find((price) => price?.value === filters?.priceTo);

  return (
    <StyledFilters className={'filters'}>
      <Filter>
        <Autocomplete
          value={filters?.manufacturer}
          onChange={(event: any, newValue: string | null) => {
            updateFilter('manufacturer', newValue);
          }}
          disableClearable
          options={[
            'Any',
            'Porsche',
            'Nissan',
            'BMW',
            'Audi',
            'Mercedes-Benz',
            'Ford',
          ]}
          renderInput={(params) => <TextField {...params} label={'Manufacturer'}/>}
        />
      </Filter>
      <Filter>
        <Autocomplete
          value={filters?.body}
          onChange={(event: any, newValue: string | null) => {
            updateFilter('body', newValue);
          }}
          disableClearable
          options={[
            'Any',
            'Coupé',
            'Sedan',
            'SUV',
          ]}
          renderInput={(params) => <TextField {...params} label={'Body Style'}/>}
        />
      </Filter>
      <Filter>
        <FilterHeader>Price Range</FilterHeader>
      </Filter>
      <Filter>
        <Autocomplete
          value={priceFrom}
          onChange={(event: any,  newValue: { label: string, value: string }) => {
            updateFilter('priceFrom', newValue?.value);
          }}
          disableClearable
          options={priceRange}
          getOptionLabel={(option) => option?.label}
          renderInput={(params) => <TextField {...params} label={'Price From'}/>}
        />
      </Filter>
      <Filter>
        <Autocomplete
          value={priceTo}
          onChange={(event: any, newValue: { label: string, value: string }) => {
            updateFilter('priceTo', newValue?.value);
          }}
          disableClearable
          options={priceRange}
          getOptionLabel={(option) => option?.label}
          renderInput={(params) => <TextField {...params} label={'Price To'}/>}
        />
      </Filter>
      <Filter>
        <Button variant={'contained'} onClick={resetFilters}>Reset</Button>
      </Filter>
    </StyledFilters>
  );
};

Filters.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filters) as typeof Filters;
