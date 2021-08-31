import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Container } from "./styles";
import { ButtonTextInicial, Header, Salvar } from "../../components";
import { Form, FormRow, TextInput, Label } from "./styles";
import { ScrollViewComponent } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Borda } from "../Perfil/styles";


export default function Cadastrarlivro() {
    const route = useRoute();
    const navigation = useNavigation();
    function handleHomeStack() {
        navigation.navigate("Home");
    }

    return (
        <ScrollView>
            <Container>
                <Header
                    hello='Aqui você pode:'
                    name='CADASTRAR UM NOVO LIVRO'
                    image={require("../../../assets/img/PilhadeLivros.png")}
                />
                <Form>
                    <FormRow>
                        <TextInput placeholder="Nome do livro"></TextInput>
                    </FormRow>
                    <FormRow>
                        <TextInput placeholder='Status da leitura'></TextInput>
                    </FormRow>
                    <FormRow>
                        <Label>Suas notas:</Label>

                        <TextInput
                            multiline={true}
                            numberOfLines={15}
                            placeholder='Notas'>

                        </TextInput>
                    </FormRow>
                </Form>
                <Salvar title="SALVAR" onPress={handleHomeStack} />
                <ButtonTextInicial title="Voltar" onPress={handleHomeStack} />
            </Container>
        </ScrollView>
    )
}
