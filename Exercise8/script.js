//--test1 succedded-----
//--test2 Succedded-----
var output = document.getElementById('output');
var x= prompt("Enter a number of counts to loop");

while (Number.isNaN(parseInt(x))) {
//while (isNaN(x)) {
  alert("Please Enter a valid and positive numbers only.");
  x= prompt("Enter a number of counts to loop");
}

if (x>=0){
  var i=0
  do {
    output.innerHTML += "count " + i + "<br>";
    i++;
  }
  while (i<x);
}
