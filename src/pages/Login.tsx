import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from "react-native";
import {
  //PRECISA FAZER ESSA PARTE NO LOGIN 
  Container,
  FormRow,
  Label,
  TextInput,
  Form,
} from '../styles/Login'

import { Button, ButtonText } from "../components";
import Logo from '../components/Logo';
import { useAuth } from '../hook/auth';
import { useState } from 'hoist-non-react-statics/node_modules/@types/react';
import { IAuthenticate } from '../interfaces/User.interface';

export default function Login() {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  function handleHome() {
    navigation.navigate("HomeStack");
  }
  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item })
  }
  async function handleSignIn() {
    try {
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
      }
    } catch (error) {

      Alert.alert(`Erro ao fazer login: ${error}`);

    }
  }
  return (
    <Container>
      <Form>
        <Logo
          image={require("../../assets/img/logoApp.png")}
        />
        <FormRow>
          <Label>E-mail</Label>
          <TextInput
            placeholder="e-mail"
            onChangeText={(i) => handleChange({ email: i })}
          ></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput
            placeholder="senha"
            secureTextEntry={true}
          ></TextInput>
        </FormRow>
        <Button title="Login" onPress={handleSignIn} />
        <ButtonText title="Cadastre-se" onPress={handleCadastrar} />
      </Form>
    </Container>
  );
}

