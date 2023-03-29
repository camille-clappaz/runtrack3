// Créez une balise <button> et sélectionnez-la dans votre code JavaScript.
// En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page HTML :
// “Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit,
// ensuite on prie.”
// Ensuite créez un bouton qui servira à cacher tout l’élément html.
$("#button").on("click", ()=>{
    $( "#button" ).after( "<p>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.</p>" );
    
})
$("#button").after("<button id='click2'>CLICK 2</button>");
$("#click2").on("click", ()=>{
    $("html").hide();
})