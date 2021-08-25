import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Container } from "./styles";
import { Header, ButtonTextInicial, Salvar } from "../../components";


export default function EditarLivro() {
    const route = useRoute();
    const navigation = useNavigation();
    /*function StatusEdit() {
      navigation.navigate("Login");
    }*/
    function handleBooksStack() {
        navigation.navigate("Books");
    }

    return (
        <Container>
            <Header
                hello='Aqui você pode:'
                name='EDITAR O LIVRO'
                image={require("../../../assets/img/LendoLivro.png")}
            />
            <Salvar title="SALVAR" onPress={handleBooksStack} />
            <ButtonTextInicial title="Voltar" onPress={handleBooksStack} />
        </Container>
    )
}
