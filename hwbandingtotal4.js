function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const nilaiRandom = [];

for (let i = 0; i < 100; i++) {
  const randomValue = getRandomNumber(1, 100);
  nilaiRandom.push(randomValue);
}

const arrayGenap = [2,100];
const arrayGanjil = [1,99];

const totalGenap = arrayGenap.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const totalGanjil = arrayGanjil.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

if (totalGenap > totalGanjil) {
  console.log("Total dari arrayGenap lebih besar.");
} else if (totalGanjil > totalGenap) {
  console.log("Total dari arrayGanjil lebih besar.");
} else {
  console.log("Total dari kedua array sama.");
}