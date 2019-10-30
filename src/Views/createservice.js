import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function ServiceViewer() {
	return (
		<div className="Reg-form">
			<p className="Reg-para">Start Service</p>
			<Form.Group as={Col} controlId="formGridFirstName">
				<Form.Label>Customer Name</Form.Label>
				<Form.Control placeholder="Customer Name" name="customer" required/>
			</Form.Group>

			<Button variant="primary" type="submit" className="Reg-button">
				Start Service
			</Button>
		</div>
    )
}

export default ServiceViewer;
