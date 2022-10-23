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
          

                    

         /* const fs = require('fs'); 
 
          let objectToSave = {nombre:nom,email:email} 
 
          fs.writeFile('archivo.json', JSON.stringify(objectToSave),'utf8', (err) => { 
          if (err) throw err; 
          console.log('The file has been saved!'); 
          }); */

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
    
    
            cad += `</div>`
    
            console.log(cad)
    
            document.getElementById("tarjetas").innerHTML= cad;
    
    
        }
      );