import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Input } from "../Input";
import { Avatar } from "../Avatar";

import { BiSearch } from "react-icons/bi";

export function Header(){
    const { signOut } = useAuth()

    function handleSignOut(){
        signOut()
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <h2>RocketMovies</h2>
                </Link>
                <Input icon={BiSearch} placeholder="Pesquisar pelo título" />
                <div>
                    <div>
                        <p>Renato Machado</p>
                        <button onClick={handleSignOut}>sair</button>
                    </div>
                    <Link to="/profile">
                        <Avatar size={64}/>
                    </Link>
                </div>
            </header>
        </Container>
    )
}