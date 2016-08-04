import React, {Component, PropTypes} from 'react';
import Bar from './Bar.js';

export default class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {height: window.innerHeight}
	}

	componentDidMount() {
		window.onresize = () => {
			this.setState({height: window.innerHeight})
		}
	}

	componentWillUnmount() {
		window.onresize = null;
	}

	render() {
		const {intervals, subjects, range} = this.props;
		const {height} = this.state;
		return (
			<div className="display">
				<Bar 
					intervals={intervals}
					subjects={subjects}
					range={range}
					height={height}
					width={100}
				/>
			</div>
		);
	}
}

// Display.propTypes = {
// 	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	range: PropTypes.arrayOf(PropTypes.number).isRequired,
// }