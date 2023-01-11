let info = {
  name: "Sofía Alvarez R.",
  logo_name: "Sofía Alvarez R.",
  flat_picture: require("./src/assets/sofia_sonpersonas.png"),
  portrait_picture: require("./src/assets/portrait.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Hola a todos, soy Sofía Álvarez, estudiante de diseño UC. Estoy muy emocionada de presentarles mi portafolio. En él encontrarán los proyectos y trabajos que he realizado hasta el momento.  <br><br>Me gustaría invitarles a explorar mi portafolio. Estoy segura de que encontrarán algo que les guste. Espero que disfruten y aprendan algo nuevo. <br>¡Gracias por visitar!",
  links: {
    resume: "https://drive.google.com/file/d/1W0pzOo1Gb-W70BYKehOfZ4qaJt7m1_7O/view?usp=sharing",
  },
  about:{
    presentation:
      "Mi nombre es Sofía Álvarez. Mis amigos me dicen Mojona. <br><br>Nací el 10 de octubre del 2000. Una Libra con ascendente en Aries y luna en Piscis. <br><br>Actualmente soy estudiante de la Escuela de Diseño de la Pontificia Universidad Católica de Chile (desde agosto del 2019). ",
    skills: 
    {
      "Herramientas": ["Adobe Illustrator", "Adobe Photoshop", "Rhinoceros 3D", "Keyshot", "Microsoft Office"],
      "Idiomas": ["Español avanzado", "Inglés avanzado (FCE, TOEFL 95) ", "Alemán básico (A2) "]
    }
  },
  projects: [
    {
      name: "Son Personas.",
      folder_name: "son_personas",
      parts: [
        {
          "type": "Description", 
          "bgColor": "bg-pink2",
          "title": "Son Personas.", 
          "subtitle": "Proyecto personal.", 
          "year": "-2020-", 
          "content": "El nombre “Son Personas” nació de mis hermanos. Ellos se reían de mí diciendo que <b>mis dibujos parecían aliens, y yo siempre les contestaba que eran personas</b>  no aliens.<br><br>Empecé a dibujarlos en junio de 2020, durante la cuarentena. En cierto modo sentí que hacerlos era <b>una forma de mantener la cordura en esos momentos de estrés</b> .<br><br>Desde entonces, <b>estas pequeñas ilustraciones se convirtieron en parte de mi identidad.</b>  Por eso en la mayoría de mis proyectos suele haber un dibujo de “son personas”."
        },
        {
          "type": "Picture", 
          "bgColor": "bg-red2",
          "picture_name": "son_personas_1.png",
        },
         {
          "type": "Picture", 
          "bgColor": "bg-red2",
          "picture_name": "son_personas_2.png",
        },
        {
          "type": "Carousel", 
          "bgColor": "bg-pink2",
          "title": "Instagram @son.personas",
          "picture_folder_name": "carrusel",
          "names": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", ]
        },
      ]
    },
    {
      name: "Banca Efelante.",
      folder_name: "banca_efelante",
      parts: [
        {
          "type": "Description", 
          "bgColor": "bg-pink2",
          "title": "Banca Efelante.", 
          "subtitle": "Banca para dos.", 
          "year": "-2021-", 
          "content": "<b>Autoras:</b> Antonia Riesco, Ignacia Hughes y Sofía Álvarez.<br><br>El desafío era crear una banca que tuviera <b>dos puntos de apoyo</b> y que pudiera <b>soportar el peso de dos personas.</b> Debía construirse a partir de los principios estructurales y unirse con amarra cables.<br><br>Decidimos que <b>nuestro banco podría usarse en un contexto infantil.</b> Por eso, una de sus características es el estar sobredimensionado, para que por ningún motivo sea inestable.<br><br>Para que se <b>relacionara con el contexto de los niños y llamara la atención,</b> lo hicimos en forma de elefante. Por eso se llama “Efelante”, nombre que alude al elefantito morado de Winnie the Pooh."
        },
        {
          "type": "Picture", 
          "bgColor": "bg-red2",
          "picture_name": "banca_efelante_1.jpg",
        },
         {
          "type": "Picture", 
          "bgColor": "bg-red2",
          "picture_name": "banca_efelante_2.png",
        },
        {
          "type": "Carousel", 
          "bgColor": "bg-pink2",
          "title": "Manual de ensamblaje.",
          "picture_folder_name": "carrusel",
          "names": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", ]
        },
      ]
    },
    {
      name: "Camper My Little People.",
      folder_name: "camper_my_little_people",
      parts: [
        {
          "type": "Description", 
          "bgColor": "bg-pink2",
          "title": "Camper My Little People.", 
          "subtitle": "Modelo 3D.", 
          "year": "-2021-", 
          "content": "El proyecto consistió en <b>modelar un objeto de nuestra elección en Rhinoceros 3D,</b> el cual debía tener diferentes partes y movimiento (para luego realizar una animación en Keyshot).<br><br>Había que iluminarlo y renderizarlo para <b>tomar varias fotos desde diferentes perspectivas,</b> donde también se podían ver los detalles. También tuvimos que hacer <b>3 variantes que usaran materiales diferentes</b> al original."
        },
        {
          "type": "Picture",
          "bgColor": "bg-red2",
          "picture_name": "camper_my_little_people_1.png",
        },
        {
          "type": "Picture",
          "bgColor": "bg-pink2", 
          "picture_name": "camper_my_little_people_2.png",
        },
        {
          "type": "Picture", 
          "bgColor": "bg-pink2",
          "title": "Zoom a detalles.",
          "picture_name": "camper_my_little_people_3.png",
        },
        {
          "type": "Carousel",
          "bgColor": "bg-red2", 
          "title": "Variantes.",
          "subtitle": "3 opciones diferentes.", 
          "picture_folder_name": "carrusel",
          "names": ["1.png", "2.png", "3.png", ]
        },
      ]
    },
    {
      name: "Tejido de Balaclava.",
      folder_name: "tejido_balaclava",
      parts: [
        {
          "type": "Description", 
          "bgColor": "bg-pink2",
          "title": "Tejido de Balaclava.", 
          "subtitle": "Desafío Personal", 
          "year": "-2022-", 
          "content": "En el verano del 2022 (enero y febrero) <b>decidí que quería aprender a hacer algo nuevo,</b> ya que tenía mucho tiempo. Se me ocurrió que <b>tejer era una buena idea.</b><br><br>En el proceso de pensar qué hacer, me encontré con una <b>marca llamada Imanskopi.</b> Venden unos balaclavas tejidos y me enamoré de su diseño. No vendían ni enviaban a Chile, así que <b>decidí desafiarme y tejer uno con el mismo diseño para mí.</b><br><br>Era la <b>primera vez que tejía en más de diez años,</b> así que estoy muy orgullosa de los resultados. "
        },
        {
          "type": "Picture", 
          "bgColor": "bg-red2",
          "picture_name": "tejido_balaclava_1.png",
        },
        {
          "type": "Carousel",
          "bgColor": "bg-pink2", 
          "picture_folder_name": "carrusel",
          "names": ["1.jpg", "2.jpg", "3.jpg", ]
        },
      ]
    },
    {
      name: "Salsa de tomate.",
      folder_name: "salsa_tomate",
      parts: [
        {
          "type": "Description", 
          "bgColor": "bg-pink2",
          "title": "Salsa de tomate.", 
          "subtitle": "Diseño de producto.", 
          "year": "-2022-", 
          "content": "Este proyecto consistía en <b>elegir el diseño 'ganador' de un producto concreto</b> del supermercado, en mi caso la salsa de tomate en sachet y luego <b>crear un diseño que superara al mencionado anteriormente.</b><br><br>Además <b>crear dos versiones diferentes del producto.</b> En mi caso, la original era la salsa de tomate normal y mis variantes son la italiana y la casera. "
        },
        {
          "type": "Picture",
          "bgColor": "bg-red2", 
          "picture_name": "salsa_tomate_1.png",
        },
        {
          "type": "Carousel", 
          "bgColor": "bg-pink2",
          "picture_folder_name": "carrusel",
          "names": ["1.png", "2.png", "3.png", ]
        },
      ]
    },
    {
      name: "Banco Republicano.",
      folder_name: "banco_republicano",
      parts: [
        {
          "type": "Description",
          "bgColor": "bg-pink2", 
          "title": "Banco Republicano.", 
          "subtitle": "Diseño de un servicio.", 
          "year": "-2022-", 
          "content": "En este proyecto, el objetivo era <b>crear una imagen de marca de un verdadero encargo de un cliente.</b><br><br>En mi caso <b>el cliente quería tener la grafica para su banco,</b> que tenía el nombre 'Banco Republicano'."
        },
        {
          "type": "Picture", 
          "bgColor": "bg-pink2",
          "picture_name": "banco_republicano_1.png",
        },
        {
          "type": "Carousel",
          "bgColor": "bg-pink2", 
          "title": "Mockups",
          "picture_folder_name": "carrusel",
          "names": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", ]
        },
      ]
    },
    {
      name: "Automarca.",
      folder_name: "automarca",
      parts: [
        {
          "type": "Description", 
          "bgColor": "bg-pink2",
          "title": "Automarca.", 
          "subtitle": "Diseño de identidad", 
          "year": "-2022-", 
          "content": "El objetivo de este proyecto era <b>explorar nuestra propia identidad como diseñadores.</b> Por ello, teniamos que <b>crear una identidad personal para desempeñar nuestra profesión.</b> Esto es equivalente a cómo las empresas, productos y servicios construyen su propia identidad."
        },
        {
          "type": "Picture", 
          "bgColor": "bg-pink2",
          "picture_name": "automarca_1.png",
        },
        {
          "type": "Carousel", 
          "bgColor": "bg-red2",
          "picture_folder_name": "carrusel",
          "names": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.jpg", ]
        },
      ]
    },
    {
      name: "Pintatón Skatepark",
      folder_name: "pintaton_skatepark",
      parts: [
        {
          "type": "Description", 
          "bgColor": "bg-pink2",
          "title": "Pintatón Skatepark", 
          "subtitle": "Propuesta Skatepark Parque Las Palmeras (Renca).", 
          "year": "-2022-", 
          "content": "<b>Autoras/es:</b> Emilia Amunátegui, Agustín Contreras, Hugh Halbert, Antonia Riesco y Sofía Álvarez.<br><br>Una <b>propuesta de diseño de información hecho para el Parque Las Palmeras en Renca,</b> especificamente en el skatepark. Con el objetivo de <b>incentivar el diálogo, participación entre vecinos de Renca</b> y skaters de la comunidad chilena se planeo una pintatón.<br><br>Un evento que consta de varias secciones, entre ellas una sección de información, una recreación del skatepark original, carteles, publicidad en medios sociales y más."
        },
         {
          "type": "Picture", 
          "bgColor": "bg-red2",
          "picture_name": "pintaton_skatepark_1.png",
        },
        {
          "type": "Picture", 
          "bgColor": "bg-pink2",
          "picture_name": "pintaton_skatepark_2.png",
        },
         {
          "type": "Picture", 
          "bgColor": "bg-pink2",
          "picture_name": "pintaton_skatepark_3.png",
        },
        {
          "type": "Carousel", 
          "bgColor": "bg-pink2", 
          "picture_folder_name": "carrusel",
          "names": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", ]
        },
      ]
    },
  ],
  contact:{
    options: 
    {
      "Mail.": ["sofia.alvarez@uc.cl", "sofia.alvarez.16@gmail.com"],
      "Teléfono.": ["(+56) 9 7968 3617"],
    }
  },
};

export default info;
