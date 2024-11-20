let param = new URLSearchParams(location.search);
let num_SAE = param.get('num_SAE');

let infos_sae = '';
let description_sae = '';
let apprentissages_sae = '';
let ressources_sae ='';



let titre = SAE[num_SAE].titre;
let competences = SAE[num_SAE].compétences;
let description = SAE[num_SAE].description;
let semestre = SAE[num_SAE].semestre;
let apprentissages_critique = SAE[num_SAE].AC;
let ressources = SAE[num_SAE].ressources; 


infos_sae += "<div class = 'infos_sae'><h2>" + num_SAE + "</h2><h3>" + titre + "</h3><p>Semestre : " + semestre + "</p></div>";
description_sae += "<div class = 'description_sae'><p>" + description + "</p><div class = competences>" + competences + "</div>";



// Ajouter les apprentissages critiques
apprentissages_sae += "<h3>Apprentissages critiques :</h>";
for (let num_ac in apprentissages_critique) {
  apprentissages_sae += "<div class = apprentissages_sae>" + apprentissages_critique[num_ac] + "</div>";
}



// Ajouter les ressources nécessaires
ressources_sae += "<h3>Ressources</h3>";
for (let num_ress in ressources) {
  ressources_sae += "<div class = ressources_sae>" + ressources[num_ress] + "</div>";
}



// Afficher l'HTML dans la page
document.querySelector("#infoSAE").innerHTML = infos_sae;
document.querySelector("#descriptionSAE").innerHTML = description_sae;
document.querySelector("#apprentissagesSAE").innerHTML = apprentissages_sae;
document.querySelector("#ressourcesSAE").innerHTML = ressources_sae;