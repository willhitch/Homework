// Elements
var passwordEl = document.getElementById("password");
var generateEl = document.getElementById("generate");

// Password prompt function

var lengthEl = parseInt(
  prompt(
    "How long would you like your password to be? Choose a number between 8 and 128"
  )
);

var randLowercase = confirm(
  "Would you like to use lowercase letters? Okay or Cancel"
);
var randUppercase = confirm(
  "Would you like to use uppercase letters? Okay or Cancel"
);
var randNumbers = confirm("Would you like to use numbers? Okay or Cancel");
var randSymbols = confirm("Would you like to use symbols? Okay or Cancel");

// Random Character Object

var randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
};

// Generate Click Event

console.log(randLowercase);

generateEl.addEventListener("click", function () {
  var length = lengthEl;
  var hasLower = randLowercase;
  var hasUpper = randUppercase;
  var hasNumber = randNumbers;
  var hasSymbol = randSymbols;

  passwordEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Generate Password function
function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = "";

  var typesCount = lower + upper + number + symbol;

  // console.log("typesCount: ", typesCount);

  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // console.log("typesArr: ", typesArr);

  if (typesCount === 0) {
    return "";
  }

  if (length < 8 || length > 128) {
    alert("You have not enetered a valid password length");
    return;
  }

  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      var funcName = Object.keys(type)[0];

      //console.log("funcName: ", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  var finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Character codes based off ASCII from http://asciitable.com

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomSymbol() {
  var symbols = "!#$%&'()*+,-.:;<=>?@[]^_;`{}|~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
