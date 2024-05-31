(function () {
    console.log("rest API")
    // URL de l'API REST de WordPress
    let tableauPays = ["France", "États-Unis","Canada","Argentine","Chili","Belgique","Maroc","Mexique","Japon","Italie","Islande","Chine","Grece","Suisse"]
    for (let i = 0; i <= tableauPays.length - 1; i += 1) {
        let url = "https://gftnth00.mywhc.ca/tim21/wp-json/wp/v2/posts?search=" + tableauPays[i];
        fetch(url)
     .then(function (response) {
       // Vérifier si la réponse est OK (statut HTTP 200)
       if (!response.ok) {
         throw new Error(
           "La requête a échoué avec le statut " + response.status
         );
       }
 
       // Analyser la réponse JSON
       return response.json();

     })
      .then(function (data) {
        // La variable "data" contient la réponse JSON
        console.log(data)
        let restapi = document.querySelector(".contenu__pays");
        // Maintenant, vous pouvez traiter les données comme vous le souhaitez
        // Par exemple, extraire les titres des articles comme dans l'exemple précédent
          let carte = document.createElement("div");
          carte.classList.add("restapi__carte");
              
         carte.innerHTML = `
            <input type="button" value=`+ tableauPays[i] + `>
          `;
         restapi.appendChild(carte);
        ;
      })
      .catch(function (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la récupération des données :", error);
      });
      } 
  })();

  // malheureusement uniquement eu le temps de faire apparaitre les boutons a partir de l'api