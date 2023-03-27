function jourtravaille(date) {
    let jf = new Date(2020, 0, 1);
    let jf1 = new Date(2020, 3, 13);
    let jf2 = new Date(2020, 4, 1);
    let jf3 = new Date(2020, 4, 8);
    let jf4 = new Date(2020, 4, 21);
    let jf5 = new Date(2020, 5, 1);
    let jf6 = new Date(2020, 6, 14);
    let jf7 = new Date(2020, 7, 15);
    let jf8 = new Date(2020, 10, 1);
    let jf9 = new Date(2020, 10, 11);
    let jf10 = new Date(2020, 11, 25);
    let jourferries = new Array(jf, jf1, jf2, jf3, jf4, jf5, jf6, jf7, jf8, jf9, jf10);
    let longueur = jourferries.length;


    for (i = 0; i < longueur; i++) {
        let dateLocale = date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        if (date.getTime() == jourferries[i].getTime()) {
            console.log("Le " + dateLocale + " est un jour férié");
        }
        else if (date.getDay() == 6 || jourferries[i].getDay == 0) {
            console.log("Non, le " + dateLocale + " est un week-end");
        }
        else{
            console.log("Oui, le " + dateLocale + " est un jour travaillé");
        }
    }
};
let date = new Date(2020, 1, 19);
jourtravaille(date);

