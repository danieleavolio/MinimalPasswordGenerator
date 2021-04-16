let numbers = "0123456789";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "'!@#$%^&*?";

let lowerIn = false;
let upperIn = false;
let symbolsIn = false;
let numbersIn = false;
function generate() {
  let onlyLetters = document.getElementById("choicebox").checked;
  let length = document.getElementById("length").value;
  let password = "";

  if (length < 4) {
    alert("Insert a length value!");
  } else {
    if (length >= 13) {
      document.getElementById("password").style.fontSize = "1.5rem";
    }
    if (length >= 18) {
      document.getElementById("password").style.fontSize = "1.3rem";
    }

    if (onlyLetters) {
      numbersTaken = false;
      uppersTaken = false;
      lowersTaken = false;

      for (let i = 0; i < length - 2; i++) {
        let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        switch (random) {
          case 0:
            password += numbers.charAt(
              Math.floor(Math.random() * numbers.length)
            );
            break;
          case 1:
            password += lowerLetters.charAt(
              Math.floor(Math.random() * lowerLetters.length)
            );
            break;
          case 2:
            password += upperLetters.charAt(
              Math.floor(Math.random() * upperLetters.length)
            );
            break;
        }
      }
      if (numbersTaken == false) {
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }

      if (lowersTaken == false) {
        password += lowerLetters.charAt(
          Math.floor(Math.random() * lowerLetters.length)
        );
      }

      if (uppersTaken == false) {
        password += upperLetters.charAt(
          Math.floor(Math.random() * upperLetters.length)
        );
      }

      while (password.length < length) {
        random = Math.floor(Math.random() * (3 - 0 + 1));
        switch (random) {
          case 0:
            password += numbers.charAt(
              Math.floor(Math.random() * numbers.length)
            );
            break;
          case 1:
            password += lowerLetters.charAt(
              Math.floor(Math.random() * lowerLetters.length)
            );

            break;
          case 2:
            password += upperLetters.charAt(
              Math.floor(Math.random() * upperIn.length)
            );
            break;
        }
      }
    } else {
      numbersTaken = false;
      uppersTaken = false;
      lowersTaken = false;
      symbolsTaken = false;

      for (let i = 0; i < length - 3; i++) {
        let random = Math.floor(Math.random() * (3 - 0 + 1));
        switch (random) {
          case 0:
            password += numbers.charAt(
              Math.floor(Math.random() * numbers.length)
            );
            numbersTaken = true;
            break;
          case 1:
            password += lowerLetters.charAt(
              Math.floor(Math.random() * lowerLetters.length)
            );
            lowersTaken = true;

            break;
          case 2:
            password += upperLetters.charAt(
              Math.floor(Math.random() * upperIn.length)
            );
            upperSTaken = true;
            break;
          case 3:
            password += symbols.charAt(
              Math.floor(Math.random() * symbols.length)
            );
            symbolsTaken = true;
            break;
        }
      }
      if (symbolsTaken == false) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
      if (numbersTaken == false) {
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }

      if (lowersTaken == false) {
        password += lowerLetters.charAt(
          Math.floor(Math.random() * lowerLetters.length)
        );
      }

      if (uppersTaken == false) {
        password += upperLetters.charAt(
          Math.floor(Math.random() * upperLetters.length)
        );
      }

      while (password.length < length) {
        random = Math.floor(Math.random() * (3 - 0 + 1));
        switch (random) {
          case 0:
            password += numbers.charAt(
              Math.floor(Math.random() * numbers.length)
            );
            break;
          case 1:
            password += lowerLetters.charAt(
              Math.floor(Math.random() * lowerLetters.length)
            );

            break;
          case 2:
            password += upperLetters.charAt(
              Math.floor(Math.random() * upperIn.length)
            );
            break;
          case 3:
            password += symbols.charAt(
              Math.floor(Math.random() * symbols.length)
            );
            break;
        }
      }
    }
    document.getElementById("password").style.backgroundColor = "#FF8C42";
    document.getElementById("password").value = password;
  }
}
