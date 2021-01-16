import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

interface IProps {
	onForward: () => void;
}

export const SplashComponent = (props: IProps) => {
	return (
		<div className="splash-background">
			<h2 className="splash-text">Order A Fresh Pizza with Treflo</h2>
			<Button onClick={() => props.onForward()}>Get Started</Button>
		</div>
	);
};
