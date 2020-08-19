import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../register/registerstyles.css'
import { Link } from 'react-router-dom';
import Displayorders from '../orderhistory/Displayorders';
import axios from 'axios';

/**  * @author:Sarath Chandra 
 *  * @description:To Get all Order Data */

export const GetOrderData = () => {
  let history = useHistory();

  const [list, updateList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/myorders?userEmail=${sessionStorage.getItem('email')}`).then((response) => {
      console.log(Response.data);
      updateList(response.data);
    })
  }, [])
  return (<React.Fragment>
    <div>
      <Link to="/carts"><pre>VIEW CART</pre></Link>
      <Link to="/OrderHistory"><pre>VIEW ORDERS</pre></Link>
      <Link to="/viewProductsData"><pre>VIEW PRODUCTS</pre></Link>
      <Link to="/Logout"><pre>LOGOUT</pre></Link>
    </div>
    <h1>Order History</h1>
    <table>
      <thead>
        <tr><td>Name</td>
          <td>Price (INR)</td>
          <td>Description</td>
          <td>Rating</td>
          <td>Order Date</td>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, i) => {
            return <Displayorders key={i} orderdata={item} />
          })
        }
      </tbody>
    </table>

  </React.Fragment>)

}