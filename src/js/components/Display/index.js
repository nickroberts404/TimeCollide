import React, {Component, PropTypes} from 'react';

export default class Display extends Component {
	render() {
		return (
			<div className="display">
				{"display"}
			</div>
		);
	}
}

// Display.propTypes = {
// 	intervals: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
// 	range: PropTypes.arrayOf(PropTypes.number).isRequired,
// }