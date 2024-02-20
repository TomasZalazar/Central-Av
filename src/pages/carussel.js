let currentIndex = 0;
const images = document.getElementById('imageGallery').getElementsByTagName('img');
const prevButton = document.querySelector('.gallery button:nth-child(1)');
const nextButton = document.querySelector('.gallery button:nth-child(2)');

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex);
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage(currentIndex);
}

function displayImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('hidden');
    }
    images[index].classList.remove('hidden');
}

document.getElementById('imageGallery').addEventListener('mouseover', function () {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
});

document.getElementById('imageGallery').addEventListener('mouseout', function () {
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
});


function showImage(index) {
    // Oculta todas las imágenes
    const images = document.querySelectorAll('.gallery img');
    images.forEach(function(img) {
        img.classList.add('hidden');
    });

    // Muestra la imagen correspondiente al índice
    images[index].classList.remove('hidden');
}