differentes_sae =''


for (let key in SAE) {
    
    // Récupérer les informations de chaque SAE
    let Num_SAE = key
    let titre = SAE[key].titre;
    let competences = SAE[key].compétences;
    differentes_sae += "<div class='case'><a href='../vueSAE.html?num_SAE=" +Num_SAE+" '><div class='num-sae'>" + Num_SAE + "</div><div class='titre-sae'>" + titre +"</div><div class='competences'>"+ competences+ "</div></a></div>"



}

  document.querySelector("#cases-dynamiques").innerHTML = differentes_sae

