import React, {Component, PropTypes} from 'react';
import RangeInput from './RangeInput.js';

export default class IntervalForm extends Component {
	render() {
		const {limitRange, range, unit} = this.props;
		return (
			<div className="interval-form">
				<RangeInput 
					range={range}
					unit={unit}
					limitRange={limitRange}
					updateRange={(t) => console.log(t)}
				/>
			</div>
		)
	}
}

IntervalForm.propTypes = {
	id: PropTypes.number.isRequired,
	subjectId: PropTypes.number.isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	limitRange: PropTypes.arrayOf(PropTypes.number).isRequired,
}