import React, {Component, PropTypes} from 'react';
import IntervalList from './IntervalList.js';

export default class Subject extends Component {
	render() {
		return (
			<div className="subject">
				<IntervalList />
			</div>
		)
	}
}