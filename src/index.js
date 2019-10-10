function zeros(expression) {
  let array = expression.split(['*']);

  let fiveCounter = 0;
  let twoCounter = 0;

  for (i = 0; i < array.length; i++) {
    let factorial = array[i];

    let number = parseInt(factorial, 10);

    if (factorial[factorial.length - 2] == "!") {
      if (number % 2 == 0) {
        for (let j = 2; j <= number; j += 2) {
          fiveCounter += incrementNumberCounter(j, 5)
          twoCounter += incrementNumberCounter(j, 2)
        }
      } else {
        for (let j = 1; j <= number; j += 2) {
          fiveCounter += incrementNumberCounter(j, 5)
        }
      }
    } else {
      for (let j = 1; j <= number; j += 1) {
        fiveCounter += incrementNumberCounter(j, 5)
        twoCounter += incrementNumberCounter(j, 2)
      }
    }
  }
  return Math.min(twoCounter, fiveCounter);
}

function incrementNumberCounter(number, divider) {
  let counter = 0;
  if (number % divider == 0) {
    while (number >= divider && number % divider == 0) {
      counter++;
      number /= divider;
    }
  }
  return counter;
}

module.exports = zeros;
