/*Crea	un	script	que	recoja	la	nota	de	dos	exámenes	y	
dos	trabajos	y	determine	si	la	media	es	superior	
a	5	para	aprobar	la	asignatura	(75%	exámenes	y	
25%	trabajos)	y	4.5	en	todos	ellos.*/
examen1 = prompt("Nota de examen 1");
examen2 = prompt("Nota de examen 2");
proyecto1 = prompt("Nota de proyecto 1");
proyecto2 = prompt("Nota de proyecto 2");


if ((examen1 >= 4.5) && (examen2 >= 4.5) && (proyecto1 >= 4.5) && (proyecto2 >= 4.5)){
    media = (examen1 + examen2)*0.75 + (proyecto1 + proyecto2) * 0.25;
    if (media < 5){
        alert("Has aprobado la asignatura!!!");
    }else{
        alert("Debes estudiar más...")
    }
    
}
else{
    alert("Necesitas estudiar más...")
}
