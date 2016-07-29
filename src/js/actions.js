const createInterval = (intervals, interval) => [...intervals, interval];
const updateInterval = (intervals, id, toUpdate) => intervals.map(i => i.id === id ? Object.assign({}, i, toUpdate) : i);
const deleteInterval = (intervals, id) => intervals.filter(i => i.id !== id);
const createSubject = (subjects, subject) => [...subjects, subject];
const updateSubject = (subjects, id, toUpdate) => subjects.map(s => s.id === id ? Object.assign({}, s, toUpdate) : s);
const deleteSubject = (subjects, id) => subjects.filter(s => s.id !== id);

export default {
	createInterval,
	updateInterval,
	deleteInterval,
	createSubject,
	updateSubject,
	deleteSubject
};