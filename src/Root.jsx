import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages/Login/index';
import './App.css';

const Root = () => {
  const [loginInfo, setLoginInfo] = useState(null);

  return (
    <BrowserRouter>
      {
        !loginInfo
        ? <Login setLoginInfo={setLoginInfo} />
        : <div>dd</div>
      }
    </BrowserRouter>
  )
}

export default Root;