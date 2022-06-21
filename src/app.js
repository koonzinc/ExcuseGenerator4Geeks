
import "./style.css";


window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {

  let pronoun = ['The', 'A'];
  let subject = ['cat', 'bear', 'bull', 'lion'];
  let action = ['burned my', 'buried my', 'ate my', 'ripped my'];
  let object = ['homework', 'shoes', 'car', 'shirt'];
  let location = ['on the lawn', 'in the pool', 'in my house', 'in the bathroom'];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let locationIndex = Math.floor(Math.random() * location.length);

  return pronoun[pronounIndex] + ' ' + subject[subjectIndex] + ' ' + action[actionIndex] + ' ' + object[objectIndex] + ' ' + location[locationIndex];
};
