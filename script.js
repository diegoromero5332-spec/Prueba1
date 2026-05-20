// ========================================
// BOTONES DE NAVEGACIÓN ENTRE SECCIONES
// ========================================

const botones = document.querySelectorAll("nav a");

botones.forEach(boton => {

  boton.addEventListener("click", function(e){

    e.preventDefault();

    const destino = this.getAttribute("href");

    document.querySelector(destino).scrollIntoView({
      behavior:"smooth"
    });

  });

});

// ========================================
// EFECTO INTERACTIVO EN TARJETAS
// ========================================

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "scale(1.03)";
    card.style.transition = "0.3s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "scale(1)";

  });

});

// ========================================
// NOTICIAS AUTOMÁTICAS DEL DÍA
// ========================================

// FECHA ACTUAL

const fecha = new Date();

const opciones = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const fechaActual = fecha.toLocaleDateString('es-ES', opciones);

// ========================================
// NOTICIAS DINÁMICAS
// ========================================

const noticias = {

  deportes: `
    ⚽ Última Hora (${fechaActual})
    
    La Champions League genera expectativa mundial tras los nuevos
    fichajes de verano y el regreso de varias estrellas al fútbol europeo.
  `,

  musica: `
    🎵 Tendencia Musical (${fechaActual})
    
    Los conciertos internacionales y los festivales musicales dominan
    las plataformas digitales y redes sociales este día.
  `,

  comida: `
    🍔 Gastronomía Mundial (${fechaActual})
    
    La cocina mexicana continúa posicionándose entre las favoritas
    del turismo internacional por su sabor y tradición.
  `,

  moda: `
    👗 Moda Internacional (${fechaActual})
    
    Las nuevas colecciones urbanas y sostenibles marcan tendencia
    en las principales pasarelas del mundo.
  `,

  tecnologia: `
    🤖 Tecnología e IA (${fechaActual})
    
    La inteligencia artificial en celulares y computadoras revoluciona
    la experiencia digital de millones de usuarios.
  `
};

// ========================================
// INSERTAR NOTICIAS EN LAS SECCIONES
// ========================================

document.querySelector("#deportes .contenido p").innerText =
noticias.deportes;

document.querySelector("#musica .contenido p").innerText =
noticias.musica;

document.querySelector("#comida .contenido p").innerText =
noticias.comida;

document.querySelector("#moda .contenido p").innerText =
noticias.moda;

document.querySelector("#tecnologia .contenido p").innerText =
noticias.tecnologia;

// ========================================
// MENSAJE DE BIENVENIDA
// ========================================

window.onload = () => {

  alert(
    "📰 Bienvenido a Flash News MX\n\n" +
    "Las noticias de hoy ya fueron actualizadas."
  );

};

// ========================================
// BOTÓN DEL JUEGO
// ========================================

const botonJuego = document.querySelector(".juego a");

botonJuego.addEventListener("click", () => {

  alert("🎮 Entrando al área de juegos...");

});

// ========================================
// CAMBIO DE COLOR EN TARJETAS AL HACER CLICK
// ========================================

tarjetas.forEach(card => {

  card.addEventListener("click", () => {

    card.style.border = "3px solid white";
    card.style.boxShadow = "0 0 25px white";

    setTimeout(() => {

      card.style.border = "3px solid #38bdf8";
      card.style.boxShadow = "0 0 20px #38bdf8";

    }, 1000);

  });

});