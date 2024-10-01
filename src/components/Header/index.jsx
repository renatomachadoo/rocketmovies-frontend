import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Input } from "../Input";
import { Avatar } from "../Avatar";

import { BiSearch } from "react-icons/bi";

import avatarPlaceholder from "../../assets/avatar.png"

import { api } from "../../services/api";

export function Header(){
    const { signOut, user } = useAuth()

    function handleSignOut(){
        const response = window.confirm("Deseja terminar sessão?")
        if(!response){
            return
        }
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <header>
                <Link to="/">
                    <h2>RocketMovies</h2>
                </Link>
                <Input icon={BiSearch} placeholder="Pesquisar pelo título" />
                <div>
                    <div>
                        <p>{user.name}</p>
                        <button onClick={handleSignOut}>sair</button>
                    </div>
                    <Link to="/profile">
                        <Avatar size={64} src={avatarUrl}/>
                    </Link>
                </div>
            </header>
        </Container>
    )
}