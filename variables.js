var edad = 45;

function algo(){
//function scope
    var edad1 = 89;
}

algo();

console.log("Edad vale:", edad);

//cuando no declaramos el tipo el predeterminado es var
edad = 18;
if (edad >= 18){
//block scope(si hay una llave)
 let mas10 = edad + 10;
 console.log(`En 10 años tendrás ${mas10} años.`);

 //let no permite volver a declarar la variable
 var mas10 = "Hola mundo";
 console.log(mas10);
}
//esto tira error porque mas10 no existe fuera del if
console.log("total es", mas10);

///---- Const---------

//constante -> 3.14
// block scope, al igual que let, pero no permite que se re-escriba el contenido
const nombre = "Silvana";

//esto da error
nombre = "jose";


console.log(nombre);

