import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import './styles.scss';

export const Footer = () => {
	return (
		<Jumbotron className="banner-style footer-style">
			<Row className='align-items-center justify-content-center'>
			<p>Created with &nbsp;</p>
			<div className="beating-heart-container">
				<div className='fa fa-heart human-heart'/>
			</div>
				 <p>&nbsp; for Treflo by Amartya Mishra</p>
			</Row>
			
		</Jumbotron>
	);
};
