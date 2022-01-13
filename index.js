const inputDob = document.querySelector('#input-date');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-btn');
const showOutput = document.querySelector('#show-output');

const trimDob = (p) => {
  const dobArray = p.replaceAll('-', '');
  return dobArray;
};

const dobCharSum = (dobArray) => {
  let sum = 0;
  for (let digit of dobArray) {
    sum = sum + Number(digit);
  }
  return sum;
};

const showMessage = (message) => {
  showOutput.innerText = 'Result - ' + message;
};

const clickHandler = () => {
  const inputLuckyNumber = luckyNumber.value;
  const dobInString = inputDob.value.toString();

  const trimmedDob = trimDob(dobInString);

  const dobSumValue = dobCharSum(trimmedDob);

  if (!inputDob.value || luckyNumber.value < 0 || luckyNumber.value === '') {
    showOutput.style.display = 'none';
    alert('Input field can not be empty. Please fill correct DOB.');
  } else if (dobSumValue % inputLuckyNumber === 0) {
    showOutput.style.display = 'block';
    document.querySelector('#show-output').style.backgroundColor = '#87CEEB';

    showMessage(inputLuckyNumber + ' is a lucky number.');
  } else {
    showOutput.style.display = 'block';
    document.querySelector('#show-output').style.backgroundColor = '#FF7F7F';

    showMessage(inputLuckyNumber + ' is not a lucky number.');
  }
};

checkButton.addEventListener('click', clickHandler);
