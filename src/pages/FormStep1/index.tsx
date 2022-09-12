import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import { Theme } from '../../components/Theme'


export const FormStep1 = () => {

    const navigate = useNavigate();
    const handleNextStep = () => {
        navigate('/step2');
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Nome</h1>
                <p>Coloque seu nome</p>

                <hr />

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>



    )
}