import { ReactNode } from "react"
import * as C from "./styles"
import { Header } from '../Header/indext'

type Props = {
    children: ReactNode
}

export const Theme = ({ children }:Props) => {
    return <C.Container>
        <C.Area>
            <Header />
            <C.Steps>
                <C.Sidebard>
                    ....
                </C.Sidebard>
                <C.Page>
                    {children}
                </C.Page>
            </C.Steps>
        </C.Area>
    </C.Container>;
};


