// function testAlert(message) {
//     alert(message);
// }

// // // testAlert("1, 2, 3...")
// // console.log(5+4)

// // document.querySelector("p#weather").style.color = "red";

// // document.querySelector("p#weather").style.backgroundColor = "yellow";

// document.querySelector("p#weather").classList.add("redbg");


// SEÇÃO DO MENU

// document.querySelector("#open-nav-menu").addEventListener("click", function () {
//     document.querySelector("header nav .wrapper").classList.add("nav-open")
// });

// document.querySelector("#close-nav-menu").addEventListener("click", function () {
//     document.querySelector("header nav .wrapper").classList.remove("nav-open")
// })


// ------------------ VARIÁVEIS ----------------------

// Variável global
// var customer = "John";


// const = para valores q não vão mudar
// const customer = "John";
// let balance = 1000;

// console.log(`Hi ${customer}. Your balance is USD ${balance}.`);

// balance += 200;

// console.log(`Hi ${customer}. Your new balance is USD ${balance}.`);


// ------------------ DATA TYPES ----------------------

// num1 = 12;
// num2 = 14;
// console.log(typeof num1); // number

// num1 = "12";
// num2 = "14";
// console.log(num1 + num2); // 1214

// num1 = 10;
// num2 = "2";
// console.log(num1 + num2); // 102

// // ----------- STRINGS -----------------

// let accountNumber = "12345678";
// console.log(accountNumber.length); // 8

// console.log(accountNumber[0]); // 1

// accountNumber = "INTERNATIONAL_12345678";

// console.log(accountNumber.replace('_', '')); // INTERNATIONAL12345678

// accountNumber = accountNumber.replace('_', '');

// console.log(accountNumber); // INTERNATIONAL12345678

// // ----------- NUMBERS -----------------

// let price = 17.55;

// typeof price; // number (Em JavaScript, não existe um tipo específico para números decimais, todos são do tipo "number")

// Math.round(price); // 18

// price.toFixed(1); // "17.6" (retorna uma string com o número formatado com uma casa decimal)
// price.toFixed(2); // "17.55" (retorna uma string com o número formatado com duas casas decimais)


// --------------- ARRAYS ---------------

// let array1 = [2, 4, 6, 8];
// console.log(array1.length);

// console.log(array1[0]);

// // Para pegar a última posição do array:
// console.log(array1[array1.length - 1]);

// array1.push(10) // Adiciona um valor na última posição do array.
// console.log(array1)

// array1.unshift(0)
// console.log(array1)

// array2 = [12, 14, 16]
// array1.concat(array2)


// console.log(typeof array1) // object

// OBJECTS

// const student = { "name": "John", "yearOfBirth": 1980, "country": "Italy" }
// console.log(student)
// console.log(student["name"])
// console.log(student.name)

// // Para acessar novos campos ao objeto:

// student.id = "88b5";
// console.log(student)

// // Array of objects:

// const student1 = { "name": "John", "age": 23 }
// const student2 = { "name": "Sarah", "age": 19 }

// const students = [student1, student2]
// console.log(students)


// TIPOS NULOS E UNDEDFINED

// O javascript considera o tipo null e undefined como o mesmo valor.
// PORÉM, O TIPO DELES NÃO É O MESMO. Se verificar se o undefined === null, retornará FALSE.
// Ou seja, O VALOR é o mesmo, mas o TIPO é diferente.

// console.log(typeof null) // object
// console.log(typeof undefined) // undefined

// SEÇÃO DO MENU


document.querySelector("#open-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.add("nav-open")
});

document.querySelector("#close-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
})


// Seção de cumprimento (greeting section)

function celsiusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;
    return fahr;
}

// celsiusToFahr(25);

const greetingText = "Good morning!";
const weatherCondition = "Sunny";
const userLocation = "Rio de Janeiro";
let temperature = 38.86;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}ºC outside.`
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature.toFixed(1))}ºF outside.`

document.getElementById("weather").innerText = celsiusText;
document.getElementById("greeting").innerText = greetingText;


document.querySelector(".weather-group").addEventListener("click", function (event) {
    if (event.target.id == "fahr") {
        document.getElementById("weather").innerText = fahrText;
    } else {
        document.getElementById("weather").innerText = celsiusText;
    }
});


// ----------- DATETYPES ------------

// new Date()
// Sun Feb 15 2026 11:59:53 GMT-0300 (Horário Padrão de Brasília)
// new Date("2026-02-10")
// Mon Feb 09 2026 21:00:00 GMT-0300 (Horário Padrão de Brasília)
// shippingDate = new Date("2026-02-10")
// Mon Feb 09 2026 21:00:00 GMT-0300 (Horário Padrão de Brasília)
// deliveryDate = new Date("2026-02-15");
// Sat Feb 14 2026 21:00:00 GMT-0300 (Horário Padrão de Brasília)
// deliveryDate - shippingDate
// 432000000 (VALOR EM MILISSEGUNDOS)

// 1000 * 60 * 60 * 24
// 86400000 // VALOR EM MILISSEGUNDOS CORRESPONDENTE A UM DIA
// 432000000 / 86400000
// 5 DIAS

// ----------------------------------------------------

function updateLocalTime() {
    date = new Date();
    console.log(date.getHours())
    document.querySelector("span[data-time='hours']").innerText = date.getHours();
    document.querySelector("span[data-time='minutes']").innerText = date.getMinutes();
    document.querySelector("span[data-time='seconds']").innerText = date.getSeconds();
}

setInterval(updateLocalTime, 1000);