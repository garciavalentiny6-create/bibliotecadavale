const listaLivros = document.getElementById("livros");
const busca = document.getElementById("busca");
const genero = document.getElementById("genero");
const anoMin = document.getElementById("anoMin");
const anoMax = document.getElementById("anoMax");
const ordenar = document.getElementById("ordenar");
const resultado = document.getElementById("resultado");

function carregarFiltros() {
    const generos = [...new Set(livros.map(livro => livro.genero))].sort();
    const anos = [...new Set(livros.map(livro => livro.ano))].sort((a, b) => a - b);

    generos.forEach(item => {
        genero.innerHTML += `<option value="${item}">${item}</option>`;
    });

    anos.forEach(item => {
        anoMin.innerHTML += `<option value="${item}">${item}</option>`;
        anoMax.innerHTML += `<option value="${item}">${item}</option>`;
    });
}

function mostrarLivros(lista) {
    listaLivros.innerHTML = "";

    if (lista.length === 0) {
        resultado.textContent = "Nenhum livro encontrado.";
        return;
    }

    resultado.textContent = `${lista.length} livro(s) encontrado(s).`;

    lista.forEach(livro => {
        listaLivros.innerHTML += `
            <article class="col-md-6 col-lg-3">
                <div class="card h-100">
                    <img src="${livro.capa}" class="card-img-top" alt="Capa de ${livro.titulo}">

                    <div class="card-body">
                        <h2 class="h5">${livro.titulo}</h2>
                        <p class="mb-1">${livro.autor}</p>
                        <p class="mb-1">${livro.genero}</p>
                        <p class="mb-3">${livro.avaliacao.toFixed(1)} / 5</p>

                        <a href="detalhes.html?id=${livro.id}" class="btn btn-primary">
                            Ver detalhes
                        </a>
                    </div>
                </div>
            </article>
        `;
    });
}

function filtrarLivros() {
    const texto = busca.value.toLowerCase();
    const generoSelecionado = genero.value;
    const minimo = anoMin.value;
    const maximo = anoMax.value;

    let lista = livros.filter(livro => {
        const correspondeBusca =
            livro.titulo.toLowerCase().includes(texto) ||
            livro.autor.toLowerCase().includes(texto) ||
            livro.descricao.toLowerCase().includes(texto);

        const correspondeGenero =
            generoSelecionado === "todos" ||
            livro.genero === generoSelecionado;

        const correspondeAnoMinimo =
            minimo === "todos" ||
            livro.ano >= Number(minimo);

        const correspondeAnoMaximo =
            maximo === "todos" ||
            livro.ano <= Number(maximo);

        return (
            correspondeBusca &&
            correspondeGenero &&
            correspondeAnoMinimo &&
            correspondeAnoMaximo
        );
    });

    if (ordenar.value === "nome") {
        lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }

    if (ordenar.value === "ano") {
        lista.sort((a, b) => a.ano - b.ano);
    }

    if (ordenar.value === "avaliacao") {
        lista.sort((a, b) => b.avaliacao - a.avaliacao);
    }

    mostrarLivros(lista);
}

busca.addEventListener("input", filtrarLivros);
genero.addEventListener("change", filtrarLivros);
anoMin.addEventListener("change", filtrarLivros);
anoMax.addEventListener("change", filtrarLivros);
ordenar.addEventListener("change", filtrarLivros);

carregarFiltros();
mostrarLivros(livros);