//INDICADORES CARRUSEL

// Selecciona el contenedor de los indicadores
const indicatorsContainer = document.querySelector('.carousel-indicators');
// Selecciona todos los elementos del carrusel
const carouselItems = document.querySelectorAll('.carousel-inner .carousel-item');

// Genera un botón de indicador por cada imagen
carouselItems.forEach((item, bibliocucuta) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.bsTarget = '#carouselExampleAutoplaying'; // Asegúrate que coincida con el ID de tu carrusel
    button.dataset.bsSlideTo = bibliocucuta;
    button.ariaLabel = `Slide ${bibliocucuta + 1}`;
    
    // Marca el primer botón como activo
    if (bibliocucuta === 0) {
        button.classList.add('active');
        button.ariaCurrent = 'true';
    }

    // Agrega el botón al contenedor de indicadores
    indicatorsContainer.appendChild(button);
});


// BOTON DESPLAZAMIENTO

document.addEventListener("DOMContentLoaded", function () {
  // Get the button
  let scrollTopButton = document.getElementById("scrollTopButton");

  // Get the video section
  let videoSection = document.getElementById("eventos");

  // When the user scrolls down to the video section, show the button
  window.addEventListener("scroll", function () {
    if (window.scrollY >= videoSection.offsetTop) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  });

  // When the user clicks on the button, scroll to the top of the document
  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});



//GALERIA

const initBiblioSlider = () => {
  const imageList = document.querySelector(".biblio-slider-wrapper .biblio-image-list");
  const slideButtons = document.querySelectorAll(".biblio-slider-wrapper .biblio-slide-button");
  const sliderScrollbar = document.querySelector(".biblio-container .biblio-slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".biblio-scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Manejar el arrastre del scrollbar thumb
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

    // Actualizar la posición del thumb al mover el ratón
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      // Asegurar que el thumb del scrollbar se mantenga dentro de los límites
      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    // Remover los event listeners al soltar el ratón
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Agregar event listeners para la interacción de arrastre
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Desplazar imágenes según los clicks en los botones de navegación
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "biblio-prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // Mostrar u ocultar botones de navegación según la posición de scroll
  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  // Actualizar la posición del thumb del scrollbar según el scroll de las imágenes
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  // Llamar a estas dos funciones cuando se desplaza la lista de imágenes
  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

window.addEventListener("resize", initBiblioSlider);
window.addEventListener("load", initBiblioSlider);
