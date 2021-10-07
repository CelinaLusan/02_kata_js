//Challenge 2
/*Construir un script que almacene el nombre, la edad, el email de un usuario y crear una tarjeta de identificacion con una imagen predeterminada
y ademas crear un boton que cree la tarjeta por cada usuario*/



//document.getElementById("ine").style.display="none";

function ine(){
    
    var content=document.getElementById("contenido");
    var newP = document.createElement("p");

    document.getElementById("ine").style.display="block";
    document.getElementById("titulo").innerHTML =  `<b>Nombre:</b>  ${ document.getElementById("nombre").value}`;
  
    newP.innerHTML = `<b>Edad:</b>  ${ document.getElementById("edad").value} <br> <b> Email: </b> ${ document.getElementById("email").value}`;                
    content.appendChild(newP);  

}