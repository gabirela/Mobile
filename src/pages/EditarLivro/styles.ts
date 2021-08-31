import styled from "styled-components/native";
import { StatusBar } from 'react-native'
import Colors from "../../styles/Colors";


export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px; 
  margin-bottom: 110px;
`
export const Message = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
`
export const Livros = styled.View`
  width: 100%;
 
`
export const Links = styled.Button`
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
`

export const Form = styled.KeyboardAvoidingView``
export const FormRow = styled.View`
 align-items: center;
 margin-top: 10px;
`
export const TextInput = styled.TextInput`
  background-color: ${Colors.pinkBey};
  border-radius: 5px;
  border-bottom-width: 1px;
  font-size: 18px;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 80%;
  align-items: flex-start;

`
export const Label = styled.Text`
  font-size: 18px;
  color: ${Colors.black};
  padding: 5px;
  `
