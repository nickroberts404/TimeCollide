import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default class RangeInput extends Component {
	render() {
		const {range, updateRange} = this.props;
		const start = moment(range[0]);
		const end = moment(range[1]);
		return (
			<div className="range-input">
				<DatePicker
				    selected={start}
				    startDate={start}
				    endDate={end}
				    onChange={t => updateRange([t.valueOf(), range[1]])} />
				<DatePicker
				    selected={end}
				    startDate={start}
				    endDate={end}
				    onChange={t => updateRange([range[0], t.valueOf()])} />
			</div>
		)
	}
}

RangeInput.propTypes = {
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	range: PropTypes.arrayOf(PropTypes.number).isRequired,
	updateRange: PropTypes.func.isRequired,
}