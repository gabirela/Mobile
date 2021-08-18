import React from "react";
import { Image } from "react-native";
import { BooksProps } from "../../interfaces/Books.interfaces";

import {
  LivroStyle,
  LivroTitle,
  LivroImage,
  LivroStatus,
  LivroName,
  LivroNotas
} from "./styles";


export default function Livro({ title, image, status, notas: { conteudo } }: BooksProps) {
  return (
    <LivroStyle>
      <LivroName>{title}</LivroName>
      <LivroImage>
        <Image source={image} />
      </LivroImage>
      <LivroStatus>{status}</LivroStatus>
      <LivroNotas>{conteudo}</LivroNotas>
    </LivroStyle>
  );
}

  //        <LivroNotas>{notas}</LivroNotas>