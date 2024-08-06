require('dotenv').config()
const btnI = document.querySelector(".btn");
const ipBox = document.querySelector(".input-box");
const apikey = process.env.URI;
const apiUrl = "http://www.omdbapi.com/";
const fetchData = async (movie) => {
  try {
    const response = await fetch(`${apiUrl}?t=${movie}&apikey=${apikey}`);
    let data = await response.json();

    let imge = document.createElement("img");
    imge.src = data.Poster;

    let para = document.createElement("p");
    para.innerHTML = `${data.Title} : ${data.Released} ; Rating : ${data.imdbRating}`;

    let button = document.createElement("button");
    button.innerHTML = "More Info";
    let div = document.createElement("div");
    div.className = "movie-item";
    div.appendChild(imge);
    div.appendChild(para);
    div.appendChild(button);

    button.addEventListener("click", () => {
      div.removeChild(button);
      let para2 = document.createElement("p");
      para2.innerHTML = `${data.Plot} <br>
            <b style="color: #323232"> Directed by: </b> ${data.Director}`;
      let para3 = document.createElement("p");
      para3.innerHTML = `<b style="color: #323232"> Cast: </b> ${data.Actors}`;
      console.log(data);
      let moreInfoDiv = document.createElement("div");
      moreInfoDiv.className = "more-info";
      moreInfoDiv.appendChild(para2);
      moreInfoDiv.appendChild(para3);
      div.appendChild(moreInfoDiv);
    });
    const itemStorage = document.querySelector("#item-storage");
    itemStorage.insertBefore(div, itemStorage.firstChild);
    
  } catch (err) {
    console.error(`Error encountered ${err}`);
  }
  ipBox.value = "";
};
btnI.addEventListener("click", () => {
  const movie = ipBox.value;
  if (movie) {
    fetchData(movie);
  } else {
    console.log("No movie found");
  }
});


