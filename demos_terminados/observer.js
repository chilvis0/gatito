let title = document.querySelector('h1');
let random = document.querySelectorAll('.random');

let config = {
    threshold: 0.5
};

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        //console.log('Está en viewport');
        //console.log(entry.target);
        entry.target.classList.add("especial");
        // Dejar de observar
        // observer.unobserve(entry.target);
      } else {
        //console.log('No está en viewport');
        entry.target.classList.remove("especial");
      }
    });
}, config);

random.forEach(elemento => {
    observer.observe(elemento);
});

observerTitulo = new IntersectionObserver(entry => {
    if (entry[0].intersectionRatio > 0) {
        console.log('Está en viewport');
    } else {
        console.log('No está en viewport');
    }
});

observerTitulo.observe(title);