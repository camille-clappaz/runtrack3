// Lorsque l’on clique sur le bouton,
// récupérer le contenu de l’élément ayant comme id “citation” et afficher le contenu dans
// la console de développement.
// La fonction de récupération et d’affichage doit se nommer “citation()”.
function citation() {
    const btn = document.querySelector("#button"); //on cible l'élément button
    const texte = document.querySelector("#citation"); // on cible l'element qui contient le texte
    btn.addEventListener("click", () => {
        console.log(texte.textContent); //on affiche dans la console le texte contenu dans la variable texte
    });
}
citation();


