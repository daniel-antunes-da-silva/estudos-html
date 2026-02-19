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

const products = [
    {
        title: "AstroFiction",
        author: "John Doe",
        price: 49.9,
        image: "./assets/products/img6.png"
    },
    {
        title: "Space Odissey",
        author: "Marie Anne",
        price: 35,
        image: "./assets/products/img1.png"
    },
    {
        title: "Doomed City",
        author: "Jason Cobert",
        price: 0,
        image: "./assets/products/img2.png"
    },
    {
        title: "Black Dog",
        author: "John Doe",
        price: 85.35,
        image: "./assets/products/img3.png"
    },
    {
        title: "My Little Robot",
        author: "Pedro Paulo",
        price: 0,
        image: "./assets/products/img5.png"
    },
    {
        title: "Garden Girl",
        author: "Ankit Patel",
        price: 45,
        image: "./assets/products/img4.png"
    }
];

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1",
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2",
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];


// SEÇÃO DO MENU

function menuHandler() {
    document.querySelector("#open-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.add("nav-open")
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.remove("nav-open")
    })
}    

// Temperature conversion

function celsiusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;
    return fahr;
}

// Seção de cumprimento (greeting section)

function greetingHandler() {
    let currentHour = new Date().getHours();
    let greetingText;
    
    if (currentHour < 12) {
        greetingText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon!";
    } else if (currentHour < 24) {
        greetingText = "Good Evening!";
    } else {
        greetingText = "Welcome!";
    }

    document.getElementById("greeting").innerText = greetingText;
    
}


function weatherHandler() {
    // Pegando latitude e longituded
    navigator.geolocation.getCurrentPosition(async position => {
        try {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            const response = await fetch(`http://127.0.0.1:8000/weather`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "latitude": latitude,
                    "longitude": longitude
                })
            });

            if (!response.ok) {
                throw new Error("API error");
            }
    
            const resultado = await response.json();
            console.log(resultado);
            const description = resultado.description;
            const location = resultado.city;
            let temperature = resultado.temperature;
    
            let celsiusText = `The weather is ${description} in ${location} and it's ${temperature.toFixed(1)}ºC outside.`
            let fahrText = `The weather is ${description} in ${location} and it's ${celsiusToFahr(temperature.toFixed(1))}ºF outside.`
        
                document.getElementById("weather").innerText = celsiusText;
        
            document.querySelector(".weather-group").addEventListener("click", function (event) {
                if (event.target.id == "fahr") {
                    document.getElementById("weather").innerText = fahrText;
                } else {
                    document.getElementById("weather").innerText = celsiusText;
                }
            });
        } catch {
            document.querySelector("p#weather").innerText = "Unable to get the weather info. Try again later.";
        }
    }, error => {
        document.querySelector("p#weather").innerText = "Unable to get the weather info. Try again later or check if location is allowed."
    });
}

// celsiusToFahr(25);

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

// LOCALTIME SECTION

function clockHandler() {
    function updateLocalTime() {
        date = new Date();
        // Forma mais ccorreta de adionar zero na frente. Isso garante q sempre tenha 2 digitos, e quando nao tiver, vai add zero.
        hours = date.getHours().toString().padStart(2, "0");
        minutes = date.getMinutes().toString().padStart(2, "0");
        seconds = date.getSeconds().toString().padStart(2, "0");
        // Adiicionando zero quando é menor que 10, para manter consistênia no layout. Ex: 01, 02, 03 segundos...
        // if (hours < 10) {
        //     hours = `0${hours}` 
        // }
        // if (minutes < 10) {
        //     minutes = `0${minutes}` 
        // }
        // if (seconds < 10) {
        //     seconds = `0${seconds}` 
        // }
        document.querySelector("span[data-time='hours']").innerText = hours;
        document.querySelector("span[data-time='minutes']").innerText = minutes;
        document.querySelector("span[data-time='seconds']").innerText = seconds;
    }
    
    setInterval(updateLocalTime, 1000);
}

// animal = {"name": "dog", "color": "white"}

