// var: Function scope
function olaf(){
    var numero = 40;
    console.log(`El número es ${numero}.`)
}

olaf()
// console.log(`Tenes ${numero} años.`)

// let: Block scope
edad = 38;
if (edad >= 18){
    let mas10 = edad + 10;
    console.log(`En 10 años tendrás ${mas10} años.`);
}

// console.log("total es", mas10);
const num = 23;
//num = 54;

console.log(num);

// IIFE
(function (){
    var nombre = "Eva";
    console.log(nombre);
})();

// Fetch
// URL a traer: http://www.omdbapi.com/?i=tt3896198&apikey=e83a60
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e83a60')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        console.log(myJson.Title);
        a.innerHTML = myJson.Title;
    })
    .catch(function(error){
        console.log(error.message)
    });