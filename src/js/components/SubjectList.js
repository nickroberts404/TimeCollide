import React, {Component, PropTypes} from 'react';
import SubjectForm from './SubjectForm.js';
import Subject from './Subject.js';

export default class SubjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {edit: -1};
	}
	
	toggleEdit(id = -1) {
		this.setState({edit: id});
	}
	render() {
		const {intervals, subjects, unit, range, updateSubjects, updateIntervals} = this.props;
		const {edit} = this.props;
		return (
			<div className="subject-list">
				{subjects.map(s => edit === s.id
					? <Subject
						data={s}
						intervals={intervals.filter(i => i.subjectId === s.id)}
						unit={unit}
						toggleEdit={this.toggleEdit.bind(this)}
						/>
					: <SubjectForm
						data={s}
						intervals={intervals.filter(i => i.subjectId === s.id)}
						unit={unit}
						range={range}
						updateSubjects={updateSubjects}
						updateIntervals={updateIntervals}
						toggleEdit={this.toggleEdit.bind(this)}
						/>
				)}
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