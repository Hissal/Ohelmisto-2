'use strict'

const candidateCount = prompt('Candidate Count: ');
const candidates = [];

for (let i = 1; i <= candidateCount; i++) {
  const candidateName = prompt(`Enter name of candidate ${i}: `);
  candidates.push({name: candidateName, votes: 0});
}

const voterCount = prompt('Enter voter count: ');

for (let i = 1; i <= voterCount; i++) {
  const candidate = prompt(
      `Enter the candidate you want to vote for, name or number ${1}-${candidateCount}: `);

  const numberVote = parseInt(candidate);

  if (!isNaN(numberVote) && numberVote >= 1 && numberVote <= candidateCount) {
    const foundCandidate = candidates[numberVote - 1];
    foundCandidate.votes += 1;
  } else {
    const foundCandidate = candidates.find(
        c => c.name.toLowerCase() === candidate.toLowerCase());
    if (foundCandidate) {
      foundCandidate.votes += 1;
    }
  }
}

const sortedCandidates = candidates.slice().sort((a, b) => b.votes - a.votes);
const winner = sortedCandidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log('results:');
sortedCandidates.forEach(c => {
  const votesWord = c.votes === 1 ? 'vote' : 'votes';
  console.log(`${c.name}: ${c.votes} ${votesWord}`);
});