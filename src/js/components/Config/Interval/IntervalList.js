import React, {Component, PropTypes} from 'react';
import Interval from './Interval.js';

export default class IntervalList extends Component {
	render() {
		const {intervals, unit} = this.props;
		return (
			<div className="interval-list">
				{intervals.map(i => <Interval
					key={i.id}
					data={i}
					unit={unit}
					/>
				)}
			</div>
		)
	}
}

IntervalList.propTypes = {
	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
}