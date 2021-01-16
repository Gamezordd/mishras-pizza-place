import React, { Fragment } from "react";
import Header from "./Header";
import BodyComponent from "./Body";
import Footer from "./Footer";

const Main = () => {
	return (
		<Fragment>
			<Header />
			<BodyComponent />
			<Footer />
		</Fragment>
	);
};

export default Main;
