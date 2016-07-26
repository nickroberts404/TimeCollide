import React, {Component, PropTypes} from 'react';

export default class UnitInput extends Component {
	render() {
		const {unit, updateUnit} = this.props;
		return (
			<div className="unit-input">
				{['day', 'hour', 'minute'].map(u => (
					<div className="radio-set" key={u}>
						<input 
							type="radio"
							name="unit"
							id={`unit-${u}`}
							onChange={() => updateUnit(u)}
							checked={unit === u}/>
						<label htmlFor={`unit-${u}`}>{u+'s'}</label>
					</div>
				))}
			</div>
		)
	}
}

UnitInput.propTypes = {
	unit: PropTypes.oneOf(['day', 'hour', 'minute']).isRequired,
	updateUnit: PropTypes.func.isRequired,
}