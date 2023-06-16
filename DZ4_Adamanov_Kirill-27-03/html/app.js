
const calculateAverage = function(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const average = sum / numbers.length;
  return average;
};

const result = calculateAverage(10, 5, 8, 12, 62, 2, 34, 1);
console.log(result);


function logDataType(data) {
  const dataType = typeof data;
  console.log(dataType);
}

logDataType("Hello");
logDataType(42);
logDataType(true);

const logDataType2 = function(data) {
  const dataType = typeof data;
  console.log(dataType);
};

logDataType2("Hello");
logDataType2(42);
logDataType2(true);


