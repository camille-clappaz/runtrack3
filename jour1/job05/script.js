function afficherjourssemaines(jourssemaines) {
    // let jourssemaines = new Array();
    // tab[0] = "Lundi";
    // tab[1] = "Mardi";
    // tab[2] = "Mercredi";
    // tab[3] = "Jeudi";
    // tab[4] = "Vendredi";
    // tab[5] = "Samedi";
    // tab[6] = "Dimanche";
   
    for (let i = 0; i < longueur; i++) {
        console.table(tab[i]);
    }
};


// afficherjourssemaines(jourssemaines);
let tab=new Array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche");
let longueur = tab.length;

afficherjourssemaines(tab);