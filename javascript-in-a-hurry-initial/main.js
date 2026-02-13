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

// SEÇÃO DO MENU


document.querySelector("#open-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.add("nav-open")
});

document.querySelector("#close-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
})


// Seção de cumprimento (greeting section)

const greetingText = "Good morning!";
const weatherCondition = "Sunny";
const userLocation = "Rio de Janeiro";
let temperature = 38.8673;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}ºC outside.`

console.log(weatherText)

document.getElementById("weather").innerText = weatherText;

aaaaaaaaaaaa