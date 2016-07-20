/*jshint multistr:true */

var text = "hi my name is Divya. Divya did this homework at brian's house on friday. but codeacademy did not save Divya's homework for some reason. now Divya has to do this excercise again. Divya must be so exhausted."

var myName = "divya";
var hits=[];

for (var i=0; i<=text.length; i++) {
    if(text[i] === "D"){
        for (var j=i; j < myName.length+i; j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found");
}
else {
    console.log(hits);
}
