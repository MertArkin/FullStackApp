//fetch on pageload to display all the data from backend (app.js -> mysql)

//Put in window onload
const outputElement = document.getElementById("p3");
outputElement.innerHTML = "";
var displayData = "";

async function fetchContent() {
  const response = await fetch("http://localhost:3000/getcontents/");
  const video = await response.json();
  console.log(video);

  /*
  video.forEach(function (item, i) {
    for (p in item) {
      displayData += item[p] + " <br /><br />";
      console.log(p + " : " + item[p] + "\n");
    }
    console.log("\n");
    displayData += "<br />";
  });
  */

  const mapped = video.map((el) => el.embed_link);
  const mapped2 = video.map((el) => el.thumbnail);
  const mapped3 = video.map((el) => el.title);
  //console.log(mapped3[0]);

  /*
    const filtered = data.filter((el) => el.id === 4);
    const found = data.find((el) => el.id === 4);
    const mapped = data.map((el) => el.id);
    console.log(filtered);
    console.log(found);
    console.log(mapped);
    */

  /*
  mapped.forEach(function (e) {
    outputElement.innerHTML += `
      <div class="video_frame">
      <iframe
      src='${e}'
      frameborder="0"
      width= 290"
      height="150"
      scrolling="no"
      allowfullscreen>
      </iframe>
      </div>
      `;
  });

  */

  //thumbnails
  mapped2.forEach(function (e, i) {
    //console.log(e);
    //console.log(i);
    outputElement.innerHTML += `
      <div class="video_frame">
        <a href="${`videoPage.html?id=${i}`}"> <img class="videoPreview" id=${i} src=${e} alt="Thumbnail" width="312" height="175"></a>
        <p style="margin: 0;" id="videoTitle">${mapped3[i]}</p>
        <p style="color: white; margin: 5px;">- | - artist - | - owner - | -</p>
      </div>
      `;
  });

  /*
  const thumbnails = document.getElementsByClassName("video_frame");
  const isPressed = (e) => {
    console.log(e.target.id); // Get ID of Clicked Element
  };
  for (let t of thumbnails) {
    t.addEventListener("click", isPressed);
  }
  */

  /*
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
    */
}

fetchContent();

/*
//FETCH the running server link and display everything on the web page
//THE METHOD FOR SENDING BACKEND REQUESTS FROM HTML PAGE
//Do something with data
//check notes for multiple parameters on these functions
function fetchFromServer() {
  fetch("http://127.0.0.1:3000/")
    .then((response) => response.json())
    .then(
      (data) => console.log(data)

    )
    .catch((err) => console.log(err));
}
*/

var textBox = document.getElementById("textbox");
function searchResult() {
  var value = textBox.value;
  if (value == "") {
    console.log("WRONG INPUT, cant be empty");
    return;
  }
  fetch("http://localhost:3000/getmultiplecontent/" + value)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("returned search: ", data);
      /*Do something with data */
      /*check notes for multiple parameters on these functions*/
      outputElement.innerHTML = "";
      const mapped3 = data.map((el) => el.title);

      data.forEach(function (item, i) {
        //console.log(item);
        outputElement.innerHTML += `
      <div class="video_frame">
      <a href="${`video.html?id=${item.id - 1}`}"> <img id=${item.id} src=${
          item.thumbnail
        } alt="Thumbnail" width="190" height="110"></a>
        <p>${mapped3[i]}</p>
      </div>
      `;
      });
    })
    .catch(function (err) {
      console.log("error is: " + err);
    });
  //const title = video.map((el) => el.title);
  //console.log(title);

  /*
  title.forEach(function (e) {
    console.log(e);
    if (textBox.value == " ") {
      return;
    }
    if (e.includes(value)) {
      console.log(e); // true
    }
  });
  */
}

document.getElementById("searchButton").addEventListener("click", function () {
  //console.log("search button clicked");
  searchResult();
  //USE FUNCTIONS FOR MOST OF THE RENDERING !!! - 24/12/2022

  /*
  video.forEach(function (item, i) {
    for (p in item) {
      displayData += item[p] + " <br /><br />";
      console.log(p + " : " + item[p] + "\n");
    }
    console.log("\n");
    displayData += "<br />";
  });
  */

  //for demo now
  //fetchFromServer();
});
