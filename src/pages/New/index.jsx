import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { MovieItem } from "../../components/MovieItem";

import { IoArrowBack } from "react-icons/io5";

export function New(){
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const [title, setTitle] = useState("")
    const [note, setNote] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    function handleAddTag(tagName){
        if(!newTag){
            return alert("Não pode adicionar marcadores vazios.")
        }
        setTags(prevState => [...prevState, tagName])
        setNewTag("")
    }

    function handleRemoveTag(tagName){
        const filteredTags = tags.filter(tag => tag !== tagName)
        setTags(filteredTags)
    }

    useEffect(() => {
        if(Number(note) > 5 ){
            setNote(5)
        }else if(Number(note) < 0){
            setNote(0)
        }
    }, [note])

    return(
        <Container>
            <Header />
            <main>
                <span>
                    <ButtonText title="Voltar" icon={IoArrowBack} onClick={handleBack} />
                </span>
                <h2>Novo filme</h2>
                <form>
                    <div className="cols-2">
                        <Input 
                            placeholder="Título" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota de (0 a 5)"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                    <TextArea 
                        rows={10} 
                        placeholder="Observações" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <section>
                        <p>Marcadores</p>
                        <div id="markers">
                            {
                                tags.map(( tag, index) => (
                                    <MovieItem 
                                        key={String(index)} 
                                        value={tag} 
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <MovieItem 
                                isNew 
                                placeholder="Novo marcador" 
                                onChange={(e) => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={() => handleAddTag(newTag)}
                            />
                        </div>
                    </section>
                    <div className="cols-2">
                        <Button type="button" secondary title="Excluir filme" />
                        <Button type="button" title="Salvar alterações" />
                    </div>
                </form>
            </main>
        </Container>
    )
}