import React, {Component, PropTypes} from 'react';
import ReactFauxDom from 'react-faux-dom';
const d3 = require('d3');

export default class Bar extends Component {
	render() {
		const {intervals, subjects, range, height, width} = this.props;
		let bar = ReactFauxDom.createElement('svg');

		let svg = d3.select(bar)
			.attr('height', height)
			.attr('width', width)
		svg.append('g')
			.attr('class', 'bar-view')
		return bar.toReact();
	}
}

// Bar.propTypes = {
// 	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	range: PropTypes.arrayOf(PropTypes.number).isRequired,
// }