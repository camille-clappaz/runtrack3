document.addEventListener('DOMContentLoaded', () => {

    // Lorsque l’on clique sur le bouton, un <article> contenant le texte suivant est ajouté au contenu
    // de la page : “L'important n'est pas la chute, mais l'atterrissage.”
    // Si on clique à nouveau sur ce bouton, l’article disparaît.
    // L’apparition / Disparition doivent être gérées dans une fonction nommée “showhide()”.
    const btn = document.getElementById("button");
    const article = document.createElement("article");
    article.textContent = "L'importance n'est pas la chute, mais l'atterisage.";

    function showHide(){
                const body = document.querySelector("body");
                body.appendChild(article);
                if(article.style.display === "none"){
                    article.style.display = "block";
                }else{
                    article.style.display = "none";
                }
            }
    btn.addEventListener("click", showHide); // attention dans le listener quand on appelle la fonction on ne met pas () !!!!!!

})

