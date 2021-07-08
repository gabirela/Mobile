import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { BooksProps } from "../../interfaces/Books.interfaces";
import { Header, ButtonBooks } from "../../components";
import { Container, Message, Livros } from "./styles";
import data from "../../services/data";


export default function Home() {
    const navigation = useNavigation();
    function handleBooks(item: BooksProps) {
        navigation.navigate("Book", { ...item});
    }

    return(
        <Container>
            <Header
            hello='Olá'
            name='Gabriela'
            image={require("../../../assets/img/FotoPerfil.png")}
            />
            <Message>Seus Livros</Message>
            <Livros>
                <FlatList
                data={data}
                renderItem={({ item }) =>(
                    <ButtonBooks
                    key={item.id}
                    title={item.title}
                    onPress={() => handleBooks(item)}
                    image={item.image}
                    />
                )}
                numColumns={2}
               /> 
            </Livros>
        </Container>
    );
}