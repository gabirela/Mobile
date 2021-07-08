import { ImageSourcePropType } from "react-native";

export interface BooksProps{
    id: number
    title: string
    image: ImageSourcePropType
    status: string
    //notas: string
}