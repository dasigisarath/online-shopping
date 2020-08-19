import React, { Component } from 'react';
import './registerstyles.css'
import styles from '../styles/samestyle.module.css'
import axios from "axios";

/**  * @author:Sarath Chandra 
 * * @description:Register to Add new User   */

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      userEmail: '',
      password: '',
      number: '',
      address: ''
    }
  }

  handleChange = (event) => {
    let userDatas = this.state;
    userDatas[event.target.name] = event.target.value;
    this.setState({ userDatas })
  }
  /**  * @author:Sarath Chandra 
      @description:function to store new user*/
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userDatas);
    let { userDatas } = this.state;
    let name = userDatas.username;
    let userEmail = userDatas.email;
    let password = userDatas.password;
    let number = userDatas.phoneNumber;
    let address = userDatas.address;
    this.setState({ userDatas })
    if (name.length !== 0 & userEmail.length !== 0 & password.length !== 0 & number.length !== 0 & address.length !== 0) {
      axios.post('http://localhost:3001/users', {
        name,
        userEmail,
        password,
        number,
        address
      })
        .then(function (response) {
          console.log(response);
          alert('Registered Successfully');
          window.location.reload();
        })
        .catch(function (error) {
          console.log('Something went wrong');
          console.log(error);
        });

    }
    else {
      alert('Please Enter all fields');
    }
  }
  render() {
    return (
      <div className={styles.container} >

        <form id="contact" >
          <h3 >Sign up Form</h3>
          <h4>Welcome to Online Shopping</h4>
          <fieldset>
            <input placeholder="UserName" type="text" name="name" id="name" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Enter Email" type="email" id="userEmail" name="userEmail" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Set Password" type="password" id="password" name="password" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Mobile Number" type="text" id="number" name="number" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Address" type="text" name="address" id="address" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <button style={{ padding: "10px" }} onClick={this.handleSubmit}>Submit</button>
            <a href="/login"> Have account ? Login</a>
          </fieldset>
        </form>
      </div>
    )
  }
}


export default Register;

/**  * @author:Sarath Chandra 
 * * @description:Function component to logout  */

export const Logout = () => {
  sessionStorage.removeItem('email');
  window.location = "/Login";

}






