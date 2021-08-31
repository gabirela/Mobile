import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  FormRow,
  Label,
  TextInput,
  Form,
} from "../styles/Login";
import { Button, ButtonText } from "../components";
import Logo from '../components/Logo';

export default function Cadastrar() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleFile() {
    navigation.navigate("File");
  }
  return (
    <Container>
      <Form>
        <Logo
          image={require("../../assets/img/logoApp.png")}
        />
        <FormRow>
          <Label>Nome</Label>
          <TextInput placeholder="nome"></TextInput>
        </FormRow>
        <FormRow>
          <Label>E-mail</Label>
          <TextInput placeholder="e-mail"></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput placeholder="senha"></TextInput>
        </FormRow>
        <FormRow>
          <ButtonText title="Adicione uma foto de perfil" onPress={handleFile} />
        </FormRow>
        <Button title="Salvar" onPress={handleLogin} />
        <ButtonText title="Voltar" onPress={handleLogin} />
      </Form>
    </Container>
  );
}
