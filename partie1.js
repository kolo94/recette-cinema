const prix1 = 1500;
const prix2 = 2500;
let billets1500 = 0;
let billets2500 = 0;
let recette = 0;
let age = 11
do { 
    let prix;
    if ( age < 16) { prix = prix1;
        billets1500++;
        console.log( "age : "+ age+" ans");
        console.log( "prix : "+ prix1+" FCFA ") 
    } else {
        prix = prix2;
console.log( "age : "+age+" ans");
console.log(" prix : "+prix2" FCFAA);
    }
        billets2500++;
    }
console .log ( "age: "+age+" ans - prix : "+prix+" FCFA");
recetteTotale = recetteTotale + prix;
 } while ( age <= 20);
console.log("-----------"),
recetteTotal = ( billets1500 * prix) + ( billets2500 * prix);
console.log("recette Totale est : " + recetteTotal+" FCfA ");
console.log(" nombre de billets vendus a 1500 : " + billets1500+" billet ")
console.log(" nombre de billets vendus a 2500 : " + billets2500+" billets ")