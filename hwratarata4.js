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

const total = semuaArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Total dari semua elemen dalam array:", total);

const rataRata = total / semuaArray.length;

console.log("Rata-rata dari semua elemen dalam array:", rataRata);