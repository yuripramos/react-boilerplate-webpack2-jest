import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const ComponentA = ({ name }) => {
	return (
		<div className={`${style.container} row`} >
			<div className="col-lg-12 col-md-12 col-sm-12">
				<p> {`Hey ${name} I'm your Component A`}</p>
			</div>
		</div>
	);
};


ComponentA.propTypes = {
	name: PropTypes.string,
};

export default ComponentA;
