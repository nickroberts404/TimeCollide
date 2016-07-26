const d3 = require('d3');
import React, {Component} from 'react';
import Config from './components/Config.js';

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
		range = range.sort((t1, t2) => t1 - t2);
		this.setState({range});
	}

	render() {
		const {intervals, subjects, unit, range} = this.state;
		return <Config
			intervals={intervals}
			subjects={subjects}
			unit={unit}
			range={range}
			updateUnit={this.updateUnit.bind(this)}
			updateRange={this.updateRange.bind(this)}
			/>
	}
}