import { postSelecao} from '../../../services/selecoes.service.js'

const form = document.getElementById('FormSelecao')

const inputNome = document.getElementById('nomeSelecao')
const inputTecnico = document.getElementById('tecnicoSelecao')
const inputLogo = document.getElementById('logoSelecao')
const Selectgrupo = document.getElementById('grupoSelect')

const flagPreview = document.getElementById('flagPreview')

inputLogo.addEventListener("change", ()=>{
    flagPreview.src = inputLogo.value;
})

const createSelecao = async(data)=>{
    try{
           const result = await postSelecao(data) 
           return result;
    }catch(error){
        console.log(error.message)
    }
}

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const data = {
        nome:inputNome.value,
        tecnico:inputTecnico.value,
        logo:inputLogo.value,
        grupo:Selectgrupo.value
    }

    const result = await createSelecao(data);
    window.alert("Seleção Criada:",result)
})

