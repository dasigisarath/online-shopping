import React from 'react';

/**  * @author:Sarath Chandra 
  @description:To render cart data */
const DisplayProductsInCart = (props) => {
  let { cdata } = props;
  return (
    <tr>
      <td>{cdata.pName}</td>
      <td>{cdata.pCost}</td>
      <td>{cdata.pDescription}</td>
      <td>{cdata.pRating}</td>
      <td>{cdata.quantity}</td >
      <td><button onClick={() => props.handleBuy(cdata)}>Order</button></td>
      <td><button onClick={() => props.handleRemove(cdata)}>Remove</button></td>
    </tr >
  )
}
export default DisplayProductsInCart;