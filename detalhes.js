const detalhes = document.getElementById("detalhes");

const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

const livro = livros.find(item => item.id === id);

if (!livro) {
    detalhes.innerHTML = `
        <section class="text-center">
            <h2>Livro não encontrado</h2>
            <p>O livro que você tentou acessar não existe.</p>

            <a href="catalogo.html" class="btn btn-primary">
                Voltar ao catálogo
            </a>
        </section>
    `;
} else {
    detalhes.innerHTML = `
        <section class="row justify-content-center align-items-center g-5">

            <article class="col-md-4 text-center">
                <img
                    src="${livro.capa}"
                    alt="Capa de ${livro.titulo}"
                    class="img-fluid rounded"
                >
            </article>

            <article class="col-md-6">
                <h2>${livro.titulo}</h2>

                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><strong>Gênero:</strong> ${livro.genero}</p>
                <p><strong>Ano:</strong> ${livro.ano}</p>
                <p><strong>Avaliação:</strong> ${livro.avaliacao.toFixed(1)} / 5</p>

                <hr>

                <h3>Sinopse</h3>
                <p>${livro.sinopse}</p>

                <button onclick="adicionarLivro()" class="btn btn-primary">
                    Adicionar à minha lista
                </button>
            </article>

        </section>
    `;
}

function adicionarLivro() {
    if (!livro) {
        return;
    }

    let lista = JSON.parse(localStorage.getItem("listaLivros")) || [];

    const existente = lista.find(item => item.id === livro.id);

    if (existente) {
        existente.quantidade++;
    } else {
        lista.push({
            id: livro.id,
            quantidade: 1
        });
    }

    localStorage.setItem("listaLivros", JSON.stringify(lista));

    alert("Livro adicionado à sua lista!");
}