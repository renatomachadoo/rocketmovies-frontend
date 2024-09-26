import { useState } from "react";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { MovieItem } from "../../components/MovieItem";

import { IoArrowBack } from "react-icons/io5";

export function New(){
    const [newTag, setNewTag] = useState("")
    const [tags, setTags] = useState([])

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

    return(
        <Container>
            <Header />
            <main>
                <span>
                    <ButtonText title="Voltar" icon={IoArrowBack}/>
                </span>
                <h2>Novo filme</h2>
                <form>
                    <div className="cols-2">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota de (0 a 5)" />
                    </div>
                    <TextArea rows={10} placeholder="Observações" />
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
                        <Button secondary title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>
                </form>
            </main>
        </Container>
    )
}