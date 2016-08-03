import React, {Component, PropTypes} from 'react';
import IntervalForm from './IntervalForm.js';

export default class IntervalFormList extends Component {

	createInterval() {
		const {subjectId, range, intervals, updateIntervals} = this.props;
		const id = Date.now();
		updateIntervals({type: 'create', interval: {id, subjectId, range:range}});
	}

	render() {
		const {intervals, unit, range, updateIntervals} = this.props;
		return (
			<div className="interval-list">
				<button onClick={this.createInterval.bind(this)}>New Interval</button>
				{intervals.map(i => <IntervalForm
					key={i.id}
					data={i}
					unit={unit}
					limitRange={range}
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