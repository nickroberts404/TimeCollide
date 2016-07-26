import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default class RangeInput extends Component {
	render() {
		const {range, updateRange} = this.props;
		return (
			<div className="range-input">
				<DatePicker
				    selected={moment(range[0])}
				    startDate={moment(range[0])}
				    endDate={moment(range[1])}
				    onChange={t => console.log(t)} />
				<DatePicker
				    selected={moment(range[1])}
				    startDate={moment(range[0])}
				    endDate={moment(range[1])}
				    onChange={t => console.log(t)} />
			</div>
		)
	}
}

RangeInput.propTypes = {
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateRange: PropTypes.func.isRequired,
}