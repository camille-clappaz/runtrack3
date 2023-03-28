// Créez un <textarea> dont l’id est “keylogger”.
// Chaque fois que l’utilisateur tape une lettre sur son clavier (a-z), celle-ci est ajoutée
// dans le textarea (même si le focus en cours n’est pas le textarea).
// Si le focus en cours est dans le textarea, la lettre doit être ajoutée deux fois.


const body = document.querySelector("body");
const textarea = document.getElementById("keylogger");

function addLetter(event) {
    const nomTouche = event.key;
    if (/^[a-zA-Z]$/.test(event.key)) { 
        if (document.activeElement === textarea) {
            textarea.textContent = textarea.textContent + nomTouche;
        }
        else {
            textarea.textContent = textarea.textContent + nomTouche.repeat(2);
        }
    }
}
document.addEventListener('keypress', addLetter); // Quand on appuie sur le clavier, ça appelle la fonction