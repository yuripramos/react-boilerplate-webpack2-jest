import React from "react";
import style from "./style.scss";

const Footer = () => {
	return (
		<footer className={`${style.footer}`}>
			<div className="container">
				<p className="text-muted">Place sticky footer content here.</p>
			</div>
		</footer>
	);
};

export default Footer;
