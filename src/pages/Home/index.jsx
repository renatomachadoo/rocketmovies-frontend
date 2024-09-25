import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"

import { BiPlus } from "react-icons/bi"

export function Home(){
    return (
        <Container>
            <Header/>
            <main>
                <div id="content-header">
                    <h1>
                        Meus Filmes
                    </h1>
                    <Button icon={BiPlus} title="Adicionar filme" />
                </div>
                <div id="movies">
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom djioasoidasmiodmasiodiom djioasoidasmiodmasiodiom djioasoidasmiodmasiodiom djioasoidasmiodmasiodiomdjioasoidasmiodmasiodiomdjioasoidasmiodmasiodiomdjioasoidasmiodmasiodiomdjioasoidasmiodmasiodiom",
                        rating : 5,
                        tags : [
                            "slb",
                            "scp"
                        ]
                    }}/>
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom",
                        rating : 3
                    }}/>
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom"
                    }}/>
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom"
                    }}/>
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom"
                    }}/>
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom"
                    }}/>
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom"
                    }}/>
                    <Movie data={{
                        title : "Teste",
                        description : "djioasoidasmiodmasiodiom"
                    }}/>
                </div>
            </main>
        </Container>
    )
}