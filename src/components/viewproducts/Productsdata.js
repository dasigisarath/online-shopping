import React, { Component } from 'react';
import '../register/registerstyles.css';
import axios from 'axios';
import DisplayPro from '../viewproducts/DisplayProducts';
import axiosHoc from '../Hoc/axiosHoc';


class ProductsData extends Component {
  
/**  * @author:Sarath Chandra 
    @description:function to Add to Cart*/
  handleBuy = (productItems,quantity) => {
   
      let pQuantity=parseInt(quantity);
      console.log(typeof(pQuantity));
      
    console.log("ordered", productItems);
    let pId = productItems.pId;
    let pName = productItems.pName;
    let cost = productItems.pCost;
    let pCost=cost*pQuantity;
    console.log(typeof(pCost));
    let pDescription = productItems.pDescription;
    let pRating = productItems.pRating;
   
    let userEmail = sessionStorage.getItem('email');


    if (pId.length != 0 & pName.length != 0 & cost.length != 0 & pDescription.length != 0 & pRating.length != 0) {
      axios.post('http://localhost:3001/carts', {
        pName,
        pCost,
        pDescription,
        pRating,
        pQuantity,
        userEmail
      })
        .then(function (response) {
          console.log(response);
          window.alert('Added to Cart Successfully');
        })
        .catch(function (error) {
          console.log('Something went wrong');
          console.log(error);
        });
    }
    else {
      console.log('did not receive products data properly from child to parent');
    }
  }
  render() {

    return (<React.Fragment>
      <h1>Product Details</h1>
      <table>
        <thead>
          <tr><td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Rating</td>
            <td>Quantity</td>
            <td>Cart</td></tr>
        </thead>
        <tbody>
          {
            
            this.props.data.map((product, i) => {
              return <DisplayPro key={i} pdata={product} handleBuy={this.handleBuy} />
            })
          }
        </tbody>
      </table>

    </React.Fragment>)
  }
}

const viewProducts=axiosHoc(ProductsData,{url:' http://localhost:3001/products'});
export default viewProducts;