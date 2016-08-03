import React, {Component, PropTypes} from 'react';
// import UnitInput from './UnitInput.js';
import RangeInput from './Inputs/RangeInput.js';

// Unit will remain days through most of development.
export default class SetupForm extends Component {
	render() {
		const {unit, range, updateUnit, updateRange} = this.props;
		return (
			<div className="setup-form">
				<RangeInput
					unit={unit}
					range={range}
					updateRange={updateRange}
				/>
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