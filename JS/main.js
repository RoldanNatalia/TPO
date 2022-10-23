function validarForm(){
          
  let isCorrect=true;
  
  
  if(document.getElementById("InputName").value.length < 2 ){
    
    isCorrect = false;

    
  }
   
  if(document.getElementById("InputAsunto").value.length < 2 ){
    
    isCorrect = false;
    
  }
   
  if(document.getElementById("InputEmail1").value.length < 5 ){
      isCorrect = false;
  }
      if (isCorrect){

          alert("Los datos fueron enviados.");
         
          return true;

          } else {
            alert("Por favor, revise los datos ingresados!!");
            return false

          }
        
      return isCorrect;
    
}

function limpiarInput(){

  document.getElementById("InputName").value = "";
  document.getElementById("InputPais").value = "";
  document.getElementById("InputEmail1").value = "";
  document.getElementById("InputAsunto").value = "";
  document.getElementById("InputComentario").value = "";
  
}

  let url = "https://raw.githubusercontent.com/saninfa2/prueba/cc79d03cb2b7513b515db1ed2e3a66e8022779fa/data.json";
  let datos = [];
  fetch(url)
      .then(response => response.json())
      .then(data => {  // data contiene el JSON
          datos = data.arreglo;
  
  
          let cad = `<div class="container">`;
  
          for (producto of datos) {
            cad += `
            <div class="tarjeta">
              <div class="tarjeta--img">
                  <img class="tarjeta--portada" src="${producto.image}" alt="${producto.title}">
              </div>
              <div class="cuerpo">
                  <h4 class="cuerpo--encabezado">${producto.title}</h4>
                  <p>${producto.description}</p>
                  <button class="cuerpo--button"><a class="cuerpo--enlace" href="${producto.spotify}">spotify</a></button>
                  <button class="cuerpo--button"><a class="cuerpo--enlace" href="${producto.youtube}">youtube</a></button>
              </div>
            </div>   
        `
            }
    
    
            cad += `</div>
             `;
    
    
    
            document.getElementById("tarjetas").innerHTML = cad;
    
    
        }
        );

        
//HEADER
const navVar = ` <nav class="nav">
                    <a class="nav--logo--link" href="./index.html"><img id="nav--logo" src="./imagenes/logoTrabajoGrupal.png" alt="Logo"></a>
                    <button class="nav--toggle"><img class="nav--toggle--img" src="./imagenes/lista.png" alt=""></button>
                    <ul class="nav--ul nav--ul--visible">
                      <li class="nav--ul--item"><a href="./index.html" class="nav--ul--link nav--link">HOME</a></li>
                      <li class="nav--ul--item"><a href="./newsletter.html" class="nav--ul--link nav--link">music history</a></li>
                      <li class="nav--ul--item"><a href="./contact.html" class="nav--ul--link nav--link">contact</a></li>
                      <li class="nav--ul--item"><a href="./us.html" class="nav--ul--link nav--link">us</a></li>
                    </ul>
                  </nav> ` ;

  document.getElementById("navVar").innerHTML = navVar;


  //TOGLE
  const navToggle = document.querySelector(".nav--toggle");
  const navUl = document.querySelector(".nav--ul");
  navToggle.addEventListener("click", () => { 
    navUl.classList.toggle("nav--ul--visible");});

const foot = `<div class="footer--contenedor--cuerpo">

<div class="footer_integrantes footer--contenedor">
    <br>
    <a href="https://www.buenosaires.gob.ar/educacion/codo-codo" class="textfooter footer_integrantes_link">Codo a Codo 4.0</a>
    <p class="textfooter">Sabina Fabrega - Julieta Cabrera - Natalia Roldán</p>
</div>
<div class="footer_redes footer--contenedor">
    <p class="textfooter footer_redes_p">Síguenos en las redes sociales:</p>
    <a class="footer_redes_link" target="_blank" href="https://es-la.facebook.com/"> <img class="footer_redes_logos" width="20px" src="./imagenes/facebook.png" alt="facebook"></a>
    <a class="footer_redes_link" target="_blank" href="https://www.instagram.com/"> <img class="footer_redes_logos" width="20px" src="./imagenes/instagram.png" alt="Instagram"></a>
    <a class="footer_redes_link" target="_blank" href="https://www.linkedin.com/"><img class="footer_redes_logos" width="20px" src="./imagenes/linkedin.png" alt="linkedin"></a>
    <a class="footer_redes_link" target="_blank" href="https://www.youtube.com/"><img class="footer_redes_logos" width="20px" src="./imagenes/youtube.png" alt="youtube"></a>

</div>
</div>
<div id="footer--copy footer--contenedor--copy">
    <p class="textfooter footer--copy--text">Playlist - @Copyright 2022</p>
</div>`;

document.getElementById("pie").innerHTML = foot;
