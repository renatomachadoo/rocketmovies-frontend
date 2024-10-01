import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Avatar } from "../../components/Avatar";
import { MovieTag } from "../../components/MovieTag";

import { IoArrowBack } from "react-icons/io5";
import { FaStar, FaRegStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar.png"

export function Details(){
    const navigate = useNavigate()
    const { user } = useAuth()
    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const [stars, setStars] = useState([])
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
   

    function handleBack(){
        navigate(-1)
    }

    useEffect(() => {
        async function getMovieData(){
            const response = await api.get(`/movies_notes/${id}`)
            setMovie(response.data)

            for(let i = 1; i <= 5; i++){
                if(i <= response.data.rating){
                    setStars(prevState => [...prevState, "full"])
                }else{
                    setStars(prevState => [...prevState, "empty"])
                }
            }
            const dateFromMovie = new Date(response.data.created_at)
            setDate(dateFromMovie.toLocaleDateString("pt-pt"))
            setTime(dateFromMovie.toLocaleTimeString("pt-pt"))
        }
        getMovieData()
    }, [])

    return (
        <Container>
            <Header/>
            <main>
                <ButtonText title="Voltar" icon={IoArrowBack} onClick={handleBack} />
                <div className="details-header">
                    <h2>{movie.title}</h2>
                    <div className="rating">
                        {
                            stars.map(( star, index ) => (
                                star === "full" ? <FaStar key={String(index)} size={20}/> : <FaRegStar key={String(index)} size={20}/>
                            ))
                        }
                    </div>
                </div>
                <div className="details-creation-info">
                    <Avatar src={avatarUrl} size={16}/>
                    <p>Por {user.name}</p>
                    <div>
                        <CiClock2 size={16} />
                        <span>{date} às {time}</span>
                    </div>
                </div>
                <div className="details-tags">
                    {
                        movie.tags && movie.tags.map(( tag, index ) => (
                            <MovieTag key={String(index)} tagName={tag.name} />
                        ))
                    }
                </div>
                <p>
                    {movie.description}
                </p>
            </main>
        </Container>
    )
}