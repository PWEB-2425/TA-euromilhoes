
function gerador(k,max) {
    const osnumeros = [];

    while (osnumeros.length < k) {
        let novonumero = Math.floor(Math.random() * max) + 1;
        if (osnumeros.includes(novonumero) === false) {
            osnumeros.push(novonumero)
        }
    }
    console.log(osnumeros);
    return osnumeros;

/*
    for (let i = 0; i < 5; i++) {
        let novonumero = Math.floor(Math.random() * 50) + 1;
        console.log("gerei ", novonumero);
    }
*/
}

function mostrachave(achave) {
    mostranumeros(achave.numeros);
    mostraestrelas(achave.estrelas);
}

function mostranumeros(anumeros) {
    // selecionar a lista de numeros
    const listanumeros = document.querySelector("div.numeros ul");
    console.log(listanumeros);
    listanumeros.innerHTML = "";
    //percorrer os anumeros
    anumeros.forEach(element => {
        console.log(element);
        // criar um li
        let novoli = document.createElement("li");
        novoli.innerHTML = element;
        listanumeros.appendChild(novoli);
    });
}

function mostraestrelas(aestrelas) {
    // selecionar a lista de estrelas
    const listaestrelas = document.querySelector("div.estrelas ul");
    console.log(listaestrelas);
    listaestrelas.innerHTML = "";
    // percorrer as estrelas
    for (let i = 0; i < aestrelas.length; i++) {
        let novoli = document.createElement("li");
        novoli.innerHTML = aestrelas[i];
        listaestrelas.appendChild(novoli);
    }
}

// chave estática, mas que vai ser gerada dinamicamente
const chave = {
    numeros: [1, 2, 3, 4, 5],
    estrelas: [10, 11]
}

console.log(chave.numeros)
console.log(chave.estrelas)

//chave.numeros = gerador(5, 50);
//chave.estrelas = gerador(2, 12);

//mostranumeros(chave.numeros);
//mostraestrelas(chave.estrelas);
//geranovachave();
//mostrachave(chave);
//geranumeros()


//document.querySelector("#bgera")

function geranovachave() {
    console.log("ui")
    const chave = {};
    chave.numeros = gerador(5, 50);
    chave.estrelas = gerador(2, 12);
    mostrachave(chave);
}

const botao = document.getElementById("bgera");

botao.addEventListener("click", geranovachave);

//botao.onclick = geranovachave;
//botao.onclick = function () {
//    console.log("kjashfdkashfkjashfkjasfhkajsfhkajsfhak");
//}

