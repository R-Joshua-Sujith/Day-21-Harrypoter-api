const getData = function () {
    for (let i = 0; i < 16; i++) {
        fetch(`https://hp-api.onrender.com/api/characters`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                const characters = document.querySelector("#characters");

                const character = document.createElement("div");
                character.classList.add("product");
                const img = document.createElement("img");
                img.classList.add("image");
                img.src = data[i].image;
                const title = document.createElement("h1");
                title.innerText = data[i].name;
                const house = document.createElement("h4");
                house.innerText = `House:${data[i].house}`;
                const category = document.createElement("h4");
                category.innerText = `Wizard:${data[i].wizard}`;
                character.appendChild(img);
                character.appendChild(title);
                character.appendChild(category);

                character.appendChild(house);



                characters.appendChild(character);
                console.log(data);


            })
    }
}

getData();