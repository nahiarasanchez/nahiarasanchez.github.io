var A= 10
var B= 20




document.write("<p> El resultado de evaluar si ",A," es menor que ",B, " <strong> Y </strong> ",B," es menor que ",A ," es: ",A<B&&B<A,"</p>"); 

document.write("<p> El resultado de evaluar si ",A," es menor que ",B, " <strong> O </strong> ",B," es menor que ",A ," es: ",A<B||B<A,"</p>"); 

document.write("<p> El resultado de evaluar si ",A," es menor que ",B, " <strong> Y </strong> ",B," es menor que ",A ," es false, salvo que empleemos el operador ! delante de la expresión, entonces lo negaremos: ",!(A<B&&B<A),"</p>"); 
