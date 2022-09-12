import * as C from './styles'

type Pros = {
    title : string;
    description : string;
    icon : string;
}

export const SelectOptions = ({title, description, icon}: Pros) => {
    return(
        <C.Container>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    )
}