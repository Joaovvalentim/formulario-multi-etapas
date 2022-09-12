import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import { info } from 'console';


export const FormStep1 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();// state tem os dados e em dispatch eu uso os dados, alterar ou executar açoes dentro do context usando o reducer
    useEffect(() => {// este effect me diz em qual passo estou 
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {// este navigate usa o historioco para me jogar para proxima pagina ao clicar no botão
       if(state.name!== ''){// verifica se o campo Nome esta vazio, caso nao ele deixa passar para a pagina 2
        navigate('/step2');
       }else{
        alert("Digite seu nome")
       }
        
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {// este dispatch pega as informações do meu input em tempo real
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3 - {state.currentStep}</p>
                <h1>Nome</h1>
                <p>Coloque seu nome</p>

                <hr />

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>



    )
}