const urlParams = new URLSearchParams(window.location.search);
const productoID = urlParams.get('productoID');

const productos = [

  // Seccion Cuidado Personal
  {
    id: 1,
    nombre: 'Maquina de Afeitar',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/maquina-de-afeitar-biodegradable.jpg',
    precio: '1199.99',
    descripcion: 'Mango hecho con un 80% de recursos sostenibles a base de plantas. Sin tintes químicos; no tóxico. Hipoalergénico.'
  },
  {
    id: 2,
    nombre: 'Jabon Artesanal Natural',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/jabon.jpg',
    precio: '1249.99',
    descripcion: 'Producto Hipoalergénico. Para piel normal y seca. Hidratante. Apto para bebés.'
  },
  {
    id: 3,
    nombre: 'Cepillo de Bambú',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/cepillo-de-bambu.jpg',
    precio: '559.99',
    descripcion: '- Misma vida útil y experiencia de lavado que un cepillo de dientes convencional.\n\n- 97% biodegradables: packaging de cartón y mango de bambú 🎋 moso.\n\n- 3% reciclable: cerdas de Nylon libres de BPA ⚛️.\n\n- Una vez que termines de utilizar tu cepillo, separá las cerdas con una pinza y descartá las cerdas junto con tus residuos reciclables♻️..\n\n- El packaging y mango pueden ser compostados 🌱.\n\n- Color:\nVerde 🟢\nVioleta🟣.\nAmarillo🟡\nAzul 🔵'
  },
  {
    id: 4,
    nombre: 'Esponja Facial',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/esponja-facial.jpg',
    precio: '2189.99',
    descripcion: 'Nuestra línea pensada en la limpieza y cuidado facial incorpora a nuestro catálogo a la favorita para la rutina de belleza. Esponjas hechas de Konjac que son la tendencia sustentable para cuidar y mejorar la apariencia y elasticidad de la piel. Es 100% orgánica y biodegradable.'
  },
  {
    id: 5,
    nombre: 'Pasta de Dientes',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/pasta-de-dientes.jpg',
    precio: '1199.99',
    descripcion: 'Pasta de dientes activada por carbón: aceite de coco orgánico certificado y bicarbonato de sodio, esta pasta de dientes blanqueadora sin productos químicos se une a las manchas y elimina la placa como un profesional. Clínicamente probado: pasta de dientes que blanquea los dientes hasta 7 tonos más blancos. Infundida con las propiedades remineralizantes de la tierra de diatomeas, aceite de árbol de té, aceite de coco, xilitol y aceite de menta. Repleto de todos los ingredientes necesarios para una pasta de dientes natural diaria. Aliento fresco de menta: pasta de dientes especialmente diseñada para dejar tu aliento fresco y tu boca limpia Fabricado en Estados Unidos, vegano, sin crueldad, sin fluoruro, sin SLS, sin gluten, sin peróxido, sin triclosán, sin parabenos, seguro para niños, sin peróxido de hidrógeno Contiene un (1) 4 onzas. tubo de pasta dental blanqueadora de dientes Cali White, carbón'
  },
  {
    id: 6,
    nombre: 'Protector Solar',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/protector-solar.jpg',
    precio: '7799.99',
    descripcion: 'Usalo también como tu crema de día! Esta fórmula exclusiva con ingredientes naturales y seguros para tu salud, puede usarse como crema diraria facial, puede aplicarse antes del maquillaje, y su FPS 20 garantiza una protección efectiva contra los rayos UVA y UVB, además de que nos protege de la luz azul que irradian los dispositivos electrónicos. Pueden usarlo distintos tipos de piel. Respetuoso con vos y con la naturaleza. Aprobado por ANMAT para protección UVA Y UVB.'
  },
  {
    id: 16,
    nombre: 'Tónico Agua Termal',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/tonico-agua-termal.jpg',
    precio: '3989.99',
    descripcion: 'Calma, refresca, descongestiona. El agua termal repleta de minerales suaviza y refresca la piel. Puede aplicarse en el rostro previo a la crema hidratante, ayuda a aliviar rojeces, irritaciones y picores de la piel. Contiene aceite esencial de Ylang Ylang que ayuda a equilibrar y regular la piel grasa, tiene propiedades antiinflamatorias, actúa como regenerador y tónico, mientras que su aroma dulce calma y relaja.'
  },
  {
    id: 17,
    nombre: 'Cepillo Corporal de Madera de Bambú',
    imagen: 'imagenes/productos/seccionCuidadoPersonal/cepillo-corporal.jpg',
    precio: '3899.99',
    descripcion: 'Cepillo corporal elaborado con bambú y cerdas naturales. Ideal para retirar impurezas y células muertas de la piel, tanto al seco como en la ducha. La suavidad de sus cerdas permite una profunda pero suave exfoliación estimulando la circulación. Además, ayuda a disminuir la flacidez en brazos y piernas. Modo de uso:  -Cepillado en Seco: Tomar el cepillo del mango, presionar y frotar por el cuerpo con movimientos circulares. -Mojado: Tomar el cepillo del mango, mojar y frotar por el cuerpo con movimientos circulares. También podés colocar en la cerdas un poco de jabón líquido para mejorar la experiencia a modo de masaje. Luego de usar enjuagar con abundante agua para evitar que queden residuos. Guardar siempre colgado en un lugar fresco y ventilado.'
  },

  // Seccion Cocina

  {
    id: 7,
    nombre: 'Taza Vaso Ecológico Camping Portatil Trigo Biodegradable',
    imagen: 'imagenes/productos/seccionCocina/taza.jpg',
    precio: '1499.99',
    descripcion: 'Taza de paja de trigo ecológica, con práctico diseño. Tamaño: 10 cm alto x 8 cm ancho aprox.. Material: hecho de fibra de paja de trigo natural, sin BPA y materiales de polipropileno aptos para alimentos. Una mejor alternativa al plástico: reduce tus residuos de plástico haciendo mejores opciones. Ligero, resistente y duradero: ligero y fácil de manejar en comparación con las tazas de cerámica y vidrio. Sin astillas ni grietas por caídas. Adecuado para todos los grupos de edad. Diseño de ranura para el pulgar con mango inclinado de 30 grados: el mango ergonómico y de diseño de ranura para el pulgar permite el descanso del pulgar y una fácil sujeción.'
  },
  {
    id: 8,
    nombre: 'Cápsulas de Café Reutilizables - Cafetera Nespresso x 4',
    imagen: 'imagenes/productos/seccionCocina/capsulas-de-cafe.jpg',
    precio: '3399.99',
    descripcion: 'Cápsulas reutilizables compatibles con sistema Nespresso para ser utilizadas con café molido ☕️ , soluble, té 🍵 o yerba mate 🧉. Vienen en un práctico y elegante estuche para guardar las cápsulas luego de su uso sobre la mesada o en la alacena. Contiene 4 cápsulas en vívidos colores para personalizar las cápsulas a gusto y una cuchara 🥄 con la medida justa para cargar adecuadamente la cápsula. Cada cápsula se puede reutilizar un mínimo de 100 veces  ♻️. Con cada cápsula podés realizar un pocillo express(30ml) Para un largo o «lungo»(110ml) utiliza dos cápsulas. Compatibilidad con todos los modelos de: Nespresso* (Para maquinas de 2010 en adelante)'
  },
  {
    id: 9,
    nombre: 'Servilletas Ecológicas 23x23cm X 20 Unidades',
    imagen: 'imagenes/productos/seccionCocina/servilletas23x23 x20unidades.jpg',
    precio: '89.99',
    descripcion: 'Servilletas Ecológicas, impresas con tintas al agua y procesos de producción que no dañan el medioambiente. 🍃 100% eco friendly♻️ Sustentable. Pack por 20 unidades. Medidas: 23X23 cm. Aprobado por ANMAT.'
  },
  {
    id: 10,
    nombre: 'Bolsas 100% Biodegradables Compostables de arranque - 15x20',
    imagen: 'imagenes/productos/seccionCocina/bolsas15x20.jpg',
    precio: '499.99',
    descripcion: 'Este pack contiene 20 bolsas que las podes usar para lo que necesites! Tienen el tamaño ideal para frutos secos, condimentos, soporta un peso de hasta 500 gr y puede permanecer en la heladera o en el freezer por 60 días. \nTodas nuestras bolsas son compostables, se convierten en tierra fértil en 90 días pudiendo variar este plazo levemente según las condiciones de humedad y compostaje. Parecen de plástico pero NO LO SON! son de bio-polimero a base de fécula de maíz y aceites vegetales, material 100% biodegradable.'
  },
  {
    id: 11,
    nombre: 'Natwash Para Lavado De Frutas Y Verduras 500cc - Biodegradable',
    imagen: 'imagenes/productos/seccionCocina/natwash.jpg',
    precio: '1299.99',
    descripcion: 'NATWASH es el único producto del mercado para el correcto lavado de frutas y verduras que está desarrollado con componentes naturales. Es altamente eficiente en la reducción de microorganismos causantes de enfermedades. Como beneficio adicional, alarga de forma considerable la vida útil de las fyv, reduciendo así, pérdidas de productos que podrían estar en perfecto estado. Su forma balanceada de ácidos orgánicos ataca la pared celular de los microorganismos reduciendo en un 99% las especies más conocidas como E Coli, salmonella o listeria.'
  },

  // Seccion Limpieza

  {
    id: 12,
    nombre: 'Limpia Pisos 1ltrs',
    imagen: 'imagenes/productos/seccionLimpieza/limpiaPiso.jpg',
    precio: '1259.99',
    descripcion: 'Nuestros envases y etiquetas:  Todos los envases que utilizamos son de material PET. El PET es un material mucho más liviano por lo que al momento de ser transportado, puede hacerse en cantidades mayores por carga, disminuyendo así el impacto del uso vehicular. Nuestras etiquetas son de OPP, polipropileno, si bien existen etiquetas de papel, las mismas lamentablemente no pueden usarse en productos de limpieza ya que al mínimo contacto con el agua estas se deshacen. Por ello elegimos este material que es resistente al agua y por su composición no requiere ser separada de los envases para ser reciclada, evitando un paso adicional en el proceso. NO utilizamos Formol o formaldehido. NO utilizamos Parabenos y Glutaraldehido. SI utilizamos Colorantes naturales. SI utilizamos Esencias naturales. NO testamos nuestros productos en animales.'
  },
  {
    id: 13,
    nombre: 'Limpia Pisos 5ltrs',
    imagen: 'imagenes/productos/seccionLimpieza/limpiaPiso5lts.jpg',
    precio: '5039.99',
    descripcion: 'Nuestros envases y etiquetas:  Todos los envases que utilizamos son de material PET. El PET es un material mucho más liviano por lo que al momento de ser transportado, puede hacerse en cantidades mayores por carga, disminuyendo así el impacto del uso vehicular. Nuestras etiquetas son de OPP, polipropileno, si bien existen etiquetas de papel, las mismas lamentablemente no pueden usarse en productos de limpieza ya que al mínimo contacto con el agua estas se deshacen. Por ello elegimos este material que es resistente al agua y por su composición no requiere ser separada de los envases para ser reciclada, evitando un paso adicional en el proceso. NO utilizamos Formol o formaldehido. NO utilizamos Parabenos y Glutaraldehido. SI utilizamos Colorantes naturales. SI utilizamos Esencias naturales. NO testamos nuestros productos en animales.'
  },
  {
    id: 14,
    nombre: 'Limpia Baños Ecológico 100% Biodegradable de Bambú Fresh - Botella',
    imagen: 'imagenes/productos/seccionLimpieza/limpia-banios.jpg',
    precio: '1254.99',
    descripcion: 'Limpiador desinfectante de baños realizado con ingredientes naturales y esencias naturales. 100% Biodegradable. Apto para inodoros, bañaderas, bachas. Apto para personas alérgicas y celíacas. NO testeamos en animales, NO usamos parabenos, NO usamos formol. Producto bajo en espuma. Contenido: 500 cc. Aroma: Bamboo Fresh'
  },
  {
    id: 15,
    nombre: 'Kit De Limpieza Ecológico - 100% Biodegradable - 5 Productos',
    imagen: 'imagenes/productos/seccionLimpieza/kitLimpieza5productos.jpg',
    precio: '6289.99',
    descripcion: 'Nuestros envases y etiquetas:  Todos los envases que utilizamos son de material PET. El PET es un material mucho más liviano por lo que al momento de ser transportado, puede hacerse en cantidades mayores por carga, disminuyendo así el impacto del uso vehicular. Nuestras etiquetas son de OPP, polipropileno, si bien existen etiquetas de papel, las mismas lamentablemente no pueden usarse en productos de limpieza ya que al mínimo contacto con el agua estas se deshacen. Por ello elegimos este material que es resistente al agua y por su composición no requiere ser separada de los envases para ser reciclada, evitando un paso adicional en el proceso. NO utilizamos Formol o formaldehido. NO utilizamos Parabenos y Glutaraldehido. SI utilizamos Colorantes naturales. SI utilizamos Esencias naturales. NO testamos nuestros productos en animales.'
  },
];

// Busca el producto con el ID correspondiente en la lista de productos
const productoSeleccionado = productos.find(producto => producto.id === parseInt(productoID));

if (productoSeleccionado) {
  // Modifica los elementos de la página de producto con los datos del producto seleccionado
  document.getElementById('imagenProducto').src = productoSeleccionado.imagen;
  document.getElementById('nombre-producto').textContent = productoSeleccionado.nombre;
  document.getElementById('precio-producto').textContent = productoSeleccionado.precio;
  document.getElementById('descripcionProducto').textContent = productoSeleccionado.descripcion;
} else {
  // Maneja el caso cuando no se encuentra el producto
  console.error('El producto no existe');
}
