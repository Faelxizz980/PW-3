import { getSelecoes, deleteSelecao } from '../../services/selecoes.service.js'


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
        <div>
            <div>
                <img src="${selecao.logo}" alt="">
            </div>
            <div>
                <span>Nome:</span>
                <span>${selecao.nome}</span>
            </div>
            <div>
                <span>Grupo:</span>
                <span>${selecao.grupo}</span>
            </div>
            <div>
                <button>Ver Mais</button>
                <button data-id="${selecao.id}" id="btnDel">Deletar</button>
            </div>

        </div>`
    })
}

selecoescontainer.addEventListener("click", async(e) =>{
    e.preventDefault();

    const button = e.target.closest("#btnDel")

    if(!button) return;

    const id = button.dataset.id;

    const confirmar = confirm("Certeza que deseja excluir essa seleção?");

    if(!confirmar) return;

    await delselecao(id);

    location.reload();

})


async function init() {
    const selecoes = await getSelecoes()
    renderselecoes(selecoes)
}

init()