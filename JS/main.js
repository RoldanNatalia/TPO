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