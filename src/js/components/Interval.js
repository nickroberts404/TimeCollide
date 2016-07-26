import React, {Component, PropTypes} from 'react';

export default class Interval extends Component {
	render() {
		return (
			<div className="interval"></div>
		)
	}
}

Interval.propTypes = {
	id: PropTypes.number.isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	subjectId: PropTypes.number.isRequired,
}