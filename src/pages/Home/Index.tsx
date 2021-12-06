import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { BooksProps } from "../../interfaces/Books.interfaces";
import { Header, ButtonBooks, ButtonTextInicial } from "../../components";
import { Container, Message, Livros, Links } from "./styles";
import data from "../../services/data";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
    const navigation = useNavigation();
    function handleBooks(item: BooksProps) {
        navigation.navigate("Books", { ...item });
    }
    function handlePerfilStack() {
        navigation.navigate("Perfil");
    }
    function handleCadastrarlivroStack() {
        navigation.navigate("Cadastrarlivro");
    }


    return (
        <ScrollView>
            <Container>
                <Header
                    hello='Olá,'
                    name='Gabriela'
                    image={require("../../../assets/img/FotoPerfil.png")}
                />
                <Message>Seus Livros:</Message>
                <Livros>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <ButtonBooks
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                onPress={() => handleBooks(item)}
                            />
                        )}
                        keyExtractor={item => String(item.id)}
                    />
                </Livros>
                <ButtonTextInicial title="📖Editar Perfil" onPress={handlePerfilStack} />
                <ButtonTextInicial title="📚Cadastrar livro" onPress={handleCadastrarlivroStack} />
            </Container>
        </ScrollView>
    );
}
/* alo */