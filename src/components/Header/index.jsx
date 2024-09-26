import { Container } from "./styles";
import { Input } from "../Input";
import { Avatar } from "../Avatar";

import { BiSearch } from "react-icons/bi";

export function Header(){
    return(
        <Container>
            <header>
                <h2>RocketMovies</h2>
                <Input icon={BiSearch} placeholder="Pesquisar pelo título" />
                <div>
                    <div>
                        <p>Renato Machado</p>
                        <span>sair</span>
                    </div>
                    <Avatar size={64}/>
                </div>
            </header>
        </Container>
    )
}