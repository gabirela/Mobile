import React from "react";
import { Image } from "react-native";
import { LivroProps } from "../../interfaces/Livro.interfaces";
import {
    LivroStyle,
    LivroTitle,
    LivroImage,
    LivroStatus,
    LivroName,
    LivroNotas
  } from "./styles"; 


export default function Livro({name, image, status, }: LivroProps) {
    return (
      <LivroStyle>
        <LivroTitle>
          <LivroName>{name}</LivroName>
        </LivroTitle>
        <LivroImage>
          <Image source={image} />
        </LivroImage>
        <LivroStatus>{status}</LivroStatus>
      </LivroStyle>
    );
  }

  //        <LivroNotas>{notas}</LivroNotas>