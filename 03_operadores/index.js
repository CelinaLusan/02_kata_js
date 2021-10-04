//-------- Challenge 2 --------
// Juego de piedra papel o tijera ✂️ ⛰️ 📃
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano


// piedra le gana a tijeras
// papel le gana a piedra
// tijeras le gana a papel

var rusuario1 = prompt("Usuario 1: Elige Piedra, papel o tijeras");
console.log("El jugador 1 dijo: ", rusuario1);
var rusuario2 = prompt("Usuario 2: Elige Piedra, papel o tijeras");
console.log("El jugador 2 dijo: ", rusuario2);

   
        if (rusuario1 === rusuario2){
            console.log("Empate");
        }else{
            if (rusuario1 === "piedra" && rusuario2 === "tijeras" || rusuario1 ==="papel" && rusuario2==="piedra" || rusuario1==="tijeras" && rusuario2==="papel" ){
                console.log("Gano el jugador 1");
            }else{
                if(rusuario2 === "piedra" && rusuario1 === "tijeras" || rusuario2 ==="papel" && rusuario1==="piedra" || rusuario2==="tijeras" && rusuario1==="papel" ){
                    console.log("Gano el jugador 2");
                }else{
                    console.log("Incorrecto");
                }
            }
        }
    
        
