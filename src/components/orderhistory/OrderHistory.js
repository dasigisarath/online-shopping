import React, { Component } from 'react';
import '../register/registerstyles.css'
import DisplayItems from '../orderhistory/Displayorders';
import axiosHoc from '../Hoc/axiosHoc';


class OrderHistory extends Component {

  render() {

    return (<React.Fragment>
      <h1>Order History</h1>
      <table>
        <thead>
          <tr><td>Name</td>
            <td>Price (INR)</td>
            <td>Description</td>
            <td>Rating</td>
            <td>Quantity</td>
            <td>Order Date</td>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((order, i) => {
              return <DisplayItems key={i} orderdata={order} />
            })
          }
        </tbody>
      </table>

    </React.Fragment>)
  }

}

const OrderHistoryData = axiosHoc(OrderHistory, { url: `http://localhost:3001/myorders?userEmail=${sessionStorage.getItem('email')} ` });

export default OrderHistoryData;