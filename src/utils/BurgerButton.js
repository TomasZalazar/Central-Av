




function toggleMenu() {
  // Selecciona el elemento <ul> en el DOM
  let list = document.querySelector('ul');

  // Toggle de la clase 'top-[80px]': si la tiene, la quita; si no la tiene, la añade.
  list.classList.toggle('top-[80px]');

  // Toggle de la clase 'opacity-100': si la tiene, la quita; si no la tiene, la añade.
  list.classList.toggle('opacity-100');
}



// document.addEventListener("DOMContentLoaded", function() {
//   const testimonialContainers = document.querySelectorAll('.testimonial');
//   const nextTestimonialBtn = document.getElementById('next-testimonial-btn');

//   let currentIndex = 0;

//   // Mostrar el primer testimonio
//   testimonialContainers[currentIndex].classList.remove('hidden');

//   nextTestimonialBtn.addEventListener('click', function() {
//       // Ocultar el testimonio actual
//       testimonialContainers[currentIndex].classList.add('hidden');
      
//       // Incrementar el índice y mostrar el siguiente testimonio
//       currentIndex = (currentIndex + 1) % testimonialContainers.length;
//       testimonialContainers[currentIndex].classList.remove('hidden');
//   });
// });



    document.addEventListener("DOMContentLoaded", function() {
        const testimonialContainers = document.querySelectorAll('.testimonial');
        const prevTestimonialBtn = document.getElementById('prev-testimonial-btn');
        const nextTestimonialBtn = document.getElementById('next-testimonial-btn');

        let currentIndex = 0;

        // Mostrar el primer testimonio
        testimonialContainers[currentIndex].classList.remove('hidden');

        prevTestimonialBtn.addEventListener('click', function() {
            // Ocultar el testimonio actual
            testimonialContainers[currentIndex].classList.add('hidden');
            
            // Disminuir el índice y mostrar el testimonio anterior
            currentIndex = (currentIndex - 1 + testimonialContainers.length) % testimonialContainers.length;
            testimonialContainers[currentIndex].classList.remove('hidden');
        });

        nextTestimonialBtn.addEventListener('click', function() {
            // Ocultar el testimonio actual
            testimonialContainers[currentIndex].classList.add('hidden');
            
            // Incrementar el índice y mostrar el siguiente testimonio
            currentIndex = (currentIndex + 1) % testimonialContainers.length;
            testimonialContainers[currentIndex].classList.remove('hidden');
        });
    });

