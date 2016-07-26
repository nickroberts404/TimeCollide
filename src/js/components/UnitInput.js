import React, {Component, PropTypes} from 'react';

export default class UnitInput extends Component {
	render() {
		return (
			<div className="unit-input">
			</div>
		)
	}
}

UnitInput.propTypes = {
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	updateUnit: PropTypes.func.isRequired,
}