//Gives current url parameters
//console.log(window.location.search);

//Gives current url fully
//console.log(window.location.href);

//gives after ?
const currentURL = window.location.search;
var id = currentURL.replace("?id=", "");
console.log("id = " + id);
//console.log(currentURL);

//DECODE COMPONENT
const encodedComponent = decodeURIComponent(id);
console.log(encodedComponent);

const str1 = encodedComponent.replaceAll("'", " ");
console.log(str1);

const result = Number(str1) + 1;

const outputElement = document.getElementById("p1");
const outputElement2 = document.getElementById("p2");
//console.log(outputElement2);
//outputElement.innerHTML = "";
//outputElement2.innerHTML = "";
var displayData = "";

async function getResults() {
  const response = await fetch("http://localhost:3000/getonecontent/" + result);

  //const response = await fetch("http://localhost:3000/getcontents/");
  const video = await response.json();
  //console.log(response);
  console.log(video);
  video.forEach(function (item, i) {
    for (p in item) {
      displayData += item[p] + " <br /><br />";
      //console.log(p + " : " + item[p] + "\n");
    }
    //console.log("\n");
    displayData += "<br />";
  });

  const mapped = video.map((el) => el.embed_link);
  //console.log(mapped.toString());

  /*
  const title = video.map((el) => el.title);
  console.log(title.toString());
  */
  //outputElement.innerHTML += displayData;

  mapped.forEach(function (e) {
    outputElement2.innerHTML += `
    <div class="video_frame">
    <iframe
    src='${e}'
    frameborder="0"
    width="330"
    height="180"
    scrolling="no"
    allowfullscreen>
    </iframe>
    </div>
    `;
  });

  /*outputElement2.innerHTML += `
  <div class="video_frame">
  <iframe
  src='${mapped.toString()}'
  frameborder="0"
  width="560"
  height="315"
  scrolling="no"
  allowfullscreen>
  </iframe>
  </div>
  </div>
  `;
  */
}

/*
    .then((response) => await response.json())
    .then((data) => {
      data;
    });
  console.log(data);

}
  */

getResults();

/*
    data.forEach(function (item, i) {
      for (p in item) {
        displayData += p + " : " + item[p] + " <br />";
        console.log(p + " : " + item[p]);
      }
      displayData += "<br />";
    });
    outputElement.innerHTML += displayData;
  })
  .catch((err) => console.log(err));
  */
