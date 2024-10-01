import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Avatar } from "../../components/Avatar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { IoArrowBack } from "react-icons/io5";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import avatarPlaceholder from "../../assets/avatar.png"

import { api } from "../../services/api";

export function Profile(){
    const navigate = useNavigate()
    const { user, updateProfile} = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    function handleBack(){
        navigate(-1)
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    async function handleUpdateProfile(){
        const updated = {
            name,
            email,
            old_password : oldPassword,
            new_password : newPassword
        }

        const userUpdated = Object.assign(user, updated)
        await updateProfile({ user : userUpdated, avatarFile})
        setOldPassword("")
        setNewPassword("")
    }

    return (
        <Container>
            <header>
                <div className="header-div">
                    <ButtonText icon={IoArrowBack} title="Voltar" onClick={handleBack} />
                    <div>
                        <Avatar size={186} src={avatar}/>
                        <form>
                            <label className="avatar" htmlFor="avatar">
                                <FiCamera />
                            </label>
                            <input type="file" id="avatar" name="avatar" onChange={handleChangeAvatar} />
                        </form>
                    </div>
                </div>
            </header>
            <main>
                <div>
                    <div>
                        <Input icon={FiUser} placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input icon={FiMail} placeholder="Endereço de E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <Input icon={FiLock} type="password" placeholder="Palavra-passe atual" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        <Input icon={FiLock} type="password" placeholder="Nova palavra-passe" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <Button title="Salvar" onClick={handleUpdateProfile} />
                </div>
            </main>
        </Container>
    )
}