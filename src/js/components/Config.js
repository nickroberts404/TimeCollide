import React, {Component, PropTypes} from 'react';
import SetupForm from './SetupForm.js';
import SubjectList from './SubjectList.js';

export default class Config extends Component {
	render() {
		return (
			<div className="config">
				<SetupForm />
				<SubjectList />
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
}