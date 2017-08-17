import React from "react";
import style from "./style.scss";

const ComponentA = ({ name }) => {
	// debugger;
	return (
		<div className={`${style.container} row`} >
			<div className="col-lg-12 col-md-12 col-sm-12">
				<p> {`Hey ${name} I'm your Component A`}</p>
			</div>
		</div>
	)
};

export default ComponentA;
