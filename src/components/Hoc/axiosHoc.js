import React, { Component } from 'react';
import axios from 'axios';

/**  * @author:Sarath Chandra 
 *  * @description:HOC for GET API calls */

function axiosHoc(WrapperComponent, input) {
  return class HOC extends Component {
    constructor() {
      super();
      this.state = {
        data: [

        ]
      }
    }
    componentDidMount() {
      console.log(input.url);
      axios.get(input.url, {}).then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      }).catch((error) => {
        console.log(error);
      })
    }
    render() {
      return (
        <WrapperComponent data={this.state.data} />

      )
    }
  }
}
 
/**  * @author:Sarath Chandra 
 *  * @description:HOC for POST API calls */

export const axiosHocPost=(input)=>{
  console.log("axioshocpost", input.url,input.method,input.data);
  axios({url:input.url,method:input.method,data:input.data}).then((response)=>{
      console.log(response.data);
  }).catch((error)=>
{ 
  console.log(error);
})
}

export default axiosHoc;