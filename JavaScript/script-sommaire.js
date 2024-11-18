let clées = Object.keys(SAE)

console.log(clées)



differentes_sae =''

// for(let propriété in clées){
//     differentes_sae += "<div><h2>" + clées[propriété] + "</h2></div>"  
// }

// document.querySelector("main").innerHTML = differentes_sae


for (let key in SAE) {
    
    // Récupérer les informations de chaque SAE
    let titre = SAE[key].titre;
    let competences = SAE[key].compétences;
    let description = SAE[key].description;
    differentes_sae += "<div><h2>" + titre + "</h2><p>" + competences+ "</p><p>" + description +"</p></div>"  

  }
  document.querySelector("main").innerHTML = differentes_sae

