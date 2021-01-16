import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Actions } from "../../ReduxStore";
import { MenuAPI } from "./constants";
import { MenuBody } from "./MenuBody";
import { Options } from "./OptionsComponent";

const mapStateToProps = (state: any) => {
	return {
		data: state.data,
		numItems: state.totalItems,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
	};
};

interface IProps {
	data: any;
	numItems: number;
	loadMenu: (res: any) => void;
	nextPage: () => void;
}

const MenuComponentNoRedux = (props: IProps) => {
	const [isLoading, setLoading] = useState(true);
	const [results, setResults] = useState<any[]>([]);
	const [sortParam, setSort] = useState<string|null>(null);
	
	const fetchMenu = async () => {
		try {
			let res = await fetch(MenuAPI);
			let resjson = await res.json();
			props.loadMenu(resjson);
			setResults(resjson);

			//set filter to veg initially
			handleFilter(false, resjson);
		} catch (err) {
			console.error(err);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchMenu();
		
	}, []);


	const handleFilter = (val: boolean, data: any[]) => {
		let temp = data.filter((i: any) => i.isVeg !== val);
		handleSort(sortParam, temp);
	};

	const handleSort = (val: string | null, data: any[]) => {
		setSort(val);
		let temp = data;
		if (val === "Price") {
			temp.sort((a, b) => {
				return a.price - b.price;
			});
		} else if (val === "Rating") {
			temp.sort((a, b) => {
				return b.rating - a.rating;
			});
		}
		setResults([...temp]);
	};

	if (isLoading) {
		return (
			<Row>
				{Array.apply(null, Array(4)).map(function (i, ind) {
					return (
						<Col key={'423'+ind} xs={12} sm={6} lg={4} xl={3}>
							<div className="menu-card">
								<Card
									style={{
										height: "300px",
										paddingTop: "30%",
									}}
								>
									<Spinner
										style={{
											placeSelf: "center",
											color: "#7e685a",
										}}
										animation="border"
									/>
									<p
										style={{
											placeSelf: "center",
											color: "#7e6851",
										}}
									>
										Loading
									</p>
								</Card>
							</div>
						</Col>
					);
				})}
			</Row>
		);
	}

	return (
		<Fragment>
			<Options
				onFilter={(isNonVeg: boolean) => {handleFilter(isNonVeg, props.data)}}
				onSort={(val) => handleSort(val, results)}
			/>
			<MenuBody data={results} />
			<div className="next-btn">
				<Button
					onClick={() => props.nextPage()}
					style={{
						backgroundColor: "#afd275",
						borderColor: "#afd275",
					}}
				>
					Go To Cart <i className="fa fa-chevron-right" />
				</Button>
				<div className="count-badge">
					<div className="badge-count">{props.numItems} </div>
				</div>
			</div>
		</Fragment>
	);
};

export const MenuComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuComponentNoRedux);
