import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, CircularProgress, Typography } from '@material-ui/core';

import Navbar from '../../components/navbar';
import Filters from '../../components/filters';

import { IVehicle } from '../../modules/interfaces';
import VehicleCard from '../../components/vehicle-card';
import { StyledApp } from './styles';
import { mapDispatchToProps, mapStateToProps } from './container';


interface IProps {
  vehicles: IVehicle[];
  isLoading: boolean;
  hasError: boolean;
  fetchVehicles?: () => void;
}

/**
 * Main App component
 */
const App: FC<IProps> = (props) => {
  const {
    vehicles,
    isLoading,
    hasError,
    fetchVehicles,
  } = props;

  // On the first load, dispatch the action to fetch all vehicles
  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <StyledApp>
      <Navbar label={'We Show Cars!'}/>
      <aside className={'app-body'}>
        <Filters/>
        <section className={'vehicle-listings'}>
          {isLoading && (
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              width={'100%'}
              height={'70%'}
            >
              <CircularProgress size={100}/>
            </Box>
          )}

          {!isLoading && !hasError && vehicles?.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle?.id}/>
          ))}

          {hasError && (
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              width={'100%'}
              height={'70%'}
            >
              <Typography variant={'h5'}>Failed to load vehicles.</Typography>
            </Box>
          )}
        </section>
      </aside>
    </StyledApp>
  );
};

App.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
