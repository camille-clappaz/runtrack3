let images = $('.ordonné').find("img");

$("#melange").on("click", function () {
    images.sort(() => Math.random() - 0.5);
    $('.ordonné').append(images);
})

for (let i = 1; i <= 6; i++) {
    const img = $(`#${i}`); // si je ne crée pas cette variable, append ne comprend pas (`#${i}`)
    img.on("click", () => {
        $(".jeu").append(img); 
    });
}

// const images = [];
// images.push(img);
// console.log(images);

// IDEE 1:creer un exemple dans une div exemple pour pouvoir comparer avec ma div 2
// IDEE 2: creer une grosse div avec 6 div dedans, comparer l'id de l'image avec l'id de la div. Du coup img.id1 == div.id1

