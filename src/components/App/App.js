import React from 'react';
import './App.css';

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import StationsList from '../StationsList';

function App() {

  return (
    <div className="app__container">
        <AppHeader />
        <StationsList />
        <AppFooter />
    </div>
  );
}

export default App;
