import React from "react";
import { Image } from "react-native";
import { BooksProps } from "../../interfaces/Books.interfaces";

import {
  LivroStyle,
  LivroImage,
  LivroStatus,
  LivroName,
  LivroNotas,
  Aviso
} from "./styles";


export default function Livro({ title, image, status, notas: { conteudo } }: BooksProps) {
  return (
    <LivroStyle>
      <LivroName>{title}</LivroName>
      <LivroImage>
        <Image source={image} />
      </LivroImage>

      <LivroStatus>
        <Aviso>Status:  </Aviso>
        {status}</LivroStatus>
      <LivroNotas>
        <Aviso>Notas:  </Aviso>
        {conteudo}</LivroNotas>
    </LivroStyle>
  );
}

  //        <LivroNotas>{notas}</LivroNotas>