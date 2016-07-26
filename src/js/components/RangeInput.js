import React, {Component, PropTypes} from 'react';

export default class RangeInput extends Component {
	render() {
		return (
			<div className="range-input">
			</div>
		)
	}
}

RangeInput.propTypes = {
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateRange: PropTypes.func.isRequired,
}