import React from 'react';

/**  * @author:Sarath Chandra 
 *  * @description:To render Products */

const DisplayItems = (props) => {
    let { pdata } = props;
    return (
        <tr>
            <td>{pdata.pName}</td>
            <td>{pdata.pCost}</td>
            <td>{pdata.pDescription}</td>
            <td>{pdata.pRating}</td>
            <td><select name="quantity" onChange={(event) => { props.handleChange(event) }} >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4' > 4</option >
            </select ></td >
            <td><button onClick={() => props.handleBuy(pdata)}>Add To Cart</button></td>
        </tr >
    )
}

export default DisplayItems;