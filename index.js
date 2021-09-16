const inputDob = document.querySelector('#input-date');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-btn');
const showOutput = document.querySelector('#show-output');

function trimDob(p) {
  const dobArray = p.replaceAll('-', '');
  return dobArray;
}

function dobCharSum(dobArray) {
  let sum = 0;
  for (let digit of dobArray) {
    sum = sum + Number(digit);
  }
  return sum;
}

function showMessage(message) {
  showOutput.innerHTML = 'Result - ' + message;
}

function clickHandler() {
  const inputLuckyNumber = luckyNumber.value;
  const dobInString = inputDob.value.toString();

  const trimmedDob = trimDob(dobInString);

  const dobSumValue = dobCharSum(trimmedDob);

  if (dobSumValue % inputLuckyNumber === 0) {
    showMessage(inputLuckyNumber + ' is a lucky number.');
  } else {
    showMessage(inputLuckyNumber + ' is not a lucky number.');
  }
}

checkButton.addEventListener('click', clickHandler);
