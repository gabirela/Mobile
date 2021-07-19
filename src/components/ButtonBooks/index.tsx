import React from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText, ImageStyle } from "./style";

export default function ButtonBooks({
  title,
  image,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <ButtonStyle onPress={onPress} {...rest}>
      {image && <ImageStyle source={image}/>}
      <ButtonStyleText>{title}</ButtonStyleText>
    </ButtonStyle>
  );
}

// ENTRE ESSE RETURN BUTTONSTYLE TEM UM <ImageStyle source={image} />