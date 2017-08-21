import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: false,
    };
  }

  render() {
    const { lastname } = this.props;
    return (
      <div className={`${style.container} row`} >
        <div className="col-12">
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
          <p> {`${lastname} of the component B`} </p>
        </div>
      </div>
    );
  }
}

ComponentB.propTypes = {
  lastname: PropTypes.string,
};

export default ComponentB;
