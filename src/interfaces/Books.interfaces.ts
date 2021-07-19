import { ImageSourcePropType } from "react-native";
import { ButtonProps } from "./Button.interface"

export interface BooksProps{
    id: number
    title: string
    image: ImageSourcePropType
    status: string
    notas: {
        id: number
        conteudo: string
    }[]
}

/*export interface BooksProps extends ButtonProps {
    buttonEdit?: () => void
    buttonRemove?: (item: BooksProps) => void
    notas: {
      id: number
      conteudo: string
    }[]
  }*/
