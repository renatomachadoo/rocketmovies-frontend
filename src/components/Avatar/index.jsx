import { Container } from "./styles";

export function Avatar({ size=64 }){
    return(
        <Container size={size}>
            <img src="https://github.com/renatomachadoo.png" alt="Avatar utilizador" />
        </Container>
    )
}