const d3 = require('d3');
import setup from './setup.js';
import data from './data.js';
import getIntervals from './interval.js';
const intervals = getIntervals(data);

setup('div.container');

const renderTime = (time) => {
	time = time.sort((d1, d2) => (d2.end-d2.start) - (d1.end-d1.start))
	let layer = d3.select('#time-layer');
	layer.selectAll('.time-block')
		.data(time)
		.enter()
		.append('rect')
		.attr('id', d => 'block-'+d.id)
		.attr('class', 'time-block')
		.attr('width', 50)
		.attr('height', d => (d.end - d.start) * 20)
		.attr('x', 0)
		.attr('y', d => d.start * 20)
		.style('fill', 'rgba(255, 0, 0, 0.1)')
		.on('mouseover', d => { layer.select('#block-'+d.id).style('stroke', '#333')})
		.on('mouseleave', d => { layer.select('#block-'+d.id).style('stroke', '')})
}
const renderIntervals = (interval) => {
	let layer = d3.select('#time-layer');
	layer.selectAll('.time-interval')
		.data(interval)
		.enter()
		.append('rect')
		.attr('id', d => 'interval-'+d.id)
		.attr('class', 'time-interval')
		.attr('width', 50)
		.attr('height', d => (d.end - d.start) * 20)
		.attr('x', 60)
		.attr('y', d => d.start * 20)
		.style('fill', d => 'rgba(255, 0, 0,'+ d.active.length / 10)
		.on('mouseover', d => { 
			layer.select('#interval-'+d.id).style('stroke', '#333')
			console.log('Active ids: ', d.active);
		})
		.on('mouseleave', d => { layer.select('#interval-'+d.id).style('stroke', '')})
}
renderIntervals(intervals)
renderTime(data);