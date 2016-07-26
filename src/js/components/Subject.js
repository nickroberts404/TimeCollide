import React, {Component, PropTypes} from 'react';
import IntervalList from './IntervalList.js';

export default class Subject extends Component {
	render() {
		const {data, toggleEdit} = this.props;
		const {title, id} = data;
		return (
			<div className="subject">
				{title || 'Untitled'}
				<button onClick={() => toggleEdit(id)}>Edit</button>
				<IntervalList />
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