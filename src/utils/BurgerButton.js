




function toggleMenu() {
  // Selecciona el elemento <ul> en el DOM
  let list = document.querySelector('ul');

  // Toggle de la clase 'top-[80px]': si la tiene, la quita; si no la tiene, la añade.
  list.classList.toggle('top-[80px]');

  // Toggle de la clase 'opacity-100': si la tiene, la quita; si no la tiene, la añade.
  list.classList.toggle('opacity-100');
}




