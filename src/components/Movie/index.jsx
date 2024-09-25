import { useEffect, useState } from "react";
import { Container } from "./styles";
import { MovieTag } from "../MovieTag";

import { FaStar, FaRegStar } from "react-icons/fa";


export function Movie(props){
    const [ stars, setStars] = useState([])

    useEffect(() => {
            for(let i = 1; i <= 5; i++){
                if(i <= props.data.rating){
                    setStars(prevState => [...prevState, "full"])
                }else{
                    setStars(prevState => [...prevState, "empty"])
                }
            }
    }, [])

    return (
        <Container>
            <h2>
                {props.data.title}
            </h2>
            <div id="stars">
                {
                    stars.map((star, index) => (
                        star === "full" ? <FaStar key={String(index)} /> : <FaRegStar key={String(index)} />
                    ))
                }
            </div>
            <p>
                {props.data.description}
            </p>
            <div id="tags">
                {
                    props.data.tags && props.data.tags.map(( tag, index) => (
                        <MovieTag key={String(index)} tagName={tag} />
                    ))
                }
                
            </div>
        </Container>
    )
}