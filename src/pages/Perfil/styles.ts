import styled from "styled-components/native";
import { StatusBar } from 'react-native';
import colors from '../../styles/Colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px; 
  margin-bottom: 110px;
  
`
export const Form = styled.KeyboardAvoidingView``
export const FormRow = styled.View`
 align-items: center;
 margin-top: 10px;
`
export const TextInput = styled.TextInput`
  background-color: ${colors.pinkBey};
  border-radius: 5px;
  border-bottom-width: 1px;
  font-size: 18px;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 80%;

`
export const Label = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  padding: 5px;
  `
export const Borda = styled.View`
 background-color: ${colors.pinkBey};
 border-radius: 5px;
 width: 80%;
`