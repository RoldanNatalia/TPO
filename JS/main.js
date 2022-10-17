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
                <img src="${producto.image}" alt="${producto.title}">
                <div class="cuerpo">
                    <h4>${producto.id} - ${producto.title}</h4>
                    <p>${producto.description}</p>
                    
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