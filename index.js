let char = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

function generate() {
  let randomStr1 = Math.floor(Math.random() * char.length);
  let randomStr2 = Math.floor(Math.random() * char.length);

  for (let i = 0; i < 12; i++) {
    passwordOne.textContent += randomStr1;
    passwordTwo.textContent += randomStr2;
  }
}
