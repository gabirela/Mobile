import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import { Container, Message, Livros } from "./styles";
import { ButtonTextInicial, Header, Livro } from "../../components";
import { BooksProps } from "../../interfaces/Books.interfaces";

export default function Books() {
  const route = useRoute();
  const { id, title, image, status, notas } =
    route.params as BooksProps;
  const navigation = useNavigation();
  function StatusEdit() {
    navigation.navigate("Login");
  }
  function handleEditarLivroStack() {
    navigation.navigate("EditarLivro");
  }
  return (
    <Container>
      <Header
        hello='Olá,'
        name='Gabriela'
        image={require("../../../assets/img/FotoPerfil.png")}
      />
      <Livro
        id={id}
        title={title}
        image={image}
        status={status}
        notas={notas} />

      <ButtonTextInicial title="Editar" onPress={handleEditarLivroStack} />
    </Container>
  );
}

