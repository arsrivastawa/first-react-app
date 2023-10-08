const taskData = [
  {
    title: 'Practice React Hooks',
    dueDate: new Date('06-28-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 1,
  },
  {
    title: 'Go to Your College',
    dueDate: new Date('06-30-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 2,
  },
  {
    title: 'Learn Android Development',
    dueDate: new Date('06-27-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 3,
  },
  {
    title: 'Learn NextJS',
    dueDate: new Date('07-01-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 4,
  },
  {
    title: 'Explore MERN Stack',
    dueDate: new Date('07-02-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 5,
  },
  {
    title: 'Build Some Projects I',
    dueDate: new Date('08-13-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 6,
  },
  {
    title: 'Build Some Projects II',
    dueDate: new Date('07-13-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 7,
  },
  {
    title: 'Build Some Projects III',
    dueDate: new Date('09-13-2023'),
    addDate: new Date('06-26-2023'),
    list: 'Default',
    id: 8,
  },
];
/* function sortTasksByDate(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    for (j; j >= 0 && temp.dueDate < arr[j].dueDate; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
} */
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
export default taskData;
export { days, month };
