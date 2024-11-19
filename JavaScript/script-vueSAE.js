let param = new URLSearchParams(location.search);
let num_SAE = param.get('num_SAE');

let infos_sae = '';

let titre = SAE[num_SAE].titre;
let competences = SAE[num_SAE].compétences;
let description = SAE[num_SAE].description;
let apprentissages_critique = SAE[num_SAE].AC;
let ressources = SAE[num_SAE].ressources; 


infos_sae += "<div><h2>" + num_SAE + "</h2><h3>" + titre + "</h3><p>" + description+ "</p>"  + competences+"</a></div>"




// Ajouter les apprentissages critiques (AC)
infos_sae += "<h4>Apprentissages critiques :</h4><ul>";
for (let num_ac in apprentissages_critique) {
  infos_sae += "<li>" + apprentissages_critique[num_ac] + "</li>";
}
infos_sae += "</ul>";



// Ajouter les ressources nécessaires
infos_sae += "<h4>Ressources nécessaires :</h4><ul>";
for (let num_ress in ressources) {
  infos_sae += "<li>" + ressources[num_ress] + "</li>";
}
infos_sae += "</ul>";


console.log(infos_sae);

// Afficher l'HTML dans la page
document.querySelector("main").innerHTML = infos_sae;