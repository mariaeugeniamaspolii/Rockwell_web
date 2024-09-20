import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/CustomNavBar';


const App = () => (
  <div className='App'>
    <NavBar />
    <Outlet />
  </div>
);

export default App;