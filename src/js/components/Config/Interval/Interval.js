import React, {Component, PropTypes} from 'react';
import moment from 'moment';

export default class Interval extends Component {
	render() {
		const {data} = this.props;
		const range = data.range.map(r => moment(r).format('MMMM Do'))
		return (
			<div className="interval">
				<span className="begin">{range[0]}</span>
				{' to '}
				<span className="end">{range[1]}</span>
			</div>
		)
	}
}

Interval.propTypes = {
	data: PropTypes.object.isRequired,
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
}