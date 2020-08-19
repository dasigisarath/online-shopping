import React from 'react';

/**  * @author:Sarath Chandra 
 *  *  * @param props 
 *  * @description:To Render Orders */

const Displayorders = (props) => {
    let { orderdata } = props;
    return (
        <tr>
            <td>{orderdata.pName}</td>
            <td>{orderdata.pCost}</td>
            <td>{orderdata.pDescription}</td>
            <td>{orderdata.pRating}</td>
            <td>{orderdata.orderDate}</td>
        </tr>
    )
}
export default Displayorders;