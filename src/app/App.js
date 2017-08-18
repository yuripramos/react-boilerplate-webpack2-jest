import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./App.css";
import Footer from "../components/footer/Footer.js";
import ComponentA from "../components/component_a/componentA.js";
import ComponentB from "../components/component_b/componentB.js";
import Header from "../components/header/Header.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'State 1',
			lastname: 'State 2',
		};
	}
	render() {
		return (
			<div>
				<div className={`container`}>
					<div className="row">
						<Header />
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							<ComponentA name={this.state.name} />
						</div>
						<div className="col-md-12 text-center">
							<ComponentB lastname={this.state.lastname} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
