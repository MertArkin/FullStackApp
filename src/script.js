//fetch on pageload to display all the data from backend (app.js -> mysql)

//Put in window onload
const outputElement = document.getElementById("p1");
outputElement.innerHTML = "";
var displayData = "";

fetch("http://localhost:3000/getcontents")
  .then((response) => response.json())
  .then((data) => {
    /*Do something with data */
    console.log(data);

    /*
    const filtered = data.filter((el) => el.id === 4);
    const found = data.find((el) => el.id === 4);
    const mapped = data.map((el) => el.id);
    console.log(filtered);
    console.log(found);
    console.log(mapped);
    */

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    data.forEach(function (item, i) {
      //console.log("item= " + item + " p= " + i);
      for (p in item) {
        displayData += p + " : " + item[p] + " <br />";
        console.log(p + " : " + item[p]);
      }
      displayData += "<br />";
    });
    //console.log(displayData);

    // = or += ??
    outputElement.innerHTML += displayData;
  })
  .catch((err) => console.log(err));

//FETCH the running server link and display everything on the web page
//THE METHOD FOR SENDING BACKEND REQUESTS FROM HTML PAGE
function fetchFromServer() {
  fetch("http://127.0.0.1:3000/")
    .then((response) => response.json())
    .then(
      (data) => console.log(data)
      /*Do something with data */
      /*check notes for multiple parameters on these functions*/
    )
    .catch((err) => console.log(err));
}

document.getElementById("searchButton").addEventListener("click", function () {
  console.log("search button clicked");

  //for demo now
  //fetchFromServer();
});
