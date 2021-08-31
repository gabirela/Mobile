import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Container, Form, FormRow, Label, TextInput } from "./styles";
import { Header, ButtonTextInicial, Salvar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";


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
        <ScrollView>
            <Container>
                <Header
                    hello='Aqui você pode:'
                    name='EDITAR O LIVRO'
                    image={require("../../../assets/img/LendoLivro.png")}
                />
                <Form>
                    <FormRow>
                        <TextInput placeholder="Editar nome do livro"></TextInput>
                    </FormRow>
                    <FormRow>
                        <TextInput placeholder='Editar status da leitura'></TextInput>
                    </FormRow>
                    <FormRow>
                        <Label>Editar suas notas:</Label>

                        <TextInput
                            multiline={true}
                            numberOfLines={15}
                            placeholder='Notas'>

                        </TextInput>
                    </FormRow>
                </Form>
                <Salvar title="SALVAR" onPress={handleBooksStack} />
                <ButtonTextInicial title="Voltar" onPress={handleBooksStack} />
            </Container>
        </ScrollView>
    )
}
