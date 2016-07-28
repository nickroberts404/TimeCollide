import React, {Component, PropTypes} from 'react';
import SetupForm from './SetupForm.js';
import SubjectList from './SubjectList.js';

export default class Config extends Component {
	render() {
		const {subjects, intervals, unit, range, updateUnit, updateRange, createInterval, updateInterval, deleteInterval, updateSubjects} = this.props;
		return (
			<div className="config">
				<SetupForm 
					unit={unit}
					range={range}
					updateUnit={updateUnit}
					updateRange={updateRange}
				/>
				<SubjectList
					intervals={intervals}
					subjects={subjects}
					unit={unit}
					range={range}
					updateSubjects={updateSubjects}
					createInterval={createInterval}
					updateInterval={updateInterval}
					deleteInterval={deleteInterval}
				/>
			</div>
		)
	}
}

Config.propTypes = {
	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
	subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateUnit: PropTypes.func.isRequired,
	updateRange: PropTypes.func.isRequired,
	updateSubjects: PropTypes.func.isRequired,
	createInterval: PropTypes.func.isRequired,
	updateInterval: PropTypes.func.isRequired,
	deleteInterval: PropTypes.func.isRequired,
}