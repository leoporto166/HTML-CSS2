// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.getElementById("app");


let posts = [];

function nutriApp(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((response) => response.json())
    .then((json) =>{
        posts = json;

        posts.map((item) =>{
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElemnent = document.createElement("p");

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            imgElement.src = item.capa
            liElement.appendChild(imgElement)

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElemnent.appendChild(descriptionText)
            liElement.appendChild(descriptionElemnent)

            listElement.appendChild(liElement)
        })
    })
    .catch(() => {
        console.log("DEU ALGUM ERRO")
    })
}

nutriApp();