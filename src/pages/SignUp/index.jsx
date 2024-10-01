import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, BackgroundImage, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleNavigate(link){
        navigate(link)
    }

    async function handleSignUp(){
        try {
            await api.post("/users", {
                name,
                email,
                password
            })
            alert("Conta criada com sucesso.")
            navigate("/")
        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            }
            alert("Erro ao fazer o registo.")   
        }
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input icon={FiUser} placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                <Input icon={FiMail} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input icon={FiLock} type="password" placeholder="Palavra-passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="button" title="Criar conta" onClick={handleSignUp} />
                <ButtonText icon={FiArrowLeft} type="button" title="Voltar para o login" onClick={() => handleNavigate("/")} />
            </Form>
            <BackgroundImage/>
        </Container>
    )
}