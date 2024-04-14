//alert("Bonjour");
//let monPrenom=prompt('Quel est votre prenom ?')
//alert(monPrenom);

// Demande à l'utilisateur d'entrer une somme inférieure à 200€
//let montant = parseInt(prompt("Entrez une somme entière inférieure à 200€ :"));

// Vérifie si la somme est valide
//if (!isNaN(montant) && montant > 0 && montant < 200) {
    // Calcul du nombre de billets de 50€
    //let billet50 = Math.floor(montant / 50);
    // Calcul de la somme restante après avoir utilisé les billets de 50€
    //let reste = montant % 50;
    
    // Calcul du nombre de billets de 20€
   // let billet20 = Math.floor(reste / 20);
    // Calcul de la somme restante après avoir utilisé les billets de 20€
   // reste = reste % 20;
    
    // Calcul du nombre de billets de 10€
    //let billet10= Math.floor(reste / 10);
    // Calcul de la somme restante après avoir utilisé les billets de 10€
    //reste = reste % 10;
    //let billet5= Math.floor(reste / 5);
    // Calcul de la somme restante après avoir utilisé les billets de 10€
   // reste = reste % 5;
    //let piece2 = Math.floor(reste / 2);
    // Calcul de la somme restante après avoir utilisé les billets de 10€
   // reste = reste % 2;
   // let piece1 = Math.floor(reste / 1);
    // Calcul de la somme restante après avoir utilisé les billets de 10€
    //reste = reste % 1;

   // alert(montant + "€ représente " + billet50 + " billet(s) de 50€, " + billet20 + " billet(s) de 20€, " + billet10 + " billet(s) de 10€ , " + billet5 + "billets(s) de 5€ pièces,"+piece2+"  pièces de 2€,"+reste+" pièces de 1€");
 //else {
    // Si la somme n'est pas valide, affiche un message d'erreur
    //alert("La somme entrée n'est pas valide. Veuillez entrer une somme entière inférieure à 200€.");
//}
/*let age = parseInt(prompt("Veuillez entrer un age :"));

if (!isNaN(age) && age >=9 && age <=10) {
    alert("Vous aller jouer en catégorie: Poussin ")
}

if (!isNaN(age) && age >=11 && age <=12) {
    alert("Vous aller jouer en  catégorie :Benjamin")
}
if (!isNaN(age) && age >=13 && age <=14) {
    alert("Vous aller jouer en catégorie : Minime")
}

if (!isNaN(age) && age >=15 && age <=17) {
    alert("Vous aller jouer en catégorie : cadet")
}

if (!isNaN(age) && age >=18 && age <=20) {
    alert("Vous aller jouer en  catégorie :Junior ")
}
if (!isNaN(age) && age >=21 ) {
    alert("Vous aller jouer en  catégorie : Sénior")
}

else {
    alert("Vous n'appartenez pas à une de ces catégories")
}
*/
/*let max=20
let t=Math.round(Math.random() * max);




let i=0
while (i!==4)  {
    let number=parseInt(prompt("Veuillez entrer un nombre:"))

                             
   if (number>t) {
    alert("Le nombre saisi est trop grand")
    
   
    
   }

   else if (number<t) {
    alert("Le nombre saisi est trop petit")
    
    
  }
  i++
  if (number==t){
    break
  }
    } */


/*let montantSaisie = prompt('Entrer votre montant','');
let montant = parseFloat(montantSaisie);


let coupures=[500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05]

let nbrBillet = Math.floor(montant/coupure[i]);
montant -= nbrBillet *coupure[i];
if( nbrBillet50 >0) {
	resultat += nbrBillet+' x coupure[i] 
}

alert(resultat)*/




function maFonctionAvecArg()
{ 
    let montant=parseFloat(prompt("Veuillez entrer le montant:"))
   
    let d=prompt("Veuillez entrer la devise")
    if (d==="euro")  { 
    
    
    let coupure=[500, 200, 100, 50 ,20, 10, 5, 2 ,1];
    for (let i=0;i<=coupure.length;i++)
    {
     let nbrBillet = Math.floor(montant/coupure[i]);
    
    if( nbrBillet >0) {
    montant -= nbrBillet *coupure[i];
    resultat += nbrBillet+' x '+coupure[i]+d ; 


    alert(resultat);
}

}
}
	}

    maFonctionAvecArg()
    	/*alert('votre montant est:'+ montant+  d );
    let resultat = montant + d +'représente ';
    let nbrBillet50 = Math.floor(montant/50);
    montant -= nbrBillet50*50;
    let nbrBillet20 = Math.floor(montant/20);
    montant -= nbrBillet20*20;
    let nbrBillet10 = Math.floor(montant/10);
    montant -= nbrBillet10*10;
    let nbrBillet5 = Math.floor(montant/5);
    montant -= nbrBillet5*5;
    let nbrPièce2 = Math.floor(montant/2);
    montant -= nbrPièce2*2;
    let nbrPièce1 = Math.floor(montant/1);
    montant -= nbrPièce1*1;


if (nbrBillet50 > 0)
    resultat += nbrBillet50 + ' x 50' + d + '\n';
if (nbrBillet20 > 0)
    resultat += nbrBillet20 + ' x 20' + d + '\n';
if (nbrBillet10 > 0)
    resultat += nbrBillet10 + ' x 10' + d + '\n';
if (nbrBillet5 > 0)
    resultat += nbrBillet5 + ' x 5' + d + '\n';
if (nbrPièce2 > 0)
    resultat += nbrPièce2 + ' x 2' + d + '\n';
if (nbrPièce1 > 0)
    resultat += nbrPièce1 + ' x 1' + d + '\n';

alert(resultat);
}

}
maFonctionAvecArg();






// Billets et pièces en dollars
const billetsEtPiecesDollars = [
    50 ,20,10,5,2,1
    
];

// Billets et pièces en euros
const billetsEtPiecesEuros = [500, 200, 100, 50 ,20, 10, 5, 2 ,1]


let montant=parseFloat(prompt("Veuillez entrer le montant:"))
   
let d=prompt("Veuillez entrer la devise")
  


// Billets et pièces en dollars
const billetsEtPiecesDollars = [
    50 ,20,10,5,2,1
    
];

// Billets et pièces en euros
const billetsEtPiecesEuros = [500, 200, 100, 50 ,20, 10, 5, 2 ,1]

let nbrBillet = Math.floor(montant/coupure[i]);
montant -= nbrBillet *coupure[i];
if( nbrBillet50 >0) {
	resultat += nbrBillet+' x coupure[i] */
