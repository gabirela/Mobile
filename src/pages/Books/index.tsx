import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Container} from "./styles";
import { Header } from "../../components";
import { BooksProps } from "../../interfaces/Books.interfaces";

export default function Books() {
    const route = useRoute();
    const {title, image, status,}= route.params as BooksProps;
    const navigation = useNavigation();
    function handleBooks() {
        navigation.navigate("Home")
    }

    /*No do lázaro tem funções para 
    editar e remover castrações, então acho
    que é aqui que eu coloco funções para
    editar Livros*/ 

    return(
        <Container>
            <Header name={title} image={image}/>
        </Container>
    );
   /* No do lázaro, dentro do container depois
   do Header tem o <Castração> então acho que vai
   o editar livro*/
}