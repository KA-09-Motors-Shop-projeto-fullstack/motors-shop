import React from "react";
import { Container } from "./styles";

export interface IPropsAvatar {
  name: string;
  color: string;
  size: number;
  fontSize: number;
}

const Avatar: React.FC<IPropsAvatar> = ({ color, name, fontSize, size }) => {
  let avatarName: string | string[] = name.split(" ");
  avatarName = `${avatarName[0][0]}${
    avatarName[avatarName.length - 1][0]
  }`.toUpperCase();
  return (
    <Container size={size} fontSize={fontSize} color={color}>
      {avatarName}
    </Container>
  );
};

export default Avatar;
