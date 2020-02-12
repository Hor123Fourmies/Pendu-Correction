var string = "pendu blabla kayak".split(" ");

//split transforme une chaine de caractères en tableau
// chaque espace est une nouvelle entrée d'un tableau

var container = document.getElementById('flex-items');

//toutes les lettres sont membres d'un tableau
var string2 = [...string[Math.floor(Math.random()*string.length)]];

var trouve = 0;

//vérification que l'utilisateur n'entre qu'une seule lettre
//fonction fléchée (retourne soit 'vrai', soit 'faux'; vrai si===1)
const checkValid = (val)=>val.length===1;
const letterValue = ()=> document.getElementById('letter').value;

const sendLetter =
    document.getElementById('sendLetter').onclick=
        ()=> (checkValid (letterValue()))
            //if ?
        ? test (letterValue())
            //else :
        : alert('une seule lettre svp');

function test (letter) {
    var isFound = false;

    string2.forEach((item,index)=>
    {
        if (item == letter.toLowerCase())
        {
            isFound = true;
            trouve++;

            var el = document.createElement('span');
            el.innerHTML=letter;
            el.style.cssText = `order:${index}`;
            container.appendChild(el);
            delete string2[index];
        }
    });

    !isFound ? alert('pas trouvé') : alert('trouvé');

    if (trouve == string2.length){
        alert('gagné');
    }

}
