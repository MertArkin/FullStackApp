function getAllData() {
  fetch("https://api.github.com/users/manishmshiva")
    // Convert the response to JSON format
    .then((response) => response.json())
    // Use the JSON data to update the page
    .then((data) => {
      // Get the element where the data will be displayed
      const outputElement = document.getElementById("p1");
      //console.log(data);

      //For clearing the lorep ipsum text to check sizizing screen el
      outputElement.innerHTML = "";

      let stringified = JSON.stringify(data);
      let parsed = JSON.parse(stringified);

      console.log(parsed);

      for (let i in parsed) {
        let text = i + " : " + parsed[i] + "<br /><br />";
        //console.log(text);
        //a = text.trim().split(/\s+/);
        //console.log(a);
        outputElement.innerHTML += text;
      }
      //var formattedString = arr.map(obj => Object.values(obj) +);
      //console.log(formattedString);//.split(",").join("<br />")
      //outputElement.innerHTML +=formattedString;
      //console.log(JSON.stringify(data, undefined, 2));

      //or(let i = 0; i < )
      // Update the element's content with the JSON data
      //outputElement.innerHTML = JSON.stringify(data);
    });
}

/*
fetch("https://reqres.in/api/users")
.then(res => {
  return res.json();
})
.then(json => {
  console.log(json.data);

  const outputElement = document.getElementById('p1');
  // Update the element's content with the JSON data
  outputElement.innerHTML = JSON.stringify(json.data);
});
*/

function getSingleData() {
  fetch("https://api.github.com/users/manishmshiva")
    // Convert the response to JSON format
    .then((response) => response.json())
    // Use the JSON data to update the page
    .then((data) => {
      // Get the element where the data will be displayed
      const outputElement = document.getElementById("p1");
      //console.log(data);

      //For clearing the lorep ipsum text to check sizizing screen el

      let stringified = JSON.stringify(data);
      let parsed = JSON.parse(stringified);
      console.log(parsed);

      //only outputting th ids to the content website so that the user can see
      /*
      for (let i in parsed) {
        outputElement.innerHTML += i + "<br />";
        //console.log(parsed[i]);
        //a = text.trim().split(/\s+/);
        //console.log(a);
      }
      */

      //console.log(parsed);

      var textBox = document.getElementById("textbox");

      //First steps i used this one !
      /*
      if (textBox.value != "") {
        //perform task
        /*
        let entries = Object.entries(parsed);
        let data = entries.map(([key, val] = entry) => {
          console.log("The " + key + " is " + val);
        });
        let value = textBox.value;
        //console.log(parsed.login);
        console.log(parsed[value]);
      }
      */

      if (textBox.value == "") {
        return;
      }

      //perfect working to check if existing value exists in fetched keys !!! but maybe look for replacement keys function
      let value = textBox.value;
      if (parsed.hasOwnProperty(value) == true) {
        //console.log("yes");
        console.log(parsed[value]);
        outputElement.innerHTML = "";

        //and we dispay it at
        const outputElement2 = document.getElementById("p2");
        outputElement2.innerHTML = parsed[value];
      } else {
        console.log("no");
      }

      /*
      Object.entries(parsed).forEach(([key]) => {
        console.log(key);
      });
      */
    });
}

//getAllData();

document.getElementById("button1").addEventListener("click", function () {
  fetchFromServer();
  console.log("fetch button cicked");
});

//FETCH the running server link and display everything on the web page

//THE METHOD FOR SENDING BACKEND REQUESTS FROM HTML PAGE

const time = new Date().toLocaleDateString();
console.log("The day is: " + time);

function fetchFromServer() {
  fetch("http://127.0.0.1:3000/test")
    .then((response) => response.json())
    .then((data) => console.log(data) /*Do something with data */)
    .catch((err) => console.log(err));
}

//document.getElementById("button2").addEventListener("click", getSingleData);

/*





*/

/**
 all content --> ./
 filter(s) on page will work by sending --> (whatever filter) from form and submit
 will be catched by backend (/(filter)) --> (process within mysql) return a response 
 and that is what we need to fetch back again by using .then and display on html page

https://reqres.in/api/users

 */
