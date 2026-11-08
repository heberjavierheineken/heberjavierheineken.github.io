// Lista de velas del catálogo. Para agregar una vela nueva, copia un bloque { ... } y cambia sus datos.
window.CATALOGO = {
  marca: "VELARE",
  instagram: "velare.candle",
  lema: "Hecho a mano con amor",
  whatsapp: "523322682222", // ejemplo: "523411234567" (con 52 y lada, sin espacios)
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
    },
    {
      id: "peonias-y-flores-secas",
      nombre: "Peonías y Flores Secas",
      subtitulo: "Arreglo en maceta blanca",
      precio: 80,
      corta: "Peonías de cera con flores secas naturales en maceta blanca.",
      descripcion: "Un arreglo de peonías de cera en tono coral, acompañadas de flores secas naturales en dorado y verde. Va montado en una maceta blanca acanalada, así que se ve como un arreglo floral completo y dura mucho más que las flores naturales.",
      detalles: [
        ["Colores", "Coral con flores secas doradas y verdes"],
        ["Presentación", "Maceta blanca acanalada"],
        ["Acabado", "Peonías de cera hechas a mano"]
      ],
      ideal: "Regalo especial, aniversario, Día de las Madres o centro de mesa.",
      portada: "img/peonias-secas-foto.svg",
      fotos: [
        { src: "img/peonias-secas-ficha.svg", alt: "Ficha de la vela Peonías y Flores Secas" },
        { src: "img/peonias-secas-foto.svg", alt: "Arreglo de peonías y flores secas en maceta blanca" }
      ]
    },
    {
      id: "peonia-rosa",
      nombre: "Peonía Rosa",
      subtitulo: "En maceta acanalada",
      precio: 40,
      corta: "Una peonía rosa con pétalos en relieve en maceta blanca.",
      descripcion: "Una peonía de cera en tonos rosa y blanco, con cada pétalo trabajado en relieve. Viene dentro de una maceta blanca acanalada que sirve de base y la hace ver como una flor recién cortada.",
      detalles: [
        ["Colores", "Rosa degradado a blanco"],
        ["Presentación", "Maceta blanca acanalada"],
        ["Acabado", "Pétalos en relieve, hecha a mano"]
      ],
      ideal: "Detalle de cumpleaños, recuerdo para evento o decoración de buró.",
      portada: "img/peonia-rosa-foto.svg",
      fotos: [
        { src: "img/peonia-rosa-ficha.svg", alt: "Ficha de la vela Peonía Rosa" },
        { src: "img/peonia-rosa-foto.svg", alt: "Vela Peonía Rosa en maceta acanalada" }
      ]
    },
    {
      id: "jardin-de-suculentas",
      nombre: "Jardín de Suculentas",
      subtitulo: "En maceta acanalada",
      precio: 40,
      corta: "Tres suculentas de cera en maceta blanca. Decora sin riego.",
      descripcion: "Tres suculentas de cera en distintos tonos de verde, acomodadas sobre una base de cera dentro de una maceta blanca acanalada. Parece una plantita real y no necesita riego ni sol.",
      detalles: [
        ["Colores", "Verdes con un toque menta"],
        ["Presentación", "Maceta blanca acanalada"],
        ["Acabado", "Suculentas hechas a mano"]
      ],
      ideal: "Escritorio, oficina, regalo para quien ama las plantas.",
      portada: "img/jardin-suculentas-foto.svg",
      fotos: [
        { src: "img/jardin-suculentas-ficha.svg", alt: "Ficha de la vela Jardín de Suculentas" },
        { src: "img/jardin-suculentas-foto.svg", alt: "Vela de suculentas en maceta blanca" }
      ]
    },
    {
      id: "cruz-floral",
      nombre: "Cruz Floral",
      subtitulo: "Cruz blanca con flores",
      precio: 30,
      corta: "Cruz de cera blanca con flores fucsia en relieve.",
      descripcion: "Una cruz de cera blanca con acabado perlado, decorada al centro con flores en tono fucsia que se degradan a blanco. Es un recuerdo bonito para celebraciones religiosas.",
      detalles: [
        ["Colores", "Blanco perlado con flores fucsia"],
        ["Forma", "Cruz"],
        ["Acabado", "Flores hechas a mano"]
      ],
      ideal: "Bautizo, primera comunión, confirmación o recuerdo de fiesta.",
      portada: "img/cruz-floral-foto.svg",
      fotos: [
        { src: "img/cruz-floral-ficha.svg", alt: "Ficha de la vela Cruz Floral" },
        { src: "img/cruz-floral-foto.svg", alt: "Vela en forma de cruz con flores fucsia" }
      ]
    },
    {
      id: "pinos-de-navidad",
      nombre: "Pinos de Navidad",
      subtitulo: "Arbolitos en tres tamaños",
      precio: 35,
      corta: "Arbolitos de pino en cera, perfectos para decorar tu mesa navideña.",
      descripcion: "Arbolitos de Navidad hechos a mano en cera con textura de ramas de pino. Vienen en tres tonos —verde intenso, verde claro y blanco— y en diferentes tamaños, así que puedes armar tu propio bosquecito navideño. Cada uno tiene un acabado brillante que refleja la luz de las velas de alrededor.",
      detalles: [
        ["Colores", "Verde intenso, verde claro y blanco"],
        ["Tamaños", "Chico, mediano y grande"],
        ["Acabado", "Textura de ramas de pino, brillo natural"],
        ["Temporada", "Edición navideña"]
      ],
      ideal: "Centro de mesa navideño, regalo de intercambio o decoración de temporada.",
      portada: "img/pinos-navidad-portada.svg",
      fotos: [
        { src: "img/pinos-navidad-portada.svg", alt: "Tres arbolitos de Navidad de cera en verde y blanco" },
        { src: "img/pinos-navidad-coleccion.svg", alt: "Colección completa de pinos navideños en distintos tamaños" }
      ]
    },
    {
      id: "pino-con-cascabel",
      nombre: "Pino con Cascabel",
      subtitulo: "Arbolito plano con estrella dorada",
      precio: 30,
      corta: "Arbolito de Navidad en cera blanca con cascabel dorado en la punta.",
      descripcion: "Un arbolito de Navidad en cera blanca con silueta plana y ramas en relieve. Lleva un cascabel dorado en la punta que funciona como estrella, y se sostiene de pie por su base recta. Es compacto, elegante y queda perfecto al lado de una rama de pino natural.",
      detalles: [
        ["Color", "Blanco marfil"],
        ["Detalle", "Cascabel dorado en la punta"],
        ["Forma", "Silueta plana con ramas en relieve"],
        ["Temporada", "Edición navideña"]
      ],
      ideal: "Centro de mesa, chimenea, recuerdo navideño o regalo de intercambio.",
      portada: "img/pino-navidad-foto.svg",
      fotos: [
        { src: "img/pino-navidad-foto.svg", alt: "Arbolito de Navidad en cera blanca con cascabel dorado" }
      ]
    },
    {
      id: "reno-navideno",
      nombre: "Reno Navideño",
      subtitulo: "Con moño y cascabel",
      precio: 37,
      corta: "Reno de cera blanca con moño rojo de 'Navidad' y cascabel dorado.",
      descripcion: "Un reno de cera blanca con silueta recortada, astas grandes y un arco entre las patitas. Lleva un moño rojo con la palabra 'Navidad' y un cascabel dorado colgando del cuello. Es un detalle navideño que se ve bien solo o acompañado de los pinos de la colección.",
      detalles: [
        ["Color", "Blanco marfil"],
        ["Detalle", "Moño rojo navideño y cascabel dorado"],
        ["Forma", "Silueta de reno con astas"],
        ["Temporada", "Edición navideña"]
      ],
      ideal: "Decoración navideña, regalo de intercambio o complemento del nacimiento.",
      portada: "img/reno-navidad-foto.svg",
      fotos: [
        { src: "img/reno-navidad-foto.svg", alt: "Reno de cera blanca con moño rojo y cascabel dorado" }
      ]
    },
    {
      id: "tabletas-aromaticas",
      nombre: "Tabletas Aromáticas",
      subtitulo: "Flores de lavanda en cera",
      precio: 20,
      corta: "Tabletas redondas de cera aromática con flores en relieve. Para cajones, clósets y más.",
      descripcion: "Tabletas redondas de cera aromática decoradas con flores de lavanda en relieve. Se cuelgan con su cordón de yute en el clóset, se meten en cajones de ropa, en el carro, en el baño o donde quieras un aroma fresco y duradero. No necesitan encenderse: liberan fragancia de forma natural durante semanas. Vienen con etiqueta VELARE y listas para regalar.",
      detalles: [
        ["Aroma", "Lavanda"],
        ["Color", "Blanco con flores lila"],
        ["Presentación", "Tableta redonda con cordón de yute"],
        ["Usos", "Cajones, clóset, carro, baño, maletas, zapatos"]
      ],
      ideal: "Detalle para despedidas, recuerdo para evento, regalo económico o para perfumar tu ropa.",
      portada: "img/tabletas-aromaticas-foto.svg",
      fotos: [
        { src: "img/tabletas-aromaticas-foto.svg", alt: "Par de tabletas aromáticas de lavanda con etiqueta VELARE" }
      ]
    }
  ]
};
