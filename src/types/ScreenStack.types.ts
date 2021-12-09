import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"
import { BooksProps } from "../interfaces/Books.interfaces"

// Login Stack
export type LoginStackParamList = {
    Login: undefined
    Cadastrar: undefined
    HomeStack: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}

// Book Stack
export type BookStackParamList = {
    Home: undefined
    Livro: BooksProps
    notas: {
        id: number
        conteudo: string
    }[]
}
type LivroScreenNavigationProp = StackNavigationProp<BookStackParamList>
export type AnimalTypes = {
    navigation: LivroScreenNavigationProp
}

