//Gives current url parameters
//console.log(window.location.search);

//Gives current url fully
//console.log(window.location.href);

const currentURL = window.location.search;
var id = currentURL.replace("?id=", "");
console.log("id = " + id);
