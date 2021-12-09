import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import { Container, Message, Livros } from "./styles";
import { ButtonTextInicial, Header, Livro } from "../../components";
import { BooksProps } from "../../interfaces/Books.interfaces";
import { useAuth } from "../../hook/auth";

export default function Books() {
  const { user } = useAuth();
  const route = useRoute();
  const { id, title, image, status, notas } =
    route.params as BooksProps;
  const navigation = useNavigation();
  /*function StatusEdit() {
    navigation.navigate("Login");
  }*/
  function handleEditarLivroStack() {
    navigation.navigate("EditarLivro");
  }
  return (
    <Container>
      {user && (
        <Header
          hello='Olá,'
          name={user.name}
          image={{ uri: user.profile_photo_url }}
        />
      )}

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

