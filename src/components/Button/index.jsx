import { Container } from "./styles";

export function Button({ icon : Icon, title, secondary = false, ...rest}){
    return (
        <Container secondary={secondary} {...rest}>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}