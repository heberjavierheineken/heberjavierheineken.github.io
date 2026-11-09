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
    },
    {
      id: "figuras-navidenas",
      nombre: "Figuras Navideñas",
      subtitulo: "Set de 3 piezas con charola",
      precio: 190,
      corta: "Set de pino, copo de nieve y cubo burbuja con hojuela de oro, en charola de concreto.",
      descripcion: "Un set de tres velas navideñas sobre una charola ovalada de concreto blanco con cama de piedritas doradas: un pino con cascabel, un copo de nieve y un cubo burbuja con brillos dorados. Todas llevan hojuela de oro y se ven elegantes como centro de mesa o regalo premium.",
      detalles: [
        ["Piezas", "Pino, copo de nieve y cubo burbuja"],
        ["Base", "Charola ovalada de concreto blanco"],
        ["Acabado", "Hojuela de oro y cascabeles dorados"],
        ["Temporada", "Edición navideña"]
      ],
      ideal: "Centro de mesa navideño, regalo premium, decoración de sala o chimenea.",
      portada: "img/figuras-navidad-foto.svg",
      fotos: [
        { src: "img/figuras-navidad-foto.svg", alt: "Set de figuras navideñas con charola de concreto" }
      ]
    },
    {
      id: "cubo-corazon",
      nombre: "Cubo Corazón",
      subtitulo: "Con brillos dorados y cascabel",
      precio: 80,
      corta: "Vela en forma de cubo burbuja con glitter dorado y moño navideño.",
      descripcion: "Una vela con forma de cubo hecha de burbujas redondas apiladas, bañada en glitter dorado que atrapa la luz. Viene decorada con un moño rojo de 'Feliz Navidad' y un cascabel dorado. Su forma moderna la hace diferente a las velas tradicionales y queda perfecta como pieza de decoración.",
      detalles: [
        ["Color", "Blanco marfil con glitter dorado"],
        ["Forma", "Cubo de burbujas apiladas"],
        ["Detalle", "Moño rojo navideño y cascabel dorado"],
        ["Temporada", "Edición navideña"]
      ],
      ideal: "Centro de mesa, regalo de intercambio, decoración moderna navideña.",
      portada: "img/cuadros-corazon-foto.svg",
      fotos: [
        { src: "img/cuadros-corazon-foto.svg", alt: "Par de velas cubo corazón con glitter dorado" }
      ]
    },
    {
      id: "copos-de-nieve",
      nombre: "Copos de Nieve",
      subtitulo: "Con hojuela de oro",
      precio: 28,
      corta: "Velas en forma de copo de nieve con detalles de hojuela de oro.",
      descripcion: "Pequeñas velas con forma de copo de nieve, talladas en cera blanca con detalles de hojuela de oro en las puntas. Son compactas, bonitas y perfectas para repartir como detalle navideño o para armar un centro de mesa con varias. Se ven increíbles encendidas porque la llama resalta el dorado.",
      detalles: [
        ["Color", "Blanco con hojuela de oro"],
        ["Forma", "Copo de nieve con seis puntas"],
        ["Tamaño", "Compacto, ideal para agrupar"],
        ["Temporada", "Edición navideña"]
      ],
      ideal: "Detalle para posada, recuerdo navideño, intercambio o centro de mesa.",
      portada: "img/copos-navidad-foto.svg",
      fotos: [
        { src: "img/copos-navidad-foto.svg", alt: "Tres velas de copo de nieve con hojuela de oro" }
      ]
    },
    {
      id: "caja-regalo-navidad",
      nombre: "Caja Regalo Navideña",
      subtitulo: "3 velas en caja kraft con ventana",
      precio: 100,
      corta: "Caja de regalo con pino, copo de nieve y reno, lista para entregar.",
      descripcion: "Una caja kraft con ventana transparente que trae tres velas navideñas acomodadas sobre papel de seda blanco: un pino con hojuela de oro, un copo de nieve y un reno con moño rojo. Ya viene armada y decorada con una rama de pino, así que solo la entregas. Es el regalo perfecto para alguien que no sabe qué dar en Navidad.",
      detalles: [
        ["Contenido", "Pino, copo de nieve y reno"],
        ["Empaque", "Caja kraft con ventana y papel de seda"],
        ["Decoración", "Rama de pino con frutos rojos"],
        ["Listo para", "Entregar como regalo sin envolver"]
      ],
      ideal: "Intercambio navideño, regalo para anfitriona, detalle corporativo o para quien tiene todo.",
      portada: "img/caja-navidad-foto.svg",
      fotos: [
        { src: "img/caja-navidad-foto.svg", alt: "Caja kraft con tres velas navideñas y decoración de pino" }
      ]
    },
    {
      id: "bosque-navideno",
      nombre: "Bosque Navideño",
      subtitulo: "Set completo con charola y piedritas",
      precio: 210,
      corta: "Tres pinos, un reno y un pino blanco sobre charola de concreto con piedritas. Personaliza los colores.",
      descripcion: "Un bosque navideño completo sobre una charola ovalada de concreto blanco con cama de piedritas decorativas: tres pinos en distintos tonos de verde, un reno con moño rojo y cascabel, y un pino blanco con cascabel dorado. La charola y las piedritas están incluidas. Los pinos y renos se pueden hacer en el color que prefieras — solo dinos cuál al hacer tu pedido.",
      detalles: [
        ["Piezas", "3 pinos, 1 reno y 1 pino blanco (5 velas)"],
        ["Base", "Charola ovalada de concreto con piedritas incluidas"],
        ["Personalización", "Pinos y renos disponibles en el color que desees"],
        ["Acabado", "Cascabeles dorados y moño rojo"]
      ],
      ideal: "Centro de mesa navideño, decoración de sala, regalo premium o pieza para chimenea.",
      portada: "img/set-bosque-foto.svg",
      fotos: [
        { src: "img/set-bosque-foto.svg", alt: "Bosque navideño con pinos, reno y charola de concreto" }
      ]
    },
    {
      id: "lumiere-vainilla",
      nombre: "Lumière Vainilla",
      subtitulo: "Vela aromática en vaso ahumado",
      precio: 230,
      corta: "Vela aromática de vainilla en elegante vaso de vidrio ahumado.",
      descripcion: "La línea Lumière es la experiencia premium de VELARE. Una vela aromática con esencia natural de vainilla, vertida a mano en un sofisticado vaso de vidrio ahumado con acabado artesanal. Al encenderla, la vainilla envuelve tu espacio con un aroma cálido y reconfortante que invita a la calma. El vaso ahumado filtra la luz de la llama creando un ambiente íntimo y acogedor. Lo mejor: es rellenable. Cuando se termina, solo trae tu vaso y lo rellenamos con el aroma que prefieras a un precio muy accesible. Tu vela favorita, para siempre.",
      detalles: [
        ["Aroma", "Vainilla natural (disponible en más aromas)"],
        ["Vaso", "Vidrio ahumado artesanal"],
        ["Línea", "Lumière — premium VELARE"],
        ["Rellenable", "Sí — trae tu vaso y elige el aroma"],
        ["Acabado", "Hecha a mano con amor"]
      ],
      ideal: "Relajación, aromaterapia, cena romántica, regalo especial o decoración de interiores. Rellenable con el aroma de tu elección.",
      portada: "img/lumiere-vainilla-portada.svg",
      fotos: [
        { src: "img/lumiere-vainilla-portada.svg", alt: "Vela Lumière vainilla en vaso ahumado, vista lateral" },
        { src: "img/lumiere-vainilla-etiqueta.svg", alt: "Vela Lumière vainilla, detalle de etiqueta VELARE" }
      ]
    },
    {
      id: "santal-33",
      nombre: "Santal 33",
      subtitulo: "Vela aromática en vaso artesanal",
      precio: 250,
      corta: "Vela aromática con esencia Santal 33 en vaso de vidrio soplado con piedras de colores y alambre dorado.",
      descripcion: "La fragancia Santal 33 capturada en una vela artesanal que es también una pieza decorativa. El vaso está hecho de vidrio soplado a mano, decorado con piedras de colores y un entramado de alambre dorado que lo hace único — no hay dos iguales. Al encenderla, la esencia amaderada y envolvente del santal llena tu espacio con una presencia sofisticada. Viene en caja de regalo con moño, lista para sorprender. Y lo mejor: es rellenable. Cuando se termina, trae tu vaso y lo rellenamos con el aroma que prefieras a un precio muy accesible.",
      detalles: [
        ["Aroma", "Santal 33 (disponible en más aromas al rellenar)"],
        ["Vaso", "Vidrio soplado a mano con piedras y alambre dorado"],
        ["Presentación", "Caja de regalo con moño"],
        ["Rellenable", "Sí — trae tu vaso y elige el aroma"],
        ["Acabado", "Hecha a mano con amor"]
      ],
      ideal: "Regalo premium, decoración de interiores, aromaterapia o detalle especial. Rellenable con el aroma de tu elección.",
      portada: "img/santal-portada.svg",
      fotos: [
        { src: "img/santal-portada.svg", alt: "Vela Santal 33 en caja de regalo con moño" },
        { src: "img/santal-vaso.svg", alt: "Vaso artesanal de vidrio soplado con piedras de colores" },
        { src: "img/santal-etiqueta.svg", alt: "Vista superior de la vela Santal 33 con etiqueta VELARE" }
      ]
    },
    {
      id: "citronela",
      nombre: "Citronela",
      subtitulo: "Vela aromática anti-mosquitos",
      precio: 150,
      corta: "Vela aromática de citronela con cubos de cera turquesa en vaso de cristal.",
      descripcion: "Una vela aromática con esencia de citronela — el repelente natural por excelencia. Los cubos de cera turquesa sobre una base de cera blanca le dan un look fresco y moderno que decora mientras protege tu espacio de mosquitos. Perfecta para terrazas, jardines, cenas al aire libre o cualquier rincón donde quieras disfrutar sin zancudos. El vaso de cristal redondo es elegante y compacto. Y como todas nuestras aromáticas, es rellenable: cuando se termina, trae tu vaso y lo rellenamos con citronela o el aroma que prefieras a un precio muy accesible.",
      detalles: [
        ["Aroma", "Citronela (repelente natural de mosquitos)"],
        ["Vaso", "Cristal redondo transparente"],
        ["Diseño", "Cubos de cera turquesa sobre base blanca"],
        ["Rellenable", "Sí — trae tu vaso y elige el aroma"],
        ["Acabado", "Hecha a mano con amor"]
      ],
      ideal: "Terraza, jardín, cena al aire libre, camping o cualquier espacio donde quieras alejar mosquitos con estilo. Rellenable.",
      portada: "img/citronela-portada.svg",
      fotos: [
        { src: "img/citronela-portada.svg", alt: "Vela de citronela con cubos turquesa, vista frontal" },
        { src: "img/citronela-arriba.svg", alt: "Vela de citronela vista desde arriba" }
      ]
    },
    {
      id: "orquidea",
      nombre: "Orquídea",
      subtitulo: "Vela aromática en vaso artesanal",
      precio: 250,
      corta: "Vela aromática con esencia de orquídea en vaso de vidrio soplado con vetas blancas.",
      descripcion: "Una vela aromática con esencia de orquídea, vertida a mano en un hermoso vaso de vidrio soplado con vetas blancas y tonos dorados que lo hacen único — no hay dos iguales. Al encenderla, la delicada fragancia floral de la orquídea transforma tu espacio en un refugio de elegancia y calma. Viene en caja transparente con moño de yute, lista para regalar. Y como todas nuestras aromáticas, es rellenable: cuando se termina, trae tu vaso y lo rellenamos con el aroma que prefieras a un precio muy accesible.",
      detalles: [
        ["Aroma", "Orquídea (disponible en más aromas al rellenar)"],
        ["Vaso", "Vidrio soplado a mano con vetas blancas y doradas"],
        ["Mechas", "Doble mecha para mayor difusión del aroma"],
        ["Presentación", "Caja transparente con moño de yute"],
        ["Rellenable", "Sí — trae tu vaso y elige el aroma"],
        ["Acabado", "Hecha a mano con amor"]
      ],
      ideal: "Regalo premium, decoración de interiores, aromaterapia o detalle especial. Rellenable con el aroma de tu elección.",
      portada: "img/orquidea-portada.svg",
      fotos: [
        { src: "img/orquidea-portada.svg", alt: "Vela de orquídea en caja de regalo con moño de yute" },
        { src: "img/orquidea-arriba.svg", alt: "Vista superior de la vela de orquídea con doble mecha" },
        { src: "img/orquidea-vaso.svg", alt: "Vaso artesanal de vidrio soplado con vetas blancas" }
      ]
    },
    {
      id: "fresas",
      nombre: "Fresas",
      subtitulo: "Vela aromática con fresas de cera",
      precio: 150,
      corta: "Vela aromática con olor a fresas y fresas de cera decorativas en vaso de cristal.",
      descripcion: "Una vela aromática con esencia de fresas frescas, coronada con fresas y frambuesas de cera hechas a mano que se ven tan reales que dan ganas de morderlas. El aroma dulce y frutal llena tu espacio con una energía fresca y alegre. Viene en vaso de cristal cuadrado dentro de su caja transparente con moño de yute, lista para sorprender. Y es rellenable: cuando se termina, trae tu vaso y lo rellenamos con fresas o el aroma que prefieras a un precio muy accesible.",
      detalles: [
        ["Aroma", "Fresas frescas (disponible en más aromas al rellenar)"],
        ["Vaso", "Cristal cuadrado transparente"],
        ["Decoración", "Fresas y frambuesas de cera hechas a mano"],
        ["Presentación", "Caja transparente con moño de yute"],
        ["Rellenable", "Sí — trae tu vaso y elige el aroma"],
        ["Acabado", "Hecha a mano con amor"]
      ],
      ideal: "Regalo original, decoración de cocina o sala, detalle para amigas o cualquier ocasión especial. Rellenable.",
      portada: "img/fresas-portada.svg",
      fotos: [
        { src: "img/fresas-portada.svg", alt: "Vela de fresas en caja de regalo con moño de yute" },
        { src: "img/fresas-arriba.svg", alt: "Vista superior de la vela con fresas de cera decorativas" }
      ]
    }
  ]
};
