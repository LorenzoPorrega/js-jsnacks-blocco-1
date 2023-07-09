/*Consegna:
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in
posizione dispari.
*/

//               0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 array's items position
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//I print in console array items, not their position
console.log(("Lista degli items nell'array: ") + (numbers));
//The "sum" let let's me store the sum in the for cycle and use it outside of itself
let somma = 0;

/*
The for cycle starts at 1, skipping the first array item being in position 0 (we're only
interested in odd positioned array items), it goes on cycling as many times as many
items there a in the array and for each cycle we add +2 on the previous items (position
#1, +2 = position #3, +2 = position #5, and so on). Inside we do the sum let, being 0
at the start, plus the value of the array's items considered: 0+2 (2 being array item 
in position #1) in the first cycle, 2+4 (4 being array item in position #3), etc.
*/
for (i = 1; i < numbers.length; i+=2){
    somma += numbers[i];
}

//We then print the sum obtained at the end of the for cycle
console.log(somma);

/*Unused solution found online
for (i = numbers.length - 1; i >= 0; i--) {
    if (i % 2 == 1)
        numbers.splice(i, 1);
}
console.log(numbers);
*/