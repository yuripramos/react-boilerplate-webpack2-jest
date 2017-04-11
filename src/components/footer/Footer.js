import React, { Component } from "react";
import style from "./style.scss";


class Footer extends React.Component {
	render(){
		return (
			<footer className={`${style.container} row`}>
			      <div className="container">
						<p className={`${style.highlight1} text-center`}> Footer Footer Footer </p>
			      </div>
			</footer>
		);
	}
}

export default Footer;
