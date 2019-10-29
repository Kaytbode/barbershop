import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function LogInViewer() {
	return (
		<div className="Reg-form">
			<p className="Reg-para">Already Registered?</p>
			<Form.Group as={Col} controlId="formGridEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" name="email" placeholder="Enter email" required/>
			</Form.Group>

			<Form.Group as={Col} controlId="formGridPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" name="password" placeholder="Minimum of 8 characters" required/>
			</Form.Group>

			<Button variant="primary" type="submit" className="Reg-button">
				Log In
			</Button>
		</div>
    )
}

export default LogInViewer;
