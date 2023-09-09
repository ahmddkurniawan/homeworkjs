
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const nilaiRandom = [];

for (let i = 0; i < 100; i++) {
  const randomValue = getRandomNumber(1, 100);
  nilaiRandom.push(randomValue);
}

const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < nilaiRandom.length; i++) {
  if (i % 2 === 0) {
  
    arrayGenap.push(nilaiRandom[i]);
  } else {
  
    arrayGanjil.push(nilaiRandom[i]);
  }
}
console.log("Array pada indeks genap:", arrayGenap);
console.log("Array pada indeks ganjil:", arrayGanjil);
