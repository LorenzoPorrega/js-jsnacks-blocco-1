/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che
ha meno elementi fino a quando ne avrà tanti quanti l’altro.*/

//I establish two array to store the numbers and to then equalize their lenght
let arrayOne = [];
let arrayTwo = [];

/*
I create a random integer between 1 and 25 and these value will be used to determine
how many items will be generated in the respective arrays
*/
let arrayOneGen = (Math.floor(Math.random() * 25) + 1);
let arrayTwoGen = (Math.floor(Math.random() * 25) + 1);

//I print how many number elements to push in each array
console.log("How many number elements to generate in arrayOne: " + arrayOneGen);
console.log("How many number elements to generate in arrayTwo: " + arrayTwoGen);

//I establish two for cycles to populate the two arrays
for (let i = 0; i < arrayOneGen; i++){
    let nToPushInOne = (Math.floor(Math.random() * 99) + 1);
    arrayOne.push(nToPushInOne);
}
for (let i = 0; i < arrayTwoGen; i++){
    let nToPushInTwo = (Math.floor(Math.random() * 99) + 1);
    arrayTwo.push(nToPushInTwo);
}

//I print the resulting array number elements for each array to check
console.log("ArrayOne elements: " + arrayOne);
console.log("ArrayTwo elements: " + arrayTwo);

/*
I establish the difference between how many elements are contained between the two
arrays to be then able to generate and push enough elements to equally populate the
two arrays
*/
let arrayDifference = arrayOne.length - arrayTwo.length;

/*
I establish a for cycle that runs until the two arrays are equal in number of elements
inside (i !== array.Difference). I then populate the two array checking which
one is missing elements compared to the other
*/
for (i = 0; i !== arrayDifference; i++){
    console.log("Difference in lenght between the number of array items between arrayOne and arrayTwo:" + arrayDifference);

    if (arrayOne.lenght < arrayTwo.lenght){
        let oneEquilizer = (Math.floor(Math.random() * 99) + 1); 
        arrayOne.push(oneEquilizer);
    }
    else{
        let twoEquilizer = (Math.floor(Math.random() * 99) + 1); 
        arrayTwo.push(twoEquilizer);
    }
}

//I print all the results to manually check
console.log("ArrayOne elements after being equilized: " + arrayOne);
console.log("ArrayTwo elements after being equilized: " + arrayTwo);
console.log("ArrayOne length: " + arrayOne.length);
console.log("ArrayTwo length: " + arrayTwo.length);