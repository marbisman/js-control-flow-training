console.log("login.js loaded");

var securityQuestions = [
  {
  question:"What is your mother's maiden name?",
  expectedAnswer:"Smith",
  }
];

var userLogin = {
  userName:"Jan",
  password:"12345"
};

//use prompt to create a popup in the browswer with the question
for (i=0; i < securityQuestions.length; i++){
  var userAnswer = prompt(securityQuestions[i].question);
  if (userAnswer != securityQuestions[i].expectedAnswer){
    alert("sorry, that is incorrect");
  }
};

var passwordInput;
var loggedIn;

while (!loggedIn){
  passwordInput = prompt("Enter password for user " + userLogin.userName + ".")
  if (passwordInput === userLogin.password){
    console.log ("Welcome!");
  }
}

//prompt users for their password
//var userPassword = prompt("Enter password for user" + userLogin[0].userName)

// numIterations ensures this while loop doesn't go on forever
//var numIterations = 0;
//while (true && numIterations < 100){
  //console.log("still going!");
  //numIterations++;
//}
