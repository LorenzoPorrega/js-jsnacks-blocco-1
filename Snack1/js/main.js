const nomi = ["Michele", "Glorian", "Alessio", "Payeturo", "MurasakiIX", "Padre Riccardo", "Valeryo"];
const cognomi = ["Spuller", "Creum", "Leika", "Lyon", "Bueno", "Carlukkio", "Golluma"];
const button = document.querySelector(".btn");
const table =  document.querySelector(".table");
const nameField = document.querySelector(".name");
const surnameField = document.querySelector(".surname");

/*Test to see if a random name is generated
console.log(rngNomi);
console.log(rngCognomi);
*/

/*Function to have 1 generated name + surname pair generated and printed
* inside the HTML table for each click on the button
*/
button.addEventListener("click", function(){
    table.classList.remove("d-none")
    nameField.innerHTML = "";
    surnameField.innerHTML = "";

    const rngNomi = nomi[Math.floor(Math.random() * nomi.length)];
    const rngCognomi = cognomi[Math.floor(Math.random() * cognomi.length)];

    nameField.innerHTML = `${rngNomi}`;
    surnameField.innerHTML = `${rngCognomi}`;
    console.log(rngNomi);
    console.log(rngCognomi);
});

