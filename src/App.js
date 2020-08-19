import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import cartData from '../src/components/viewcart/Cartdata';
import { Logout } from '../src/components/register/Register';
import { GetOrderData } from '../src/components/orderhistory/MyOrderData';
import viewProductsData from './components/dashboard/dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        </div>
        <Switch>
          <Route path="/" component={Register} exact />
          <Route path="/login" component={Login} />
          <Route path="/carts" component={cartData} />
          <Route path="/OrderHistory" component={GetOrderData} />
          <Route path="/register" component={Register} />
          <Route path="/Logout" component={Logout} />
          <Route path="/viewProductsData" component={viewProductsData} />
          <Route path="**" render={() => window.alert('Oops..! Page Not Found')} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
