// ./day03.js
/*
Challenge #3 - Securing The Vote

It looks like you've got a hold of your campaign for now. So you've been asked to
turn your attention to making sure the election infrastructure is ready to go!
Codeville County is using a new e-voting platform to make elections simpler and
more secure. We need to test out the software to make sure it's working correctly
before Election Day.

Instructions

When a resident casts their vote, the system will be passed the name of the
candidate they voted for and the current standings. It will then update the
standings, adding the new vote to the count.

To test the system, we'll need to complete the function castVote(name, votes)
that takes in the name of a candidate and an array of tallied votes. The
function should return an array with the updated standings.

We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the number of votes for a particular candidate:

The first item in the array votes[0] are the votes for Tim
The second item in the arry votes[1] are the votes for Sally
The third item in the array votes[2] are the votes for Beth

For example in this array [0, 2, 1] there are 0 votes for Tim, 2 votes for Sally
and 1 vote for Beth.
*/

const castVote = (name, votes) => {
  switch (name) {
    case 'Tim':
      votes[0]++;
      return votes;
    case 'Sally':
      votes[1]++;
      return votes;
    case 'Beth':
      votes[2]++;
      return votes;
  }
};