var heading1 = document.createElement( "h1" );
var text = document.createTextNode ("this is heading");
heading1.appendChild(text);

var my_div = document.getElementsByClassName("my_div")[0];

my_div.appendChild(heading1);