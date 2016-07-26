import React, {Component, PropTypes} from 'react';
import SubjectForm from './SubjectForm.js';
import Subject from './Subject.js';

export default class SubjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {edit: -1};
	}
	
	render() {
		return (
			<div className="subject-list">
			</div>
		)
	}
}

SubjectList.propTypes = {
	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
	subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateSubjects: PropTypes.func.isRequired,
	updateIntervals: PropTypes.func.isRequired,
}