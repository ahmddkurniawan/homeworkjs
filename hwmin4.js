function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const nilaiRandom = [];

for (let i = 0; i < 100; i++) {
  const randomValue = getRandomNumber(1, 100);
  nilaiRandom.push(randomValue);
}

const arrayGenap = [2,4,6,8,10];
const arrayGanjil = [1,3,5,7,9,11];

const semuaArray = arrayGenap.concat(arrayGanjil);

const nilaiMinimum = Math.min(...semuaArray);

console.log("Nilai minimum dari semua array:", nilaiMinimum);
