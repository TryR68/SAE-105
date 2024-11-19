differentes_sae =''


for (let key in SAE) {
    
    // Récupérer les informations de chaque SAE
    let Num_SAE = key
    let titre = SAE[key].titre;
    let competences = SAE[key].compétences;
    let description = SAE[key].description;
    differentes_sae += "<div class='case'><a href='../vueSAE.html?num_SAE=" +Num_SAE+" '><h2>" + Num_SAE + "</h2><h3>" + titre + "</h3><p>" + description+ "</p>"  + competences+ "</a></div>"


}

  document.querySelector("main").innerHTML = differentes_sae

