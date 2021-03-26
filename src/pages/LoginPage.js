import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {

	const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function submitHandler(event) {
    event.preventDefault();
  }
	
  return (
		<div className="loginpage-wrapper">
		<Container className="login-container">
	   	<Row>
		  	<Col>
			   	<div className="welcome-note">
				  	<h1>Agent Login &amp; <br />profile plugins <br />for Outcess Loan Manager</h1>
        	</div>
      	</Col>
      	<Col>
        	<div className="login-form">
        		<h2>Login Form</h2>
        		<Form onSubmit={submitHandler} className="container">
        	 		<Form.Group size="lg" controlId="username" className="input-field">
          	 		<Form.Label for="username">Username</Form.Label>
          	 		<span><i className="fas fa-user"></i></span>
								 <Form.Control type="text" 
									 	autoFocus 
									 	placeholder="Enter Username"
										value={username}
            				onChange={(e) => setUserName(e.target.value)} 
									/>
            	</Form.Group>
            	<Form.Group size="lg" controlId="password" className="input-field">
          	 		<Form.Label for="password">Password</Form.Label>
          	 		<span><i className="fas fa-unlock"></i></span>
								 <Form.Control type="password"
									 	placeholder="Enter Password" 
									 	value={password}
            				onChange={(e) => setPassword(e.target.value)}
									/>
            	</Form.Group>
							<Button type="submit" block size="lg" disabled={!validateForm()}>
								Login
							</Button>
        		</Form>
        	</div>
      	</Col>
    	</Row>
  	</Container>
		</div>
  );
}

export default LoginPage;