import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"

import { BiPlus } from "react-icons/bi"

import { api } from "../../services/api"

export function Home(){
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    function handleNavigate(link){
        navigate(link)
    }

    useEffect(() => {
        async function getData(){
            const response = await api.get(`/movies_notes?title=${search}`)
            setMovies(response.data)
        }
        getData()
    }, [search])

    return (
        <Container>
            <Header search={search} setSearch={setSearch} />
            <main>
                <div id="content-header">
                    <h1>
                        Meus Filmes
                    </h1>
                    <Button icon={BiPlus} title="Adicionar filme" onClick={() => handleNavigate("/new")} />
                </div>
                <div id="movies">
                    {
                        movies.map(( movie, index) => (
                            <Link key={String(index)} to={`/details/${movie.id}`}>
                                <Movie data={movie}/>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </Container>
    )
}