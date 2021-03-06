import React, {Component, PropTypes} from 'react';
import IntervalFormList from '../Interval/IntervalFormList.js';
export default class SubjectForm extends Component {
	constructor(props) {
		super(props);
		this.state = {title: props.data.title};
	}
	deleteSubject() {
		const {updateSubjects, data} = this.props;
		updateSubjects({
			type: 'delete',
			id: data.id
		})
	}
	updateSubject() {
		const {data, updateSubjects, toggleEdit} = this.props;
		const {title} = this.state;
		updateSubjects({
			type: 'update',
			id: data.id,
			toUpdate: {title}
		})
		toggleEdit();
	}
	render() {
		const {data, intervals, unit, range, updateIntervals} = this.props;
		const {title} = this.state;
		return (
			<div className="subject-form">
				<input 
					value={title}
					placeholder="Name..."
					autoFocus={true}
					onChange={e => this.setState({title: e.target.value})} />
				<button onClick={this.deleteSubject.bind(this)}>Delete</button>
				<button onClick={this.updateSubject.bind(this)}>Done</button>
				<IntervalFormList
					subjectId={data.id}
					intervals={intervals}
					unit={unit}
					range={range}
					updateIntervals={updateIntervals}
				/>
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