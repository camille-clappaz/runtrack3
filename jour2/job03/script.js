// Créez une balise <button> ayant comme id “button”.
// Créez une balise <p> ayant comme id “compteur” et contenant “0”.
// Ce contenu doit évoluer proportionnellement au nombre d'événements click reçu par le
// bouton
// ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre html.
// La fonction permettant d’effectuer la modification doit s'appeler “addone()”.

const btn=document.querySelector("#button");
const p=document.getElementById("compteur");
function addone(){
    p.textContent++;
    console.log("click"); // affiche un compteur de click qui s'incrémente dans la console
    console.log(p.content); // affiche 1, puis 2 etc...
}
btn.addEventListener("click", addone);

