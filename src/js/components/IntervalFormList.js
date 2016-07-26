import React, {Component, PropTypes} from 'react';
import IntervalForm from './Interval.js';

export default class IntervalFormList extends Component {
	render() {
		const {intervals, unit} = this.props;
		return (
			<div className="interval-list">
				{intervals.map(i => <Interval
					key={i.id}
					id={i.id}
					range={i.range}
					subjectId={i.subjectId}
					/>
				)}
			</div>
		)
	}
}

IntervalFormList.propTypes = {
	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
}