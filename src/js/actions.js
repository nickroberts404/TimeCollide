const createInterval = (intervals, interval) => [...intervals, interval];
const updateInterval = (intervals, interval) => intervals.map(i => i.id === interval.id ? Object.assign({}, i, interval) : i);
const deleteInterval = (intervals, id) => intervals.filter(i => i.id !== id);
const createSubject = (subjects, subject) => [...subjects, subject];
const updateSubject = (subjects, subject) => subjects.map(s => s.id === subject.id ? Object.assign({}, s, subject) : s);
const deleteSubject = (subjects, id) => subjects.filter(s => s.id !== id);

export default {
	createInterval,
	updateInterval,
	deleteInterval,
	createSubject,
	updateSubject,
	deleteSubject
};