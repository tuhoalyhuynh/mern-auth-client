import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route { ...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login"/>
  }}
}

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;