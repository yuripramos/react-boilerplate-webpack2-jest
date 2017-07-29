import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./App.css";
import Footer from "../components/footer/Footer.js";
import ComponentA from "../components/component_a/ComponentA.js";
import ComponentB from "../components/component_b/ComponentB.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yuri',
      lastname: 'Ramos'
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <ComponentA name={this.state.name} />
            </div>
            <div className="col-6 text-center">
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
