const nomi = ["Michele", "Glorian", "Alessio", "Payeturo", "MurasakiIX", "Padre Riccardo", "Valeryo"];
const cognomi = ["Spuller", "Creum", "Leika", "Lyon", "Bueno", "Carlukkio", "Golluma"];
const button = document.querySelector(".btn");
const table =  document.querySelector(".table");

const rngNomi = nomi[Math.floor(Math.random() * nomi.length)];
const rngCognomi = cognomi[Math.floor(Math.random() * cognomi.length)];

console.log(rngNomi);
console.log(rngCognomi);

/*
button.addEventListener("click", function(){
    table.classList.remove("d-none")
});
*/
