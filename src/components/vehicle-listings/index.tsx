import React, { FC, useEffect } from 'react';
import { IVehicle } from '../../modules/interfaces';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';

interface IContainerProps {
  vehicles?: IVehicle[];
  isLoading?: boolean;
  hasError?: boolean;
  fetchVehicles?: () => void;
}

const VehicleListings: FC<IContainerProps> = (props) => {
  const {
    vehicles,
    isLoading,
    hasError,
    fetchVehicles,
  } = props;

  useEffect(() => {
    fetchVehicles?.();
  }, [fetchVehicles]);

  return (
    <div>
      {vehicles?.map(vehicle => (
        <div key={vehicle.id}>{vehicle.model}</div>
      ))}
    </div>
  );
};

VehicleListings.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleListings) as typeof VehicleListings;
