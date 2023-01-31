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

/*
const str1 = encodedComponent.replaceAll("'", " ");
console.log(str1);
*/

const result = Number(encodedComponent) + 1;

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

  const mapped2 = video.map((el) => el.title);
  console.log(mapped2.toString());

  /*
  const title = video.map((el) => el.title);
  console.log(title.toString());
  */
  //outputElement.innerHTML += displayData;

  mapped.forEach(function (e) {
    var randomMoment = Math.floor(Math.random() * 100) + 1;
    outputElement2.innerHTML += `
    <div class="video_frame">
    <p id="pageTitle">${mapped2.toString()}</p>
    <p id="quality">1080p</p>
    <p id="duration">14 min</p>
    <div class="menu">
      <p>Artist<p>
      <p>Owner</p>
    </div>
    <iframe id="video"
    src='${e}'
    frameborder="0"
    width="580"
    height="350"
    scrolling="no"
    allowfullscreen>
    </iframe>
    </div>
    `;

    const videoPreview = document.querySelector(`#${i}`);

    videoPreview.addEventListener("mouseenter", function () {
      const video = document.createElement("video");
      video.src = e;
      video.style.display = "none";
      document.body.appendChild(video);
      const randomTime = Math.random() * video.duration;
      video.currentTime = randomTime;
      video.play();
      videoPreview.src = video.poster;
    });

    videoPreview.addEventListener("mouseleave", function () {
      const video = document.querySelector("video");
      video.pause();
      video.remove();
    });
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
