const d3 = require('d3');
import React, {Component} from 'react';
import Config from './components/Config';
import Display from './components/Display';
import Actions from './actions.js';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			intervals: [],
			subjects: [],
			unit: 'day',
			range: [d3.timeDay.floor(new Date).getTime(), d3.timeDay.offset(d3.timeDay.ceil(new Date), 7).getTime()]
		}
	}
	
	updateUnit(unit) {
		this.setState({unit});
	}

	updateRange(range) {
		// If start time is greater than end time, reverse the two. 
		range = range.sort((t1, t2) => t1 - t2);
		this.setState({range});
	}

	updateIntervals(action) {
		const intervals = this.state.intervals;
		if (action.type === 'create') {
			this.setState({intervals: Actions.createInterval(intervals, action.interval)});
		} else if (action.type === 'update') {
			this.setState({intervals: Actions.updateInterval(intervals, action.id, action.toUpdate)});
		} else if (action.type === 'delete') {
			this.setState({intervals: Actions.deleteInterval(intervals, action.id)});
		}
	}

	updateSubjects(action) {
		const subjects = this.state.subjects;
		if (action.type === 'create') {
			this.setState({subjects: Actions.createSubject(subjects, action.subject)});
		} else if (action.type === 'update') {
			this.setState({subjects: Actions.updateSubject(subjects, action.id, action.toUpdate)});
		} else if (action.type === 'delete') {
			this.setState({subjects: Actions.deleteSubject(subjects, action.id)});
		}
	}

	render() {
		const {intervals, subjects, unit, range} = this.state;
		return (
			<div className="app-container">
				<Display />
				<Config
					intervals={intervals}
					subjects={subjects}
					unit={unit}
					range={range}
					updateUnit={this.updateUnit.bind(this)}
					updateRange={this.updateRange.bind(this)}
					updateSubjects={this.updateSubjects.bind(this)}
					updateIntervals={this.updateIntervals.bind(this)}
					/>
			</div>
		)

	}
}