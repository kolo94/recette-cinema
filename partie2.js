let recetteTotal = 0;
for ( let age= 11; age <= 20; age++)  {
    let prix;
    if( age<16) {
        prix =1500;
    } else {
        prix = 2500;
    }
    if ( age>= 18) {
        prix-=500
    }
    console.log ('age : ${age} ans -prix apres reduction : ${prix} FCFA');
    recetteTotale += prix;
}
console.log(" --- BILANPARTIE2 ---");
console.log ("recette totale apres reduction :";recetteTotal, "FCFA");
    
    
