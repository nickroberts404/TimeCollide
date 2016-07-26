const d3 = require('d3');
import {dimensions} from './constants.js';

const appendLayer = (target, id, dim) => {
	var layer = target.append('g')
		.attr('id', id)
	if(dim) {
		var transform_string = 'translate('+dim.margins.left+','+dim.margins.top+')'
		layer.attr('transform', transform_string);
	}
	return layer;
}

const createSVG = (target) => {
	let svg = d3.select(target).append('svg')
		.attr('id', 'main-layer')
		.attr('height', dimensions.height)
		.attr('width', dimensions.width)

	appendLayer(svg, 'calendar-layer', dimensions);
	appendLayer(svg, 'time-layer', dimensions);
}

export {createSVG, appendLayer};
export default createSVG;