import React, {Component, PropTypes} from 'react';
import IntervalForm from './IntervalForm.js';

export default class IntervalFormList extends Component {

	createInterval() {
		const {subjectId, range, intervals, updateIntervals} = this.props;
		const id = Date.now();
		updateIntervals({id, subjectId, range:range});
	}

	render() {
		const {intervals, unit, updateIntervals, range} = this.props;
		return (
			<div className="interval-list">
				<button onClick={this.createInterval.bind(this)}>New Interval</button>
				{intervals.map(i => <IntervalForm
					key={i.id}
					id={i.id}
					unit={unit}
					range={i.range}
					limitRange={range}
					subjectId={i.subjectId}
					updateIntervals={updateIntervals}
					/>
				)}
			</div>
		)
	}
}

IntervalFormList.propTypes = {
	subjectId: PropTypes.number.isRequired,
	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateIntervals: PropTypes.func.isRequired,
}