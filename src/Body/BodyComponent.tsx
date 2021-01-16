import React, { Fragment, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Menu from "./Menu";
import CartMain from "./Cart";

export const BodyComponent = () => {
	const [currPage, setPage] = useState(0);
	//page 0 - menu
	//page 1 - cart

	return (
		<Container>
			{currPage === 0 ? (
				<Menu nextPage={() => setPage(currPage + 1)} />
			) : currPage === 1 ? (
				<CartMain
					onBack={() => setPage(currPage - 1)}
					onForward={() => setPage(currPage + 1)}
				/>
			) : (
				<Container>
					<div className="final-screen-body">
						<h2>Order Placed! Thank you for shopping with us.</h2>
						<h4 style={{ color: "GrayText" }}>
							You may close this window now
						</h4>
					</div>
				</Container>
			)}
		</Container>
	);
};
