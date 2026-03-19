import { getSelecoes, deleteSelecao,getSelecaoById, putSelecao } from '../../../services/selecoes.service.js'


let selecoescontainer = document.querySelector("#selecoescontainer") // aq ele cria a variavel selecoescontainer e seleciona o elemento do html aq no caso do id selecoescontainer

const delselecao = async(id)=>{
    try{
        const result = await deleteSelecao(id)
        return result;
    }catch(error){
        console.log(error.message)
    }
}




function renderjogadores(lista){  //essa função serve para mostrar jogadores na página.

    let divjogadores = document.querySelector(".divjogadores") //Aqui o JavaScript procura no HTML um elemento com a classe:
    lista.forEach(jogador =>{  //aq ele percorre linha por linha da lista
        const p = document.createElement('p') //aq ele cria o elemento paragrafo 
        p.textContent = jogador.nome //aq ele implementa o nome dos jogadores no paragrafo
        divjogadores.appendChild(p) //agora o paragrafo e criado e implementado na div 
    })
}

function renderselecoes(lista){
    lista.forEach(selecao =>{
        selecoescontainer.innerHTML += `
        <div class = "cardSelecao">
            <div class = "logoContainer">
                <img src="${selecao.logo}" alt="">
            </div>
            <div class = "info">
                <span>Nome:</span>
                <span>${selecao.nome}</span>
            </div>
            <div class = "info">
                <span>Grupo:</span>
                <span>${selecao.grupo}</span>
            </div>
            <div class = "info">
                <span>Técnico:</span>
                <span>${selecao.tecnico}</span>
            </div>
            <div class = "botoes">
                <button >Ver Mais</button>
                <button class="btnEditar" data-id="${selecao.id}">Editar</button>
                <button class="btnDel" data-id="${selecao.id}">Deletar</button>
            </div>

        </div>`
    })
}

selecoescontainer.addEventListener("click", async (e) => {

 
    const btnDel = e.target.closest(".btnDel");

    if (btnDel) {
        const id = btnDel.dataset.id;

        const confirmar = confirm("Certeza que deseja excluir essa seleção?");
        if (!confirmar) return;

        await delselecao(id);
        location.reload();
        return;
    }

    const btnEditar = e.target.closest(".btnEditar");

    if (btnEditar) {
        const id = btnEditar.dataset.id;

       window.location.href = `../editar/index.html?id=${id}`;
        return;
    }

});


async function init() {
    const selecoes = await getSelecoes()
    renderselecoes(selecoes)
}

init()