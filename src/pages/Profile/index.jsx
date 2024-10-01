import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Avatar } from "../../components/Avatar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { IoArrowBack } from "react-icons/io5";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile(){
    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    return (
        <Container>
            <header>
                <div className="header-div">
                    <ButtonText icon={IoArrowBack} title="Voltar" onClick={() => handleBack()} />
                    <div>
                        <Avatar size={186} />
                        <form>
                            <label className="avatar" htmlFor="avatar">
                                <FiCamera />
                            </label>
                            <input type="file" id="avatar" name="avatar" />
                        </form>
                    </div>
                </div>
            </header>
            <main>
                <div>
                    <div>
                        <Input icon={FiUser} placeholder="Nome"/>
                        <Input icon={FiMail} placeholder="Endereço de E-mail"/>
                    </div>
                    <div>
                        <Input icon={FiLock} type="password" placeholder="Palavra-passe atual"/>
                        <Input icon={FiLock} type="password" placeholder="Nova palavra-passe"/>
                    </div>
                    <Button title="Salvar" />
                </div>
            </main>
        </Container>
    )
}