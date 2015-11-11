/**
 * Created by skovtun on 11.11.2015.
 */

//Определить метод assert()
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode( desc) );
    document.getElementById("results").appendChild( li );
}
