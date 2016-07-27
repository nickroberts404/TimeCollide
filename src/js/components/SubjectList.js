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

	createSubject() {
		const {subjects, updateSubjects} = this.props;
		const id = Date.now();
		updateSubjects([...subjects, {title: '', id}]);
		this.toggleEdit(id);
	}

	render() {
		const {intervals, subjects, unit, range, updateSubjects, createInterval} = this.props;
		const {edit} = this.state;
		return (
			<div className="subject-list">
				<button onClick={this.createSubject.bind(this)}>New Subject</button>
				{subjects.map(s => edit !== s.id
					? <Subject key={s.id} data={s} unit={unit}
						intervals={intervals.filter(i => i.subjectId === s.id)}
						toggleEdit={this.toggleEdit.bind(this)}
						/>
					: <SubjectForm key={s.id} data={s} unit={unit} range={range}
						intervals={intervals.filter(i => i.subjectId === s.id)}
						updateSubjects={updateSubjects}
						createInterval={createInterval}
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
	createInterval: PropTypes.func.isRequired,
}