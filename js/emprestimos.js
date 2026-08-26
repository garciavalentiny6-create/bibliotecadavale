const lista = document.getElementById("lista");

let livrosSelecionados =
    JSON.parse(localStorage.getItem("listaLivros")) || [];

function salvarLista() {
    localStorage.setItem(
        "listaLivros",
        JSON.stringify(livrosSelecionados)
    );
}

function mostrarLista() {
    lista.innerHTML = "";

    if (livrosSelecionados.length === 0) {
        lista.innerHTML = "<p>Sua lista está vazia.</p>";
        return;
    }

    livrosSelecionados.forEach(item => {
        const livro =
            livros.find(livro => livro.id === item.id);

        if (!livro) {
            return;
        }

        lista.innerHTML += `
            <article class="card mb-3 p-3">
                <section class="row align-items-center">

                    <div class="col-md-2 text-center">
                        <img
                            src="${livro.capa}"
                            alt="Capa de ${livro.titulo}"
                            class="img-fluid"
                        >
                    </div>

                    <div class="col-md-6">
                        <h2 class="h5">${livro.titulo}</h2>
                        <p>${livro.autor}</p>
                        <p>Quantidade: ${item.quantidade}</p>
                    </div>

                    <div class="col-md-4 text-md-end">

                        <button
                            onclick="diminuir(${livro.id})"
                            class="btn btn-outline-secondary"
                        >
                            -
                        </button>

                        <button
                            onclick="aumentar(${livro.id})"
                            class="btn btn-outline-secondary"
                        >
                            +
                        </button>

                        <button
                            onclick="remover(${livro.id})"
                            class="btn btn-danger"
                        >
                            Remover
                        </button>

                    </div>

                </section>
            </article>
        `;
    });
}

function aumentar(id) {
    const item =
        livrosSelecionados.find(livro => livro.id === id);

    if (!item) {
        return;
    }

    item.quantidade++;

    salvarLista();
    mostrarLista();
}

function diminuir(id) {
    const item =
        livrosSelecionados.find(livro => livro.id === id);

    if (!item) {
        return;
    }

    if (item.quantidade > 1) {
        item.quantidade--;
    } else {
        livrosSelecionados =
            livrosSelecionados.filter(
                livro => livro.id !== id
            );
    }

    salvarLista();
    mostrarLista();
}

function remover(id) {
    livrosSelecionados =
        livrosSelecionados.filter(
            livro => livro.id !== id
        );

    salvarLista();
    mostrarLista();
}

function verificarCodigo() {
    const campoCodigo =
        document.getElementById("codigo");

    const mensagem =
        document.getElementById("mensagem");

    const codigo =
        campoCodigo.value.trim().toUpperCase();

    if (codigo === "") {
        mensagem.textContent = "Digite um código.";
        return;
    }

    if (codigo === "LEITOR10") {
        mensagem.textContent =
            "Código válido! Você recebeu prioridade na fila de espera.";

        campoCodigo.value = "";
        return;
    }

    mensagem.textContent = "Código inválido.";
}

mostrarLista();
