// Lista de velas del catálogo. Para agregar una vela nueva, copia un bloque { ... } y cambia sus datos.
window.CATALOGO = {
  marca: "Velas Florales",
  lema: "Hechas a mano para regalar y decorar",
  whatsapp: "", // ejemplo: "523411234567" (con 52 y lada, sin espacios)
  velas: [
    {
      id: "ramo-de-rosas",
      nombre: "Ramo de Rosas",
      subtitulo: "Flor en vaso de cristal",
      precio: 150,
      corta: "Ramo de rosas en relieve dentro de un vaso de cristal.",
      descripcion: "Un ramo de rosas tallado en cera, con cada pétalo en relieve y los tallos atados con un lazo. Viene dentro de un vaso de cristal transparente sobre una base de cera blanca, así que luce como un pequeño arreglo floral incluso sin encenderla.",
      detalles: [
        ["Colores", "Rosa con tallos verde claro"],
        ["Presentación", "Vaso de cristal transparente"],
        ["Base", "Cera blanca"],
        ["Acabado", "Rosas en relieve, hecha a mano"]
      ],
      ideal: "Cumpleaños, aniversario, Día de las Madres o centro de mesa.",
      portada: "img/ramo-rosas-frente.svg",
      fotos: [
        { src: "img/ramo-rosas-ficha.svg", alt: "Ficha de la vela Ramo de Rosas" },
        { src: "img/ramo-rosas-frente.svg", alt: "Vela Ramo de Rosas vista de frente" },
        { src: "img/ramo-rosas-arriba.svg", alt: "Vela Ramo de Rosas vista desde arriba" }
      ]
    }
  ]
};
