async function fetchdata() {
    var foods = await fetch("https://api.thedogapi.com/v1/breeds");
    var dogs = await foods.json();
    data(dogs);
}
function data(dogs) {
    var res = document.createElement("div");
    dogs.forEach((dogde) => {
        var dogdeContainer = document.createElement("div");
        dogdeContainer.className = "container";
        dogdeContainer.innerHTML = `
      <div>
      <img src="${dogde.image.url}" class="image"><br>
      <h1>  ${dogde.name}</h1><br>
      <div><span><b>Breed-Group  :</b> </span> ${dogde.breed_group}</div><br>
      <div><span><b>Life-Span  :</b> </span>  ${dogde.life_span}</div><br>
      <div><span><b>Bred-For : </b></span> ${dogde.bred_for}</div><br>
      
    `;
        res.append(dogdeContainer);
    });
    document.body.append(res);
}
fetchdata();