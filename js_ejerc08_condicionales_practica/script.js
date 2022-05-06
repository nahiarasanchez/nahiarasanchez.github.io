var topping = window.prompt("qué topping quieres: oreo, kitkat, brownie, lacasitos u otro"); 

var precio = 0.00; 

var helado = 1.90; 

var precioFinal = 0.00; 



if(topping=="oreo"){ 

precio = 1; 

}else if(topping == "kitkat"){ 

precio = 1.50; 

}else if(topping == "brownie"){ 

precio = 0.75; 

}else  if(topping == "lacasitos"){ 

precio = 0.95; 

}
else{ 

document.write("no tenemos este topping, lo sentimos. "); 

precio = 0; 

} 

precioFinal = helado + precio; 

document.write("el helado cuesta " + precioFinal + " €"); 