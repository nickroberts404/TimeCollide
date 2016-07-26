import React, {Component, PropTypes} from 'react';

export default class Interval extends Component {
	render() {
		return (
			<div className="interval">interval</div>
		)
	}
}

Interval.propTypes = {
	id: PropTypes.number.isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	subjectId: PropTypes.number.isRequired,
}