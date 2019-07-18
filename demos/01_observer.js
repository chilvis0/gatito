
console.log("Esto esta ok");

let titulo = document.querySelector("h1");

// crear un nuevo observador
observarTitulo = new IntersectionObserver((entry) => {
// console.log(entry);

});

 observarTitulo.observe(titulo);

 //observar el elemento .hola
 let div = document.querySelector(".hola");


 //si isIntersecting es true entonces

 observarDiv = new IntersectionObserver((e) => {
     console.log("Observo esto:", e[0].isIntersecting);
     if(e[0].isIntersecting === true) {
        console.log("Esta en viewport");
        div.style.backgroundColor = "green";   
     } else {
        console.log("Esta afuera");  
        div.style.backgroundColor = "hotpink";
     }

 });     
  //elemento.style.backgroundColor = green;

  observarDiv.observe(div);

//observar varios elementos a la vez
//activar y desactivar . especial

  let elementos = document.querySelectorAll(".random");

  observarElementos = new IntersectionObserver((e) => {
      for (var i = 0; i < e.length; i++) {
        //console.log("Es el", i);    
      //console.log("Info", e[i].isIntersecting);
      if (e[i].isIntersecting === true) {
          e[i].target.classList.toggle(
              "especial");
         }
      }
  });

   elementos.forEach(elemento => {
    observarElementos.observe(elemento);
});

