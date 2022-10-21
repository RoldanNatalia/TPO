function validarForm(){
          
  let isCorrect=true;
  
  
  if(document.getElementById("InputName").value.length < 2 ){
    
    isCorrect = false;
    
  }
   
  
  if(document.getElementById("InputEmail1").value.length < 5 ){
      isCorrect = false;
  }
      if (isCorrect){
        
          let nom=document.getElementById("InputName").value
          let email=document.getElementById("InputEmail1").value
          localStorage.setItem("Nombre",nom)
          localStorage.setItem("email", email)
          

         /* const fs = require('fs'); 
 
          let objectToSave = {nombre:nom,email:email} 
 
          fs.writeFile('archivo.json', JSON.stringify(objectToSave),'utf8', (err) => { 
          if (err) throw err; 
          console.log('The file has been saved!'); 
          }); */

          }
      
    
  
      return isCorrect;
    

          
  
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
                <img src="${producto.image}" alt="${producto.title}">
                <div class="cuerpo">
                    <h4>${producto.id} - ${producto.title}</h4>
                    <p>${producto.description}</p>
                    <a class="boton" href=${producto.spotify}>IR A </a>
                </div>
            </div>   
        `
            }
    
    
            cad += `</div>`
    
            console.log(cad)
    
            document.getElementById("tarjetas").innerHTML= cad;
    
    
        }
      );