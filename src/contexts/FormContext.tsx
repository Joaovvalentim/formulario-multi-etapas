// Context
//Reducer(executa ações especificas)
//Provides(Ambiente para ter acesso do contexto)
//Hook(Simplifica o processo para ter acesso às informações)

import { createContext, useContext, useReducer } from 'react';
const initialData = {// valor inicial dos campos 
    currentStep:0,
    name:'',
    level:0,
    email:'',
    g
}
//Context

const FormContext = createContext(undefined);

//Reducer
enum FormActions { //para saber se ja foi preenchido pelo usuario
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const FormReducer = (state, action) => {// Recebe os Dados originais
    switch (action.type) {
        case FormActions.setCurrentStep:// Recebe a ação de trocar o passo atual
            return { ...state, currentStep: action.payload };// retorna um novo novo estado modificado
        case FormActions.setName:
            return { ...state, name: action.payload };// trocar o nome
        case FormActions.setLevel:
            return { ...state, level: action.payload };// trocar o level
        case FormActions.setEmail:
            return { ...state, email: action.payload };// trocar o email
        case FormActions.setGithub:
            return { ...state, guithub: action.payload };// trocar o guithub

        default:
            return state;
    }
} 

//Provider

const FormProvider = ({children}) => {
const [state,dispatch] = useReducer(FormReducer,initialData)


    return(
            <FormContext.Provider value={}>
                {children}
            </FormContext.Provider>
    )
}