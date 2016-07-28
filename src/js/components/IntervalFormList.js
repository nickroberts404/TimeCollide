import React, {Component, PropTypes} from 'react';
import IntervalForm from './IntervalForm.js';

export default class IntervalFormList extends Component {

	createInterval() {
		const {subjectId, range, intervals, createInterval} = this.props;
		const id = Date.now();
		createInterval({id, subjectId, range:range});
	}

	render() {
		const {intervals, unit, range, updateInterval, deleteInterval} = this.props;
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
					updateInterval={updateInterval}
					deleteInterval={deleteInterval}
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
	createInterval: PropTypes.func.isRequired,
	updateInterval: PropTypes.func.isRequired,
	deleteInterval: PropTypes.func.isRequired,
}