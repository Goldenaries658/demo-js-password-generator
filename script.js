// Assignment Code
var generateBtn = document.querySelector('#generate');

//Character sets

//Generates a lowercase alphabet
function genLowCase() {
  var lowCase = [];
  for (i = 10, a = 0; i < 36; i++, a++) {
    lowCase[a] = i.toString(36);
  }
  return lowCase;
}

//Generates an uppercase alphabet
function genUpCase() {
  var upCase = [];
  for (i = 10, a = 0; i < 36; i++, a++) {
    letter = i.toString(36);
    upCase[a] = letter.toUpperCase();
  }
  return upCase;
}

var numsSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Creates an array of special chars, this is to save space in code
specChars = '! # $ % & " ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ \'';
var specSet = specChars.split(' ');

function generatePassword() {
  var passwordLen = prompt(
    'Choose a password length.\n(Must be 8-128 characters)'
  );

  if (!passwordLen) {
    return 'Cancelled.';
  }

  while (passwordLen < 8 || passwordLen > 128 || isNaN(passwordLen)) {
    passwordLen = parseInt(passwordLen, 10);
    if (isNaN(passwordLen)) {
      alert('Enter a number.');
    }
    alert('Password has to be between 8-128 characters.');
    passwordLen = prompt('Choose a password length.');

    if (!passwordLen) {
      break;
    }
  }

  var charList = [];
  var charProps = [
    'Lowercase characters',
    'Uppercase characters',
    'Numbers',
    'Special characters',
  ];
  var charTypeCount = 0;

  while (charTypeCount == 0) {
    for (i = 0; i < 4; i++) {
      var chars = prompt(charProps[i] + '? (Y/N)');

      if (!chars) {
        break;
      }

      chars = chars.toLowerCase();

      while (chars != 'y' && chars != 'n') {
        alert('Enter Y or N.');
        chars = prompt(charProps[i] + '?');

        if (!chars) {
          break;
        }
      }

      if (chars == 'y') {
        charTypeCount++;
      }
    }

    if (!chars) {
      break;
    }

    if (charTypeCount == 0) {
      alert('You need to select at least one character type.');
    }
  }

  if (!chars) {
    return 'Cancelled';
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
