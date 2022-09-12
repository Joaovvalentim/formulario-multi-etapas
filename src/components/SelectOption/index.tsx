import * as C from './styles'

type Pros = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOptions = ({ title, description, icon , selected, onClick}: Pros) => {
    return (
        <C.Container selected={selected} onClick={onClick}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    )
}