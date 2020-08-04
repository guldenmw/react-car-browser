import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/navbar';
import Filters from '../../components/filters';
import VehicleListings from '../../components/vehicle-listings';

import { StyledApp } from './styles';
import { mapDispatchToProps, mapStateToProps } from './container';
import { IVehicle } from '../../modules/interfaces';
import VehicleCard from '../../components/vehicle-card';

interface IProps {
  vehicles: IVehicle[];
  isLoading: boolean;
  hasError: boolean;
  fetchVehicles?: () => void;
}

const App: FC<IProps> = (props) => {
  const {
    vehicles,
    isLoading,
    hasError,
    fetchVehicles,
  } = props;

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <StyledApp>
      <Navbar label={'We Show Cars!'}/>
      <aside className={'app-body'}>
        <Filters/>
        <section className={'vehicle-listings'}>
          {vehicles?.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle?.id}/>
          ))}
        </section>
      </aside>
    </StyledApp>
  );
};

App.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
