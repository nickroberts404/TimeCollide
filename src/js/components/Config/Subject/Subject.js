import React, {Component, PropTypes} from 'react';
import IntervalList from '../Interval/IntervalList.js';

export default class Subject extends Component {
	render() {
		const {data, toggleEdit, intervals, unit} = this.props;
		const {title, id} = data;
		return (
			<div className="subject">
				{title || 'Untitled'}
				<button onClick={() => toggleEdit(id)}>Edit</button>
				<IntervalList intervals={intervals} unit={unit} />
			</div>
		)
	}
}

Subject.propTypes = {
	data: PropTypes.object.isRequired,
	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	toggleEdit: PropTypes.func.isRequired,
}