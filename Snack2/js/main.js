const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (i = 0; i < numbers.length; i++){
    if (i % 2 != 0){
        console.log(i % 2 != 0)
    }
}

//soluzione trovata online che non comprendo
for (i = numbers.length - 1; i >= 0; i--) {
    if (i % 2 == 1)
        numbers.splice(i, 1);
}
console.log(numbers);