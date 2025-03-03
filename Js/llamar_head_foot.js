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

// Definir el contenido del header directamente en JavaScript
document.getElementById("header").innerHTML = `
<header class="header">
  <a href="/Html/bibliocucuta.html">
    <img src="https://lh3.googleusercontent.com/d/1Bd5R8_up-TfKDvtncZk1HuC4ZwQf_sOs" alt="Logo de la página" class="logo_barra"/>
  </a>
  <div class="nav_toggle" id="nav_toggle">
    <span></span><span></span><span></span>
  </div>
  <ul class="nav-links" id="nav-links">
    <li><a class="principal" href="/Html/bibliocucuta.html">Inicio</a></li>
    <li><a class="principal" href="#">Sobre nosotros</a>
      <div class="dropdown-content">
        <a href="/Html/quienes_somos.html">Quiénes somos</a>
        <a href="/Html/reconocimientos.html">Reconocimientos</a>
        <a href="/Html/hospital.html">Antiguo Hospital San Juan de Dios</a>
        <a href="/Html/normativa.html">Normativa</a>
      </div>
    </li>
    <li><a class="principal" href="/Html/nuestras_bibliotecas.html">Nuestras bibliotecas</a></li>
    <li><a class="principal" href="#">Servicios</a>
      <div class="dropdown-content">
        <a href="/Html/bibliotecarios.html">Bibliotecarios</a>
        <a href="/Pdfs/Portafolio Eventos.pdf" target="_blank">Eventos</a>
        <a href="/Pdfs/Portafolio de servicios Institución de Educación.pdf" target="_blank">Oferta académica</a>
        <a href="/Html/en_linea.html">En linea</a>
      </div>
    </li>
    <li><a class="principal" href="/Html/pag_noticias.html">Noticias</a></li>
    <li><a class="principal" href="#">Contáctanos</a>
      <div class="dropdown-content">
        <a href="/Html/contacto.html">Contacto</a>
        <a href="/Html/pqrs.html">PQRS</a>
        <a href="/Html/linea_etica.html">Línea Ética</a>
      </div>
    </li>
  </ul>
  <div class="social-icons">
    <p class="follow-us">Síguenos en</p>
    <div class="iconos-redes">
      <a href="https://web.facebook.com/Bibliocucuta" target="_blank">
        <img src="https://lh3.googleusercontent.com/d/1tofNmaXbWKWPOJqT2QaVwc8fIOzSZVzH" alt="Facebook"/>
      </a>
      <a href="https://x.com/Bibliocucuta" target="_blank">
        <img src="https://lh3.googleusercontent.com/d/1RQx68hdIKQ8JssvaoNLLhfg_ZLJgj1WZ" alt="X"/>
      </a>
      <a href="https://www.instagram.com/bibliocucuta_" target="_blank">
        <img src="https://lh3.googleusercontent.com/d/1m-T5E6fUSEWvM8LGC-6_QFIDS4YzadAc" alt="Instagram"/>
      </a>
      <a href="https://www.youtube.com/@bibliocucuta" target="_blank">
        <img src="https://lh3.googleusercontent.com/d/1bLS0iJqnABNBzLv36z7bkZuJdIcnDw1a" alt="YouTube"/>
      </a>
    </div>
  </div>
</header>
`;

document.getElementById("footer").innerHTML = `
<footer class="footer">
  <div class="footer-top">
    <div class="footer-left">
      <img src="https://lh3.googleusercontent.com/d/1Bd5R8_up-TfKDvtncZk1HuC4ZwQf_sOs" alt="Logo Biblioteca" class="footer-logo"/>
      <p class="negrita_footer">Biblioteca Pública Julio Pérez Ferrero</p>
      <p>Somos un centro cultural y educativo al servicio de la comunidad nortesantandereana y fronteriza...</p>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-right">
      <h3>Contacto</h3>
      <p><img src="https://lh3.googleusercontent.com/d/1aTkGRwD02YHSiQa-v0W2wVfVFkNE5uVD" class="icon-footer"/> 5723186</p>
      <p><a href="https://wa.me/573142180656" target="_blank"><img src="https://lh3.googleusercontent.com/d/1khVirnkc7rryQTepu7mNJbtv5Z0y1hHU" class="icon-footer"/> 3142180656</a></p>
      <p><a href="mailto:direccion@bibliocucuta.org"><img src="https://lh3.googleusercontent.com/d/1ZHH5ltiZRD0T-gtcBKDeda_YHzI2mo2N" class="icon-footer"/> direccion@bibliocucuta.org</a></p>
      <h3>Dirección</h3>
      <p><a href="https://maps.app.goo.gl/vpy5XkU12wmy3L5W8" target="_blank"><img src="https://lh3.googleusercontent.com/d/1a0xL4w9Bl7i5CEzoRxgd2VabcDLnnmNs" class="icon-footer"/> Av. 0A #12A-28 Barrio La Playa, Cúcuta</a></p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright &copy; <span id="currentYear"></span> Corporación Cultural Biblioteca Pública Julio Pérez Ferrero. Todos los Derechos Reservados.</p>
    <p>Desarrollado por Marbelssa Villamizar.</p>
  </div>
</footer>
`;

// Establecer el año actual en el footer
document.getElementById("currentYear").textContent = new Date().getFullYear();


// Insertar el header y el footer en el DOM
document.getElementById("header").innerHTML = headerHTML;
document.getElementById("footer").innerHTML = footerHTML;

// Cargar los estilos del header y footer
const headerStyle = document.createElement("link");
headerStyle.rel = "stylesheet";
headerStyle.href = `${rutaBase}Css/estilo_header.css`;
document.head.appendChild(headerStyle);

const footerStyle = document.createElement("link");
footerStyle.rel = "stylesheet";
footerStyle.href = `${rutaBase}Css/estilo_footer.css`;
document.head.appendChild(footerStyle);

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

// Actualizar el año en el footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
