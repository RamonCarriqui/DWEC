/* Mejora el ejercicio anterior para que continue realizando el mismo calculo
hasta que el usuario decida que no quiere continuar.*/
do{
    cateto1 = parseInt(prompt("Dime el tamaño del cateto 1"));
    cateto2 = parseInt(prompt("Dime el tamaño del cateto 2"));
    
    resultado = Math.hypot(cateto1, cateto2)
    alert("El tamaño de la hipotenusa es: " + resultado.toFixed(3)); //Redondedo a 3 decimales

    respuesta = prompt("¿Quieres hacer otro cálculo? Responde s/n");
    
    }while(respuesta === "s");