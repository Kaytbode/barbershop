import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function SignUpViewer() {
	return (
		<div className="Reg-form">
			<p className="Reg-para">Registeration Form</p>
			<Form.Group as={Col} controlId="formGridEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" name="email" placeholder="Enter email" />
			</Form.Group>

			<Form.Group as={Col} controlId="formGridFirstName">
				<Form.Label>First Name</Form.Label>
				<Form.Control placeholder="First Name" name="firstName" />
			</Form.Group>

			<Form.Group as={Col} controlId="formGridLastName">
				<Form.Label>Last Name</Form.Label>
				<Form.Control placeholder="Last Name" name="lastName" />
			</Form.Group>

			<Form.Group as={Col} controlId="formGridPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" name="password" placeholder="Password" />
			</Form.Group>
			
			<Form.Group as={Col} controlId="formGridConfirmPassword">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control type="password" name="confirmPassword" placeholder="Password" />
			</Form.Group>

			<Button variant="primary" type="submit" className="Reg-button">
				Sign Up
			</Button>
		</div>
    )
}

export default SignUpViewer;
