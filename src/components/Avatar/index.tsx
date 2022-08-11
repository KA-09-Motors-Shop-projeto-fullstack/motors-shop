import React from "react";
import { Container } from "./styles";

export interface IPropsAvatar {
  name: string;
  color: string;
  width: number;
  height: number;
  fontSize: number;
}

const Avatar: React.FC<IPropsAvatar> = ({
  color,
  name,
  fontSize,
  height,
  width,
}) => {
  let avatarName: string | string[] = name.split(" ");
  avatarName = `${avatarName[0][0]}${
    avatarName[avatarName.length - 1][0]
  }`.toUpperCase();
  return (
    <Container width={width} height={height} fontSize={fontSize} color={color}>
      {avatarName}
    </Container>
  );
};

export default Avatar;
