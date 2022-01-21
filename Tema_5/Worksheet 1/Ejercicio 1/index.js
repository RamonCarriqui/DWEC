
// Número de enlaces
enlaces = document.getElementsByTagName("a").length; 
console.log("Hay "+enlaces+" enlaces.");


// Dirección a la que enlaza el penúltimo enlace
console.log(document.getElementsByTagName("a").getAttribute("href").length-2);

// Enlaces que enlazan a google
enlaces = document.querySelector("a").getAttribute(href);

//
let allLinks = document.getElementsByTagName('a');
console.log("Enlaces totales: " + allLinks.length);
console.log("Link del penúltimo enlace: " + allLinks.length > 2 ? allLinks[allLinks.length - 2].href : allLinks[allLinks.length - 1].href);
console.log("Enlaces totales a Google: " + document.querySelectorAll("a[href*='google']").length);
console.log("Enlaces totales del tercer párrafo: " + document.querySelectorAll("p:nth-child(4) a").length);