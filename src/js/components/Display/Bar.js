import React, {Component, PropTypes} from 'react';
import ReactFauxDom from 'react-faux-dom';
const d3 = require('d3');

export default class Bar extends Component {
	render() {
		const {intervals, subjects, range, height, width} = this.props;
		console.log(intervals);
		let bar = ReactFauxDom.createElement('svg');

		let svg = d3.select(bar)
			.attr('height', height)
			.attr('width', width)
		let view = svg.append('g')
			.attr('class', 'bar-view')
		const scale = d3.scaleTime().domain([new Date(range[0]), new Date(range[1])]).range([0, height]);
		const axis = d3.axisRight()
			.scale(scale)
			.ticks(10)

		console.log(scale(1470200400000));
		view.selectAll('.blocks')
			.data(intervals)
			.enter()
			.append('rect')
			.attr('y', i => scale(i.range[0]))
			.attr('width', width)
			.attr('height', i => scale(i.range[1]) - scale(i.range[0]))
			.attr('class', 'blocks')
			.style('opacity', 0.1)
		view.append('g')
			.attr('class', 'y-axis')
			.call(axis)

		return bar.toReact();
	}
}

// Bar.propTypes = {
// 	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	range: PropTypes.arrayOf(PropTypes.number).isRequired,
// }