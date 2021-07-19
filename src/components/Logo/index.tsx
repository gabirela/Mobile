import React from "react";
import { Image } from "react-native";
import { LogoProps } from "../../interfaces/Logo.interfaces";
import { LogoStyles } from "./styles";
export default function Logo({image}:LogoProps) {
    return(
        <LogoStyles>
           <Image source={image} />
        </LogoStyles>
    );

}