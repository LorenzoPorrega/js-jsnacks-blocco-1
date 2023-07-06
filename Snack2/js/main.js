//posizioni      0 1 2 3 4 5 6 7 8 9  10 11 12 13 14
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//Visualizzo gli array items (non la loro posizione)
console.log(("Lista degli items nell'array ") + (numbers));
//somma è una variabile che mi serve per calcolare il risultato
//di tutti i numbers nel ciclo for
let somma = 0;


for (i = 1; i < numbers.length; i+=2){
    somma += numbers[i];
}

console.log(somma);

/*soluzione trovata online che non comprendo
for (i = numbers.length - 1; i >= 0; i--) {
    if (i % 2 == 1)
        numbers.splice(i, 1);
}
console.log(numbers);
*/