'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const option = document.createElement('option');
  option.value = student.id;
  option.innerText = student.name;
  target.appendChild(option);
}
