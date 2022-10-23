/*const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
  */
  let url = "./JS/data.json"
  let datos = [];
  fetch(url)
      .then(response => response.json())
      .then(data => {  // data contiene el JSON
          console.log(data)
          datos = data.arreglo
          console.log(datos)   //  8 playlists
  
  
          let cad = `<div class="container">`
  
          for (producto of datos) {
            cad += `
            <div class="tarjeta">
              <div class="tarjeta--img">
                  <img class="tarjeta--portada" src="${producto.image}" alt="${producto.title}">
              </div>
              <div class="cuerpo">
                  <h4>${producto.title}</h4>
                  <p>${producto.description}</p>
                  <button class="cuerpo--button"><a class="cuerpo--enlace" href="${producto.spotify}">spotify</a></button>
                  <button class="cuerpo--button"><a class="cuerpo--enlace" href="${producto.youtube}">youtube</a></button>
              </div>
            </div>   
        `
            }
    
    
            cad += `</div>
             `
    
            console.log(cad)
    
    
    
            document.getElementById("tarjetas").innerHTML = cad;
    
    
        }
        );

        

const navVar = ` <nav class="nav">
                    <a class="nav--logo--link" href="/index.html"><img class="nav--logo" src="https://placekitten.com/30/30" alt="Logo"></a>
                    <button class="nav--toggle"><img class="nav--toggle--img" src="/imagenes/lista.png" alt=""></button>
                    <ul class="nav--ul nav--ul--visible">
                      <li class="nav--ul--item"><a href="/newsletter.html" class="nav--ul--link nav--link">newletter</a></li>
                      <li class="nav--ul--item"><a href="/index.html" class="nav--ul--link nav--link">PLAYLIST</a></li>
                      <li class="nav--ul--item"><a href="/us.html" class="nav--ul--link nav--link">us</a></li>
                      <li class="nav--ul--item"><a href="/contact.html" class="nav--ul--link nav--link">contact</a></li>
                    </ul>
                  </nav> ` ;

  document.getElementById("navVar").innerHTML = navVar;


  //TOGLE
  const navToggle = document.querySelector(".nav--toggle");
  const navUl = document.querySelector(".nav--ul");
  navToggle.addEventListener("click", () => { 
    navUl.classList.toggle("nav--ul--visible");});