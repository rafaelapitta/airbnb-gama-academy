// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

fetch(API_URL)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result);

        data.map(element => {
            console.log("nome " + JSON.stringify(data))
                // Foto, tipo, nome e preço da propriedade.
            const { photo, property_type, name, price } = element;

            // Linha do container onde serão exibidos os cards.
            row = document.getElementById("row");

            // Criar um elemento "div" com a class "col-md-4" do Bootstrap.
            div = document.createElement("div");
            div.className = "col-md-4";

            // Criar a "div" do card a ser exibido. Atribuir class "card mb-4 box-shadow".
            card = document.createElement("div");
            card.className = "card mb-4 box-shadow"


            // Elemento "img" + class como "card-img-top";
            image = document.createElement("img")
            image.className = "card-img-top";
            image.src = photo;

            // Atribua a class "card-body" do Bootstrap
            cardBody = document.createElement("card");
            cardBody.className = "card-body";

            // Atribuir a class "card-text" do Bootstrap!
            cardText = document.createElement("div");
            cardText.className = ("card-text");

            // Listagem nome, preço, tipo
            propertyType = document.createElement("p");
            propertyType.className = "property-type";
            propertyType.innerHTML = property_type;

            propertyName = document.createElement("p");
            propertyName.className = "property-name";
            propertyName.innerHTML = name;

            propertyPrice = document.createElement("p");
            propertyPrice.className = "property-price";
            propertyPrice.innerHTML = 'R$ ' + price.toFixed(2);


            row.appendChild(div);
            div.appendChild(card);
            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardText);
            cardText.appendChild(propertyType);
            cardText.appendChild(propertyName);
            cardText.appendChild(propertyPrice);
        });
    });