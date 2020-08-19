import React, { Component } from 'react';
import '../register/registerstyles.css'
import { Link } from 'react-router-dom';
import { axiosHocPost } from '../Hoc/axiosHoc';
import DisplayPro from '../viewproducts/DisplayProducts';
import axiosHoc from '../Hoc/axiosHoc';

/**  * @author:Sarath Chandra 
 *  * @description:Class Component to Display All Products */

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [

      ]
      ,
      carts: {
        pName: '',
        pCost: '',
        pRating: '',
        pDescription: ' ',
        quantity: '',
        userEmail: ''
      }
    }
    this.handleBuy = this.handleBuy.bind(this);
  }
  handleChange = (event) => {
    let carts = this.state.carts;
    carts[event.target.name] = event.target.value;
    this.setState({ carts });

  }
  /**  * @author:Sarath Chandra 
    @description:function to Add to Cart*/
  handleBuy = (productsCart) => {

    let userEmail = sessionStorage.getItem('email');
    const cart = {
      pName: productsCart.pName,
      pCost: parseInt(productsCart.pCost) * parseInt(this.state.carts.quantity),
      pRating: productsCart.pRating,
      pDescription: productsCart.pDescription,
      quantity: this.state.carts.quantity,
      userEmail: productsCart.userEmail,

    }
    axiosHocPost({ url: ' http://localhost:3001/carts', method: 'post', data: cart });
    alert("sucessfully saved to cart");
    window.location.reload();
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/carts"><pre>VIEW CART</pre></Link>
          <Link to="/OrderHistory"><pre>VIEW ORDERS</pre></Link>
          <Link to="/Logout"><pre>LOGOUT</pre></Link>
        </div>

        <React.Fragment>
          <h1>Product Details</h1>
          <table>
            <thead>
              <tr><td>Name</td>
                <td>Price (INR)</td>
                <td>Description</td>
                <td>Rating</td>
                <td>Quantity</td>
                <td>Cart</td></tr>
            </thead>
            <tbody>
              {
                this.props.data.map((product, i) => {
                  return <DisplayPro key={i} pdata={product} handleChange={this.handleChange} handleBuy={this.handleBuy} />
                })
              }
            </tbody>
          </table>
        </React.Fragment>
      </div>
    )
  }
}
const viewProductsData = axiosHoc(Products, { url: 'http://localhost:3001/products' });
export default viewProductsData;