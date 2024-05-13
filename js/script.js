let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let art = document.getElementById("insert");

  fetch("https://thatsthespir.it/api")
    .then((response) => response.json())
    .then((data) => {
      let newDiv = document.createElement("div");

      let quote = data.quote;
      let author = data.author;
      let picture = data.photo;
      let ageAuthor = data.age;

      let quoteElement = document.createElement("p");
      quoteElement.textContent = `"${quote}"`;

      let authorElement = document.createElement("p");
      authorElement.textContent = `- ${author}`;

      let authorImage = document.createElement("img");
      authorImage.src = picture;
      

      fetch(`https://api.agify.io?name=${author}`)
        .then((response) => response.json())
        .then((data) => {
          let ageAuthorElement = document.createElement("p");
          ageAuthorElement.textContent = ` ${data.age} years old`;
          
          
          newDiv.appendChild(authorImage);
          newDiv.appendChild(quoteElement);
          newDiv.appendChild(authorElement);
          newDiv.appendChild(ageAuthorElement);
          
          if (art.children.length > 0) {
            art.removeChild(art.lastChild);
          }
          
          art.appendChild(newDiv);
          
        })
        .catch((error) => {
          console.log("There is an error", error);
        });
    })
    .catch((error) => {
      console.log("There is an error", error);
    });
});
