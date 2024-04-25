const markHeight = 1.8;
const markWeight = 85;

const johnHeight = 1.75;
const johnWeight = 70;

const calculateBMI = (height, weight) => {
  return weight / (height * height);
};

const markBMI = calculateBMI(markHeight, markWeight);
const johnBMI = calculateBMI(johnHeight, johnWeight);

console.log(`Mark's BMI is ${markBMI}.`);
console.log(`John's BMI is ${johnBMI}.`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
  console.log("Mark's and John's BMI are the same!");
}
