
function premier(nb) {
    for (var i = 2; i < nb; i++)
        if (nb % i === 0) return false;
    return true;
}

function sommenombrespremiers(nb1, nb2) {
    if (premier(nb1) == true && premier(nb2) == true) {
        return console.log(nb1 + nb2);
    }
    else { return console.log(false) }
}
sommenombrespremiers(9, 13);