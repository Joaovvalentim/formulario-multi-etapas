import * as C from "./styles"

type Props = {
    children: React.ReactNode
}


export const Theme = ({children}) => {
    return <C.Container>
        <C.Area>
            <Header/>
                <C.Steps>
                    <C.Sidebard>

                    </C.Sidebard>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
        </C.Area>
    </C.Container>;
};
