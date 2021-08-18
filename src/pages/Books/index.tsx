import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import { Container, Message, Livros } from "./styles";
import { Header, Livro } from "../../components";
import { BooksProps } from "../../interfaces/Books.interfaces";

export default function Books() {
  const route = useRoute();
  const { title, image} =
    route.params as BooksProps;
  const navigation = useNavigation();
  function StatusEdit() {
    navigation.navigate("Login");
  }
  return (
    <Container>
      <Header 
      name={title}
      image={image} />
      
    </Container>
  );
}
 
