// fetch ('pokemon.json') //recupere un fichier json, ou même texte.
// .then(res => res.json())
// .then((data) => data.forEach(element => {
//     console.log(element.type[0])

//     if (element.type[1]){
//         console.log(element.type[1])

//     }
// })) // test pour récupérer les types.

// Créez un formulaire permettant de trier ces données.
// Il doit contenir les champs suivants :
// ● id (input type text),
// ● nom (input type text),
// ● type (liste déroulante <select>)
// ● filtrer (input type button).
// Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du
// fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une
// page HTML.


async function getPokemon() {
    let request = await fetch('pokemon.json'); // on récupère le fichier json, et on affiche l'objet response
    //    console.log(request);
    let response = await request.json(); // permet d'avoir directement le data présent dans les then qu'on faisait précedemment.
    // console.log(response);
    return response;
}
// getPokemon();


const filter = document.getElementById("button");

filter.addEventListener("click", async () => {
    const id = document.getElementById("id");
    const nom = document.getElementById("nom");
    const type = document.getElementById("type");
    let idValue = id.value;
    let nomValue = nom.value;
    let typeValue = type.value; // récupère les valeurs du formulaire.
    let pokemons = await getPokemon();
    // result = pokemons.filter(function(pokemon){
    //     console.log(pokemon.name.french);
    // });
    // console.log(result);
    pokemons.forEach(pokemon => {
        if (idValue == pokemon.id) {
            let p = document.createElement("p");
            p.textContent = "id: " + pokemon.id+ " = " + pokemon.name.french;
            filter.after(p);
            // console.log(pokemon.name.french); // recupere tout les id 
        }
        if (nomValue == pokemon.name.french) {
            let p = document.createElement("p");
            p.textContent = pokemon.name.french;
            filter.after(p);
        }
        if (typeValue == pokemon.type[0]) {
            let p = document.createElement("p");
            p.textContent = pokemon;
            filter.after(p);
        }
        // console.log(pokemon);

    });






    // console.log(idValue, nomValue, typeValue, pokemon);
})







