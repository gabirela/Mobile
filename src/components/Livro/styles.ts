import styled from 'styled-components/native'
import colors from '../../styles/Colors'

export const Aviso = styled.Text`
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
`

export const LivroStyle = styled.View`
  margin:20px;
`
export const LivroImage = styled.View`
  margin-top:10px;
  width: 100%;
  align-items: center;
`
export const LivroName = styled.Text`
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-left: 10px;
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-decoration: underline;
`
export const LivroStatus = styled.Text`
  background-color: ${colors.pinkBey};  
  border-radius: 5px;
  font-size: 20px;
  margin-top:10px;
  margin-left: 10px;
  justify-content: center;
  color:black;
`
export const LivroNotas = styled.Text`
  background-color: ${colors.pinkBey};  
  font-size: 20px;
  text-align: justify;
  border-radius: 5px;
  margin-top:15px;
  margin-left: 10px;
  justify-content: center;
  color:black;
`
