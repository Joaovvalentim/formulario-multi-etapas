// Context
//Reducer(executa ações especificas)
//Provides(Ambiente para ter acesso do contexto)
//Hook(Simplifica o processo para ter acesso às informações)
import { createContext, useContext, useReducer } from "react";



// Criando meus tipos 
type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type Action = {
  type: FormActions;
  payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: React.ReactNode;
}


const initialData: State = {
  // valor inicial dos campos
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

//Context

const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions { //para saber se ja foi preenchido pelo usuario
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const FormReducer = (state: State, action: Action) => {
  // Recebe os Dados originais
  switch (action.type) {
    case FormActions.setCurrentStep: // Recebe a ação de trocar o passo atual
      return { ...state, currentStep: action.payload }; // retorna um novo novo estado modificado
    case FormActions.setName:
      return { ...state, name: action.payload }; // trocar o nome
    case FormActions.setLevel:
      return { ...state, level: action.payload }; // trocar o level
    case FormActions.setEmail:
      return { ...state, email: action.payload }; // trocar o email
    case FormActions.setGithub:
      return { ...state, guithub: action.payload }; // trocar o guithub

    default:
      return state;
  }
};

//Provider

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

//Context Hook

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormContext");
  }
  return context;
};
