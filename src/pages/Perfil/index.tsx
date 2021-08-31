import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Container, FormRow, Borda, TextInput, Form, Label } from "./styles";
import { Header, Button, Salvar, ButtonTextInicial, ButtonText } from "../../components";


export default function Perfil() {
    const route = useRoute();
    const navigation = useNavigation();
    function handleHomeStack() {
        navigation.navigate("Home");
    }
    function handleFile() {
        navigation.navigate("File");
    }

    return (
        <Container>
            <Header
                hello='SEU'
                name='PERFIL'
                image={require("../../../assets/img/FotoPerfil.png")}
            />
            <Form>
                <FormRow>
                    <Label>Nome:</Label>
                    <TextInput></TextInput>
                </FormRow>
                <FormRow>
                    <Label>E-mail:</Label>
                    <TextInput></TextInput>
                </FormRow>
                <FormRow>
                    <ButtonText title="Substituir foto de perfil" onPress={handleFile} />
                </FormRow>
            </Form>
            <Salvar title="SALVAR" onPress={handleHomeStack} />
            <ButtonTextInicial title="Voltar" onPress={handleHomeStack} />
        </Container>
    )
}
/*<Button title="Salvar" onPress={handleLogin} />
<ButtonText title="Voltar" onPress={handleLogin} />*/
