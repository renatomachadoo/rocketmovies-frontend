import { Container, BackgroundImage, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Iniciar sessão</h2>
                <Input icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} type="password" placeholder="Palavra-passe" />
                <Button type="button" title="Entrar" />
                <ButtonText type="button" title="Criar conta" />
            </Form>
            <BackgroundImage/>
        </Container>
    )
}