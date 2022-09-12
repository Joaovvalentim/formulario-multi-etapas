import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { useEffect } from 'react';
import { SelectOptions } from '../../components/SelectOption';


export const FormStep2 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();// state tem os dados e em dispatch eu uso os dados, alterar ou executar açoes dentro do context usando o reducer
    useEffect(() => {// este effect me diz em qual passo estou 
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, [dispatch])

    const handleNextStep = () => {// este navigate usa o historioco para me jogar para proxima pagina ao clicar no botão
        if (state.name !== '') {// verifica se o campo Nome esta vazio, caso nao ele deixa passar para a pagina 2
            navigate('/step2');
        } else {
            alert("Digite seu nome")
        }

    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Nome</h1>
                <p>Coloque seu nome</p>

                <hr />
                <SelectOptions 
                title="Sou iniciante"
                description="comecei a programar há menos de 2 anos"
                icon="🤩"
                />
                <SelectOptions 
                title="Sou programador"
                description="já programo há 2 anos ou mais"
                icon="😎"
                />

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>



    )
}