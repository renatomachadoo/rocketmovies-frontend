import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, BackgroundImage, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const { signIn } = useAuth()
    const navigate = useNavigate()

    function handleNavigate(link){
        navigate(link)
    }

    function handleSignIn(){
        signIn({ email, password})
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Iniciar sessão</h2>
                <Input icon={FiMail} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input icon={FiLock} type="password" placeholder="Palavra-passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="button" title="Entrar" onClick={handleSignIn}/>
                <ButtonText type="button" title="Criar conta" onClick={() => handleNavigate("/register")} />
            </Form>
            <BackgroundImage/>
        </Container>
    )
}