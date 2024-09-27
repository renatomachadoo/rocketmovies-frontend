import { Container, BackgroundImage, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

export function SignUp(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input icon={FiUser} placeholder="Nome" />
                <Input icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} type="password" placeholder="Palavra-passe" />
                <Button type="button" title="Criar conta" />
                <ButtonText icon={FiArrowLeft} type="button" title="Voltar para o login" />
            </Form>
            <BackgroundImage/>
        </Container>
    )
}