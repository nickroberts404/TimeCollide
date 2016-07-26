import React, {Component, PropTypes} from 'react';
import UnitInput from './UnitInput.js';
import RangeInput from './RangeInput.js';
export default class SetupForm extends Component {
	render() {
		return (
			<div className="setup-form">
				<UnitInput />
				<RangeInput />
			</div>
		)
	}
}

SetupForm.propTypes = {
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateUnit: PropTypes.func.isRequired,
	updateRange: PropTypes.func.isRequired,
}