import { ImageSourcePropType } from 'react-native'

export interface LivroProps {
  name: string
  images: ImageSourcePropType
  status: string
  notas: {
    conteudo: string
  }
}