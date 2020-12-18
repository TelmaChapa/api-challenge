let randomNum = Math.floor(Math.random() * Math.floor(500))
let baseURL = `https://picsum.photos/id/${randomNum}/info`
fetch(baseURL)
    .then(function (result) {
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    });

function displayResults(photos) {
    let firstPic = photos.download_url;
    console.log(firstPic);
    let image = document.querySelector("img");
    image.src = firstPic;
    let author = photos.author;
    console.log(author);
    let heading = document.createElement('h2');
    heading.textContent = author;
    let div = document.getElementById("photos");
    div.appendChild(heading);
}

//Hover cursor over photo for filter effect.

