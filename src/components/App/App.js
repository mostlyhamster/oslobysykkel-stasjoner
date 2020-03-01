import React from 'react';
import './App.css';

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import StationList from '../StationList';

function App() {

  return (
    <div className="app__container">
        <AppHeader />
        <StationList />
        <AppFooter />
    </div>
  );
}

export default App;
