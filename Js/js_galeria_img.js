let currentImgIndex = 0;
const images = document.querySelectorAll('.main-img-container .img_gal img');
const popup = document.querySelector('.popup-image');
const popupImg = popup.querySelector('img');
const closeBtn = popup.querySelector('.close');
const prevBtn = popup.querySelector('.prev');
const nextBtn = popup.querySelector('.next');

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImg.src = img.src;
    currentImgIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  showPrevImage();
});

nextBtn.addEventListener('click', () => {
  showNextImage();
});

/*  */

function showPrevImage() {
  currentImgIndex = (currentImgIndex > 0) ? currentImgIndex - 1 : images.length - 1;
  popupImg.src = images[currentImgIndex].src;
}

function showNextImage() {
  currentImgIndex = (currentImgIndex < images.length - 1) ? currentImgIndex + 1 : 0;
  popupImg.src = images[currentImgIndex].src;
}

// Navegación con las flechas del teclado
document.addEventListener('keydown', (event) => {
  if (popup.style.display === 'block') {
    if (event.key === 'ArrowLeft') {
      showPrevImage();
    } else if (event.key === 'ArrowRight') {
      showNextImage();
    } else if (event.key === 'Escape') {
      popup.style.display = 'none';
    }
  }
});

//BOTONES

document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'galeria_img.html') {
    document.getElementById('img-btn').classList.add('active');
  } else if (currentPage === 'galeria_videos.html') {
    document.getElementById('vid-btn').classList.add('active');
  }
});