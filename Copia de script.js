const datosBusqueda = [
  {
    titulo: "Antecedentes Penales",
    descripcion: "Registro de Antecedentes",
    enlace: "Copia de Actas.html"
  },
  {
    titulo: "Primer Pasaporte",
    descripcion: "Cita para primer Pasaporte",
    enlace: " Copia de Primer pas.html"
  },
  {
    titulo: "Renovacion Pasaporte",
    descripcion: "Cita para Renovacion Pasaporte",
    enlace: " Copia de Renovacion pas.html"
  },
  {
    titulo: "2 Apps",
    descripcion: "2 Apps a tu eleccion",
    enlace: " Copia de Duo.html"
  },
  {
    titulo: "Paramount",
    descripcion: "Cine y Accion",
    enlace: " Copia de Paramount.html"
  },
  {
    titulo: "4 apps",
    descripcion: "4 apps a tu eleccion",
    enlace: "Copia de cuatro.html"
  },
  {
    titulo: "Trio de Apps",
    descripcion: "3 Apps a tu eleccion",
    enlace: " Copia de Trio.html"
  },
  {
    titulo: "IPTV Bronce",
    descripcion: "3 Apps a tu eleccion",
    enlace: "Copia de Bronce.html"
  },
  {
    titulo: "IPTV Plata",
    descripcion: "3 Apps a tu eleccion",
    enlace: " Copia de Plata.html"
  },
  {
    titulo: "IPTV Oro",
    descripcion: "3 Apps a tu eleccion",
    enlace: " Copia de Oro.html"
  },
  
  
  {
    titulo: "Mantenimientos",
    descripcion: "Mantenimiento de dispositivos",
    enlace: "Copia de Mantenimientos.html"
  },
  {
    titulo: "Actas de Nacimiento",
    descripcion: "Impresion de Actas de nacimiento",
    enlace: "Copia de Actas.html"
  },
  {
    titulo: "Disney Plus",
    descripcion: "Películas, series y entretenimiento",
    enlace: "Copia de Disney.html"
  },
  {
    titulo: "Chat Gpt",
    descripcion: "Tu Prudictividad al maximo",
    enlace: "Copia de Chatgp.html"
  },
  {
    titulo: "Vix",
    descripcion: "Series,Reallitis,novelas",
    enlace: " Copia de Vix.html"
  }, 
  {
    titulo: "CapCut",
    descripcion: "Edita sin limites y usa tu creatividad al maximo",
    enlace: " Copia de capcut.html"
  },
  {
    titulo: "Duo de Apps",
    descripcion: "Elige tus apps favoritas",
    enlace: "Copia de Entretenimiento.html"
  },
  {
    titulo: "Spotify + 1 App",
    descripcion: "Spotify + App a tu eleccion",
    enlace: "Copia de Spotify.html"
  },
  {
    titulo: "HBO Max",
    descripcion: "Películas y series premium",
    enlace: "Copia de Hbo.html"
  },
  {
    titulo: "Canva Pro",
    descripcion: "Canva Pro ediciones sin limite",
    enlace: "Copia de canva.html"
  },
  {
    titulo: "YouTube Premium",
    descripcion: "YouTube sin anuncios y beneficios premium",
    enlace: "Copia de YouTube.html"
  },
  {
    titulo: "PrimeVideo",
    descripcion: "PrimeVideo universo de peliculas",
    enlace: "Copia de Prime.html"
  },
  {
    titulo: "Spotify",
    descripcion: "Spotify sin limites",
    enlace: "COpia de Spotify.html"
  },
  {
    titulo: "Netflix",
    descripcion: "Tu espacio personal es con Netflix",
    enlace: "Copia de Netflix.html"
  },
  {
    titulo: "RENAP",
    descripcion: "trámites de RENAP",
    enlace: "Copia de Ren.html"
  },
  {
    titulo: "TecnoDemo",
    descripcion: "Mantenimiento, reparación y revisión de dispositivos",
    enlace: "Copia de servicios.html"
  },
  {
    titulo: "Pasaportes",
    descripcion: "Citas",
    enlace: "Copia de Info pas.html"
  },
  {
    titulo: "Entretenimiento",
    descripcion: "Netflix,Disney,PrimeVideo",
    enlace: "Copia de Entretenimiento.html"
  }
];


/* Abrir buscador */
function abrirBuscador() {
  const modal = document.getElementById("buscadorModal");
  const input = document.getElementById("inputBusqueda");

  modal.style.display = "flex";

  setTimeout(() => {
    input.focus();
  }, 100);
}


/* Cerrar buscador */
function cerrarBuscador() {
  const modal = document.getElementById("buscadorModal");
  const input = document.getElementById("inputBusqueda");
  const resultados = document.getElementById("resultadosBusqueda");

  modal.style.display = "none";
  input.value = "";
  resultados.innerHTML = "";
}


/* Buscar dentro de la lista */
function buscarEnPagina() {
  const texto = document.getElementById("inputBusqueda").value.toLowerCase();
  const resultados = document.getElementById("resultadosBusqueda");

  resultados.innerHTML = "";

  if (texto.trim() === "") {
    return;
  }

  const filtrados = datosBusqueda.filter(item =>
    item.titulo.toLowerCase().includes(texto) ||
    item.descripcion.toLowerCase().includes(texto)
  );

  if (filtrados.length === 0) {
    resultados.innerHTML = `
      <p class="sin-resultados">No se encontraron resultados.</p>
    `;
    return;
  }

  filtrados.forEach(item => {
    resultados.innerHTML += `
      <a class="resultado-item" href="${item.enlace}">
        ${item.titulo}
        <br>
        <small>${item.descripcion}</small>
      </a>
    `;
  });
}


/* Cerrar buscador al tocar fuera de la caja */
document.addEventListener("click", function(event) {
  const modal = document.getElementById("buscadorModal");

  if (event.target === modal) {
    cerrarBuscador();
  }
});


/* Cerrar buscador con tecla ESC */
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    cerrarBuscador();
  }
});