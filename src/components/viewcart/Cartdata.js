import React, { Component } from 'react';
import '../register/registerstyles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DisplayProductsInCart from '../viewcart/DisplayCart';
import axiosHoc from '../Hoc/axiosHoc';


/**  * @author:Sarath Chandra 
 *  * @description:To get Cart Data*/

class cartData extends Component {

  
/**  * @author:Sarath Chandra 
  @description:function to order products */
  handleBuy = (cartItems) => {

    let pId = cartItems.pId;
    let pName = cartItems.pName;
    let pCost = cartItems.pCost;
    let pDescription = cartItems.pDescription;
    let pRating = cartItems.pRating;
    let pQuantity = cartItems.pQuantity;

    let today = new Date();
    let orderDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    let userEmail = sessionStorage.getItem('email');


    axios.post(`http://localhost:3001/myorders`, {
      pName,
      pCost,
      pDescription,
      pRating,
      pQuantity,
      userEmail,
      orderDate

    })
      .then(function (response) {
        console.log(response);
        window.alert('Order Placed');
        this.handleRemove(cartItems);

      }.bind(this))
      .catch(function (error) {
        console.log('Cannot Order now try again');
        console.log(error);
      });
  }
  
/**  * @author:Sarath Chandra 
    @description:function to delete particular from cart*/

  handleRemove = (removeItem) => {
    let id = removeItem.id;
    axios.delete(`http://localhost:3001/carts/${id}`, {
      data: { id: 'id' }
    })
      .then(function (response) {
        window.location = "/carts"

      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {

    return (<React.Fragment>
      <div>
        <Link to="/carts"><pre>VIEW CART</pre></Link>
        <Link to="/OrderHistory"><pre>VIEW ORDERS</pre></Link>
        <Link to="/viewProductsData"><pre>VIEW PRODUCTS</pre></Link>
        <Link to="/Logout"><pre>LOGOUT</pre></Link>
      </div>
      <h1>Cart Details</h1>
      <table>
        <thead>
          <tr><td>Name</td>
            <td>Price (INR)</td>
            <td>Description</td>
            <td>Rating</td>
            <td>Quantity</td>
            <td>Order</td>
            <td>Remove</td></tr>
        </thead>
        <tbody>
          {

            this.props.data.map((product, i) => {
              return <DisplayProductsInCart key={i} cdata={product} handleBuy={this.handleBuy} handleRemove={this.handleRemove} />
            })
          }
        </tbody>
      </table>

    </React.Fragment>)
  }
}

const viewCartData = axiosHoc(cartData, { url: `http://localhost:3001/carts?userEmail=${sessionStorage.getItem('email')}` });
export default viewCartData;