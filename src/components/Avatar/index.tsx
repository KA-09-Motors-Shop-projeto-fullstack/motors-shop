import React from "react";
import { Container } from "./styles";

export interface IPropsAvatar {
  name: string;
  color: string;
  size: number;
  fontSize: number;
}

export const Avatar: React.FC<IPropsAvatar> = ({
  color,
  name,
  fontSize,
  size,
}) => {
  const createAvatarName = (firstName: string, lastName: string = "") => {
    return lastName[0]
      ? `${firstName[0]}${lastName[0]}`.toUpperCase()
      : firstName[0].toUpperCase();
  };

  const [firstName] = name.split(" ");
  const lastName = name.split(" ").pop();
  const avatarName =
    lastName !== firstName
      ? createAvatarName(firstName, lastName)
      : createAvatarName(firstName);

  return (
    <Container size={size} fontSize={fontSize} color={color}>
      {avatarName}
    </Container>
  );
};
