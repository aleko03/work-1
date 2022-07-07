// let strs = "-- HTTPS://WWW.KINDACODE.COM/WP-CONTENT/UPLOADS/2021/08/SCREEN-SHOT-2021-08-26-AT-11.44.06.JPG"

// console.log(strs);



// start



let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OTRTXyg5EvK9HJGF2KK7ptll7m9l6sdWdw&usqp=CAU';
let title = 'Brooklyn bridge';
let text1 = 'The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing of the East River. It was also the longest suspension bridge in the world at the time of its opening, with a main span of 1,595.5 feet (486.3 m) and a deck 127 ft (38.7 m) above mean high water. The span was originally called the New York and Brooklyn Bridge or the East River Bridge but was officially renamed the Brooklyn Bridge in 1915.';
let discount = true;
let span;

if (discount) {
    span = `<span class="bg-success rounded p-2 position-absolute">price  100lari</span>`
}

let themplate = `
<div class="col-lg-4 mx-auto">
<div class="card position-relative">
${span}
    <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text1}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>`

let strs = document.getElementById('123').innerHTML = themplate;

// end


// start

let string = `Javascript work 123!@#$ `;

let text = string.search(/([A_Z])([a-z])([1-9])([!@#$%^&*_+])/)

console.log(text)

// end