import React, {Component} from 'react';
const d3 = require('d3');

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

	render() {
		return <h2>Hello Pluto</h2>
	}
}