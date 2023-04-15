const axios = require('axios');

var title = 'Développement web, intégration';
var romes_list;
// Fonction pour effectuer l'appel GET avec le paramètre 'title' et retourner les informations
function getMetiersByTitle(title) {
  return axios.get('https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/metiers', {
    params: {
      title: title
    }
  })
  .then(response => {
    // Traiter la réponse
    const metiers = response.data.labelsAndRomes;
    const result = [];
    
    for (let i = 0; i < metiers.length; i++) {
      const metier = {
        title: metiers[i].label,
        codesRomes: metiers[i].romes
      };

      for (let j = 0; j <= metiers[i].romes.length-1; j++){
        romes_list += metiers[i].romes[j] + ', ';
      }
      
      result.push(metier);
    }
    
    return result;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des métiers :', error);
    return null; // Retourner null en cas d'erreur
  });
}

// Fonction pour effectuer l'appel GET avec les paramètres 'romes' et 'departement'
function getFormationsByRomesAndDepartement(romes, departement) {
  return axios.get('https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/formationsParRegion?caller=contact@ynov.com', {
    params: {
      romes: romes,
      departement: departement
    }
  })
  .then(response => {
    // Traiter la réponse
    const formations = response.data;
    return formations;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des formations :', error);
    return null; // Retourner null en cas d'erreur
  });
}


var departement = '69';
getFormationsByRomesAndDepartement(romes_list, departement)
.then(formations => {
  if (formations) {
    console.log('Liste des formations pour les codes ROMES \'' + romes_list + '\' et le département \'' + departement + '\' :', formations);
  } else {
    console.log('Aucune formation trouvée pour les codes ROMES \'' + romes_list + '\' et le département \'' + departement + '\'.');
  }
})
.catch(error => {
  console.error('Une erreur s\'est produite lors de la récupération des formations :', error);
});