// Seção da galeria
function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");
    
    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;
    
    galleryImages.forEach(function (image, index) {
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;
    
        thumb.addEventListener("click", function (event) {
            let selectedIndex = event.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;
            
            // Desmarcar todas as imagens
            thumbnails.querySelectorAll("img").forEach(function (img) {
                img.dataset.selected = false;
            });
    
            // Marcar a imagem que o usuário clicou, após ter desmarcado todas anteriormente.
            thumb.dataset.selected = true;
        });
    
        thumbnails.appendChild(thumb);
    });
}

// Products Section

function addElements(elementType, classList, textContent) {
    let element = document.createElement(elementType);
    element.classList.add(classList);
    if (textContent !== undefined) {
        element.textContent = textContent;
    }
    return element;
}

function populateProducts(productList) {
    let productsSection = document.querySelector(".products-area");
    productsSection.innerHTML = "";
    // Run a loop through the products and create a html element ("product-item") for each of them
    productList.forEach(function (product, index) {
        if (product.price > 0) {
            product.price = `$${product.price.toFixed(2)}`;
        } else {
            product.price = "Free";
        }

        // Create the HTML element for the individual product 
        let productElm = addElements("div", "product-item") 

        // Create the product image
        let productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = "Image for" + product.title;

        // Create the product detail section
        let productDetails = addElements("div", "product-details");

        // Create product title, author, price-title and price.
        let productTitle = addElements("h3", "product-title", product.title);
        let productAuthor = addElements("p", "product-author", product.author);
        let priceTitle = addElements("p", "price-title", "Price");
        let productPrice = addElements("p", "product-price", product.price);

        // Append the product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        // Add all child HTML elements of the product
        productElm.append(productImg);
        productElm.append(productDetails)
        
        // Add complete individual product to the product section
        productsSection.append(productElm);
    });
}

/* <div class="product-item">
    <img src="./assets/products/img6.png" alt="AstroFiction">
    <div class="product-details">
        <h3 class="product-title">AstroFiction</h3>
        <p class="product-author">John Doe</p>
        <p class="price-title">Price</p>
        <p class="product-price">$ 49.90</p>
    </div>
</div> */

function addElements(elementType, classList, textContent) {
    let element = document.createElement(elementType);
    element.classList.add(classList);
    if (textContent !== undefined) {
        element.textContent = textContent;
    }
    return element;
}

function productsHandler() {
    let freeProducts = products.filter(item => !item.price || item.price <= 0);
    let paidProducts = products.filter(item => item.price > 0);
    // Esse bloco acima é o mesmo que foi feito abaixo, porém de forma mais modedrna.
    // Nesse caso, o arrow function remove a necessidade do "function", e também não precisa do RETURN, já que há apenas um statement.
    // let freeProducts = products.filter(function (item) {
    //     return !item.price || item.price <= 0;
    // });
    // let paidProducts = products.filter(function (item) {
    // return item.price > 0;
    // });

    console.log("Free: ", freeProducts);
    console.log("Paid: ", paidProducts);

    populateProducts(products);

    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let producstsFilter = document.querySelector(".products-filter");
    producstsFilter.addEventListener("click", function (event) {
        console.log(event.target.id)
        if (event.target.id === "paid") {
            populateProducts(paidProducts);
        } else if (event.target.id === "free") {
            populateProducts(freeProducts);
        } else if (event.target.id === "all") {
            populateProducts(products);
        }
    });
}

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let greaterThan4 = numbers.filter(function (number) {
//     return number > 4;
// });
// console.log(greaterThan4)
// Page load

// for (let i in galleryImages) {
//     console.log(galleryImages[i]);
// }


// ESSE BLOCO DE CÓDIGO FAZ COM Q AS IMAGENS SEJAM SELECIONADAS AO CLICAR NELAS
// document.querySelector(".thumbnails").addEventListener("click", function (event) {
//     console.log(event.target.src)
//     let imageClicked = {
//         alt: event.target.alt
//     }
//     galleryImages.forEach(function (image, index) {
//         if (image.alt == imageClicked.alt) {
//             mainImage.setAttribute("src", image.src);
//             mainImage.setAttribute("alt", image.alt)
//         }
// });
// });


// Page load

function footerHandler() {
    // © 2026 - All rights reserved
    currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `© ${currentYear} - All rights reserved`;
}



menuHandler();
greetingHandler();
weatherHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();
