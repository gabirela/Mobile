import { ImageSourcePropType } from 'react-native'

// NÃO SEI A FUNÇÃO DESTE AINDA

export interface ButtonProps {
  onPress: () => void
  title?: string
  image?: ImageSourcePropType
  type?: "edit" | "remove"
  children?: JSX.Element
  size?: "default" | "define"
}