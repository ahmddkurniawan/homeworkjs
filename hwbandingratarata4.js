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

const rataRataGenap = arrayGenap.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arrayGenap.length;

const rataRataGanjil = arrayGanjil.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arrayGanjil.length;

if (rataRataGanjil > rataRataGenap) {
  console.log("Rata-rata dari arrayGanjil lebih besar.");
} else if (rataRataGenap > rataRataGanjil) {
  console.log("Rata-rata dari arrayGenap lebih besar.");
} else {
  console.log("Rata-rata dari kedua array sama.");
}