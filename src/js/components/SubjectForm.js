import React, {Component, PropTypes} from 'react';
import IntervalFormList from './IntervalFormList.js';
export default class SubjectForm extends Component {
	constructor(props) {
		super(props);
		this.state = {title: props.data.title};
	}
	render() {
		const {data, intervals, unit, range, createInterval, updateInterval, deleteInterval} = this.props;
		const {title} = this.state;
		return (
			<div className="subject-form">
				<input value={title} onChange={e => this.setState({title: e.target.value})} />
				<IntervalFormList
					subjectId={data.id}
					intervals={intervals}
					unit={unit}
					range={range}
					createInterval={createInterval}
					updateInterval={updateInterval}
					deleteInterval={deleteInterval}
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
	createInterval: PropTypes.func.isRequired,
	toggleEdit: PropTypes.func.isRequired,
}