let cardContainer = document.querySelector(".card-container");
let dados = [];

async function buscarDados() {
    if (dados.length === 0) {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
    }
}

async function iniciarBusca(){
    await buscarDados();
    const termoBusca = document.getElementById('campo-busca').value.toLowerCase();

    const resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCads(resultados);
}

function renderizarCads(cardsParaRenderizar){
    cardContainer.innerHTML = '';
    for(let dado of cardsParaRenderizar){
        let article = document.createElement("article");
        article.classList.add("Card"); // Corrigido para corresponder ao CSS e exemplos comentados
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Ver mais</a>
        `
        cardContainer.appendChild(article);
    }
}