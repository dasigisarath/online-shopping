import React, { Component } from 'react';
import '../register/registerstyles.css'
import styles from '../styles/samestyle.module.css'
import axios from "axios";

/**  * @author:Sarath Chandra 
 *  * @description:Class Component for Login */

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      password: '',
      message: {
        userEmail: '',
        password: ''
      }
    }
  }
 
 /**  * @author:Sarath Chandra 
      @description:To change values*/
  handleChange = (event) => {
    let data = this.state;
    data[event.target.name] = event.target.value;
    this.setState({ data })
  }

  /**  * @author:Sarath Chandra 
      @description:function to authenticate user*/

  handleSubmit = (event) => {
    event.preventDefault();
    let userEmail = this.userEmail.value;
    let password = this.password.value;
    if (userEmail.length != 0 && password.length != 0) {
      axios.get(`http://localhost:3001/users?userEmail=${userEmail}&password=${password}`).then((response) => {
        let data = response.data;
        if (data.length > 0) {
          sessionStorage.setItem('email', userEmail);
          alert("login successfull")
          this.props.history.push("/viewProductsData");
        }
        else {
          alert("Invaid user")
        }
      }).catch((error) => {
        alert("Wrong Url")

      })
    }
    else {
      console.log("error");
    }
  }

  
  render() {
    return (
      <div className={styles.container}>
        <form id="contact" >
          <h3 style={{ fontFamily: "monospace" }}>LOGIN</h3>
          <h4 style={{ fontFamily: "monospace" }}>Welcome to Online Shopping</h4>
          <fieldset>
            <input placeholder="Enter email" type="text" name="userEmail" id="userEmail" ref={userEmail => this.userEmail = userEmail}  onChange={this.handleChange}   required />
          </fieldset>
          <fieldset>
            <input placeholder="Enter Password" type="password" name="password" id="password" ref={(password) => this.password = password}  onChange={this.handleChange}  />
          </fieldset>
          <fieldset>
            <button style={{ padding: "10px" }} onClick={this.handleSubmit}>Login</button>
          </fieldset>
        </form>

      </div>
    )
  }
}

export default Login;