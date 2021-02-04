import React from 'react';
import "./login.css";
import { Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return (
		<Container className="section">
	   	<Row>
		  	<Col>
			   	<div className="welcome-note">
				  	<h1>Agent Login &amp; <br />profile plugins <br />for Outcess Loan Manager</h1>
        	</div>
      	</Col>
      	<Col>
        	<div className="login-form">
        		<h2>Login Form</h2>
        		<form action="/action_page.php" method="post">
          		<div className="container">
        	 			<div className="input-field">
          	 			<label for="username">Username</label>
          	 			<span><i className="fas fa-user"></i></span>
          	 			<input type="text" placeholder="Enter Username" name="uname" required />
            		</div>
            		<div className="input-field">
          	 			<label for="password">Password</label>
          	 			<span><i className="fas fa-unlock"></i></span>
          	 			<input type="password" placeholder="Enter Password" name="psw" required />
            		</div>
            		<button type="submit">Login</button>
          		</div>
        		</form>
        	</div>
      	</Col>
    	</Row>
  	</Container>
  );
}

export default LoginPage;