// Función para obtener la ruta base correcta dependiendo de la ubicación del HTML
function obtenerRutaBase() {
  let ruta = "";
  let nivelProfundidad = (window.location.pathname.split("/").length - 2); 
  for (let i = 0; i < nivelProfundidad; i++) {
      ruta += "../";
  }
  return ruta;
}

// Obtiene la ruta correcta
const rutaBase = obtenerRutaBase();

// Cargar el encabezado
fetch(`${rutaBase}Html/header.html`)
  .then((response) => response.text())
  .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Cargar el estilo del header
      const headerStyle = document.createElement("link");
      headerStyle.rel = "stylesheet";
      headerStyle.href = `${rutaBase}Css/estilo_header.css`;
      document.head.appendChild(headerStyle);

      // Lógica adicional para el comportamiento del header
      const navLinks = document.querySelector('.nav-links');
      const navToggle = document.querySelector('.nav_toggle');
      const dropdownContents = document.querySelectorAll('.dropdown-content');
      const dropdownTitles = document.querySelectorAll('.nav-links > li > a');
      const socialIcons = document.querySelector(".social-icons");
      const navLinksContainer = document.querySelector(".nav-links");

      // Función para mover la sección de redes sociales
      function moveSocialIcons() {
          if (window.innerWidth <= 1272) {
              navLinksContainer.appendChild(socialIcons);
          } else {
              document.querySelector(".header").appendChild(socialIcons);
          }
      }

      // Toggle del menú de navegación para móviles
      navToggle.addEventListener('click', () => {
          navLinks.classList.toggle('open');
          navToggle.classList.toggle('close');
          document.body.classList.toggle('lock-scroll'); // Bloquea el desplazamiento del cuerpo
      });

      // Añadir event listeners a los enlaces de navegación
      dropdownTitles.forEach(title => {
          const currentDropdown = title.nextElementSibling;

          // Solo añadir event listener si hay un dropdown asociado
          if (currentDropdown && currentDropdown.classList.contains('dropdown-content')) {
              title.addEventListener('click', (e) => {
                  e.preventDefault();
                  dropdownContents.forEach(dropdown => {
                      if (dropdown !== currentDropdown) {
                          dropdown.classList.remove('open');
                      }
                  });
                  currentDropdown.classList.toggle('open');
              });
          }
      });

      // Mover las redes sociales inicialmente
      moveSocialIcons();

      // Mover las redes sociales al redimensionar la ventana
      window.addEventListener("resize", moveSocialIcons);
  });

// Cargar el footer
fetch(`${rutaBase}Html/footer.html`)
  .then((response) => response.text())
  .then((data) => {
      document.getElementById("footer").innerHTML = data;

      // Cargar el estilo del footer
      const footerStyle = document.createElement("link");
      footerStyle.rel = "stylesheet";
      footerStyle.href = `${rutaBase}Css/estilo_footer.css`;
      document.head.appendChild(footerStyle);

      // Actualizar el año en el footer
      const currentYear = new Date().getFullYear();
      document.getElementById("currentYear").textContent = currentYear;
  });
