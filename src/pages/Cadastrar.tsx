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
          <Label>Foto de perfil</Label>
        </FormRow>
        <Button title="Salvar" onPress={handleLogin} />
        <ButtonText title="Voltar" onPress={handleLogin} />
      </Form>
    </Container>
  );
}

/*        <FormRow>
          <Label>Foto de Perfil</Label>
          <input type="image" placeholder="Selecione um arquivo .png"></input>
        </FormRow>*/