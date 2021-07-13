import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import { Container, Message, Livros } from "./styles";
import { Header } from "../../components";
import { BooksProps } from "../../interfaces/Books.interfaces";
//import { VacinaParamProps } from "../../interfaces/Vacina.interface";

export default function Books() {
  const route = useRoute();
  const { title, image, status, id } =
    route.params as BooksProps;
  const navigation = useNavigation();
  function StatusEdit() {
    navigation.navigate("Login");
  }
 /* const booksRemoveAlert = () =>
    Alert.alert(
      "Remoção",
      "Tem certeza que deseja remover este livro?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => console.log(id, ) },
      ],
      { cancelable: false }
    );
  /*const vacinaRemoveAlert = (item: VacinaParamProps) =>
    Alert.alert(
      "Remoção",
      "Tem certeza que deseja remover a vacina cadastrada?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => console.log(item) },
      ],
      { cancelable: false }
    );*/

  return (
    <Container>
      <Header name={title} image={image} />
    </Container>
  );
}