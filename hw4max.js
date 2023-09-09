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

const semuaArray = arrayGenap.concat(arrayGanjil);

const nilaiMaximum = Math.max(...semuaArray);

console.log("Nilai maximum dari semua array:", nilaiMaximum);