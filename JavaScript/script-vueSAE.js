let param = new URLSearchParams(location.search);
let num_SAE = param.get('num_SAE');

let infos_sae = ''

let titre = SAE[num_SAE].titre;
let competences = SAE[num_SAE].compétences;
let description = SAE[num_SAE].description;


infos_sae += "<div class='case'><h2>" + num_SAE + "</h2><h3>" + titre + "</h3><p>" + description+ "</p>"  + competences+ AC + ressources+"</a></div>"

console.log(infos_sae)

document.querySelector("main").innerHTML = infos_sae;