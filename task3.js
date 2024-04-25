const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const calculateAverage = (scores) => {
  const total = scores.reduce((acc, score) => acc + score, 0);
  return total / scores.length;
};

const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

console.log(`Dolphins average score: ${dolphinsAverage.toFixed(2)}`);
console.log(`Koalas average score: ${koalasAverage.toFixed(2)}`);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy!");
}
