import React, { Component } from "react";
import style from "./style.scss";

const ComponentB = ({lastname}) => {

	return (
		<div className={`${style.container} row`} >
			<div className ="col-12">
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
				<p> {`${lastname} don't forget the component B`} </p>
			</div>
		</div>
	);
}

export default ComponentB;