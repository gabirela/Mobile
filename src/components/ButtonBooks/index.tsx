import React from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText, ImageStyle } from "./style";

export default function ButtonAnimal({
  title,
  image,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <ButtonStyle onPress={onPress} {...rest}>
      <ButtonStyleText>{title}</ButtonStyleText>
    </ButtonStyle>
  );
}

// ENTRE ESSE RETURN BUTTONSTYLE TEM UM <ImageStyle source={image} />