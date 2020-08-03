import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import VehicleListings from '../../components/vehicle-listings';
import Navbar from '../../components/navbar';
import { StyledApp } from './styles';
import Filters from '../../components/filters';

function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <Navbar label={'We Show Cars!'}/>
        <aside className={'app-body'}>
          <Filters/>
          <VehicleListings/>
        </aside>
      </StyledApp>
    </Provider>
  );
}

export default App;
