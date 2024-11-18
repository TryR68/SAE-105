let param = new URLSearchParams(location.search);
let num_SAE = param.get('num_SAE');
document.querySelector(".resultat").innerHTML += "Numéro de la SAE :" + num_SAE ;