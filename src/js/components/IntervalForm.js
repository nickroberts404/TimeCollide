import React, {Component, PropTypes} from 'react';
import RangeInput from './RangeInput.js';

export default class IntervalForm extends Component {
	render() {
		const {data, limitRange, unit, updateIntervals} = this.props;
		return (
			<div className="interval-form">
				<RangeInput 
					range={data.range}
					unit={unit}
					limitRange={limitRange}
					updateRange={(t) => updateIntervals({
						type: 'update',
						id: data.id,
						toUpdate: {range: t.sort((t1, t2) => t1 - t2)}
					})}
				/>
			</div>
		)
	}
}

IntervalForm.propTypes = {
	data: PropTypes.object.isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	limitRange: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateIntervals: PropTypes.func.isRequired,
}