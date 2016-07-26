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