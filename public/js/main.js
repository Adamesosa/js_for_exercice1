EXO 1 



for(i=1; i <= 20; i++){
    //console.log(`Tour numéro: ${i}`); 
    //console.log(`Bonjour`); 

    // methode 1 
    if(i % 2 == 0){
        console.log(`${i} est pair `);
    }else{
        console.log(`${i} est impair `); 
    }

    // methode 2 
    switch( i % 2 == 0 ){
        case true:
            console.log(`${i} est pair `);
        break;

        case false:
            console.log(`${i} est impair `);
        break;
    }

}

*/


// exo2 


/*
let classe = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"];

for(i=0; i<classe.length; i++){
    console.log(`Bonjour ${classe[i]}`);
}

*/


// exo 3 


let nombre = parseInt(prompt("Entrez un nombre? ")); 

if(!isNaN(nombre)){
    for(i=0; i<=nombre; i++){
        console.log(i);
    }
}else{
    console.log('ce n4est pas un nombre'); 
}