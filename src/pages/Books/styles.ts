import styled from "styled-components/native";
import { StatusBar } from 'react-native'


//const Container é um container rs 
export const Container = styled.SafeAreaView`
  /* margin-top: ${StatusBar.currentHeight}px; */
`

// Message é a formatação de uma mensagem
export const Message = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
`

//Mostra os livros 
export const Livros = styled.View``