let images = $('.ordonné').find("img");
$("#melange").on("click", function () {
    images.sort(() => Math.random() - 0.5);
    $('.ordonné').append(images);
})

for(let i =1; i <= 6; i++){
    let img= $(`#${i}`); // si je ne crée pas cette variable, append ne comprend pas (`#${i}`)
    img.on("click", () => {
        $(".jeu").append(img);
        for(let j =1; j <= 6; j++){
            if (img == $(`#${j}`)){
                console.log("image bonne place");
            }

        }
    });
}

