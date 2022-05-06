var jugar = prompt("Este programa funciona tomando decisiones, ¿quieres jugar? Responde con una s minúscula si es que sí o con una n mayúscula si es que no")  

if(jugar==`s`) 
{ 

  
var fruta=prompt("introduce el nombre de una fruta que desees con la primera letra en mayúscula"); 


switch (fruta) { 
  case 'Naranjas': 
    alert('El kilogramo de naranjas cuesta $0.59.'); 
    break; 
  case 'Manzanas': 
    alert('El kilogramo de manzanas cuesta $0.32.'); 
    break; 
  case 'Platanos': 
    alert('El kilogramo de platanos cuesta $0.48.'); 
    break; 
  case 'Cerezas': 
    alert('El kilogramo de cerezas cuesta $3.00.'); 
    break; 
  case 'Mangos': 
  case 'Papayas': 
    alert('El kilogramo de mangos y papayas cuesta $2.79.'); 
    break; 
  default: 
    alert('Lo lamentamos, por el momento no disponemos de ' + fruta + '.'); 
} 

var respuesta=prompt("¿Hay algo más que te quisiera consultar?, responde si o no"); 

 if(respuesta=="si") 

{ 

alert("No tenemos tiempo para responderte en este momento. Gracias"); 

} 

else 

{ 

alert("muchas gracias por tu consulta"); 

} 
}
  else {
   var respuesta=prompt( "Perdona")


}

if (jugar =="n")
{
 alert("es una pena que no quieras participar. Quizás para la siguiente"); 
 
} 
  
else 
{ 
 var respuesta=prompt( "Por favor, repita la acción respondiendo s o n.")
} 




