import { Container } from "./styles";

export function Avatar({ size=64, ...rest }){
    return(
        <Container size={size}>
            <img src="https://github.com/renatomachadoo.png" alt="Avatar utilizador" {...rest} />
        </Container>
    )
}