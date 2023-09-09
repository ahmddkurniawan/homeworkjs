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

const nilaiMinimumGenap = Math.min(...arrayGenap);

const nilaiMinimumGanjil = Math.min(...arrayGanjil);

if (nilaiMinimumGenap > nilaiMinimumGanjil) {
  console.log("Nilai minimum dari arrayGenap lebih besar.");
} else if (nilaiMinimumGanjil > nilaiMinimumGenap) {
  console.log("Nilai minimum dari arrayGanjil lebih besar.");
} else {
  console.log("Nilai minimum dari kedua array sama.");
}