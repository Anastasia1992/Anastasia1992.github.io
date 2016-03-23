var listOfUsers = [];

console.log('List of users: ');

for (var i = 0; i < 5; i++) {
  listOfUsers.push(prompt('Enter ' + (i + 1) + ' name from the user list'));
  console.log((i + 1) + ' name = ' + listOfUsers[i]);
}

var userName = prompt('Enter your name');

function checkName(userName) {
  for (var i = 0; i < listOfUsers.length; i++) {
    if (userName === listOfUsers[i]) {
      console.log(userName, ', you successfully enter');
      return;
    }
  }
  alert('Error! Check your name');
}

checkName(userName);
