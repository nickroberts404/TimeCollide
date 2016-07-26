import React, {Component, PropTypes} from 'react';

export default class SubjectForm extends Component {
	render() {
		return (
			<div className="subject-form">
				{"Edit Mode!"}
			</div>
		)
	}
}

SubjectForm.propTypes = {
	data: PropTypes.object.isRequired,
	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateSubjects: PropTypes.func.isRequired,
	updateIntervals: PropTypes.func.isRequired,
	toggleEdit: PropTypes.func.isRequired,
}