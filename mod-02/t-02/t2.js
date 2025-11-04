const participantCount = prompt('Enter participant count: ');
const participants = [];

for (let i = 1; i <= participantCount; i++) {
  const participantName = prompt(`Enter name of participant ${i}: `);
  participants.push(participantName);
}

const alphabeticalParticipants = participants.slice().sort();
const namesOL = document.getElementById('names-list');

alphabeticalParticipants.forEach(name => {
  const li = document.createElement('li');
  li.innerText = name;
  namesOL.appendChild(li);
});
