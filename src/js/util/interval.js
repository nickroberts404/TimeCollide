/* 
	Accepts an array of objects, each with an id, a value, and a type of 'start' or 'end'.
	Input array must be sorted by value.
	Returns an array of interval objects, each with an id, a start, an end, and an array of active ids.
	Example: 
		input: [
			{ id: 0, type: 'start', val: 0},
			{ id: 1, type: 'start', val: 2},
			{ id: 1, type: 'end', val: 3},
			{ id: 0, type: 'end', val: 5}
		]
		output: [
			{id: 0, start: 0, end: 2, active: [0]},
			{id: 1, start: 2, end: 3, active: [0, 1]},
			{id: 2, start: 3, end: 5, active: [0]}
		]
*/
const patchIntervals = data => {
	let active = [],
		intervals = [],
		id = 0,
		previous = undefined;
	data.forEach(d => {
		if (typeof previous !== 'undefined' && d.val != previous) {
			intervals = [...intervals, {start: previous, end: d.val, active: active.slice(), id: id++}]
		}
		if (d.type === 'start') active = [...active, d.id];
		else active = active.filter(a => d.id !== a);
		previous = d.val;
	})
	return intervals;
}

/* 
	Accepts an array of objects, each with an id, a start, and an end.
	Returns an array of it's intervals, objects each with an id, a start, an end, and an array of active ids.
	The resulting interval array is sorted by starting time. None are overlapping.
	Example: 
		input: [
			{id: 0, start: 0, end: 5},
			{id: 1, start: 2, end: 3}
		]
		output: [
			{id: 0, start: 0, end: 2, active: [0]},
			{id: 1, start: 2, end: 3, active: [0, 1]},
			{id: 2, start: 3, end: 5, active: [0]}
		]
*/ 
const getIntervals = data => {
	let patches = []
	data.forEach(d => patches = [
		...patches,
		{type: 'start', val: d.start, id: d.id},
		{type: 'end', val: d.end, id: d.id}
	]);
	patches = patches.sort((d1, d2) => d1.val - d2.val);
	return patchIntervals(patches);
}

export {patchIntervals, getIntervals};
export default getIntervals;