import React from "react";
import Avatar from "../../components/Avatar";
import { CommentaryStyled, TitleCommentary, TextCommentary } from "./styles";

interface IPropsCommentary {
  name?: string;
  color?: string;
  textCommentary: string;
}

const Commentary = ({ name, color, textCommentary }: IPropsCommentary) => {
  return (
    <CommentaryStyled>
      <TitleCommentary>
        <Avatar name={`${name}`} color={`${color}`} size={24} fontSize={20} />
        <h2>{name}</h2>
        <h4>tempo atrás</h4>
      </TitleCommentary>
      <TextCommentary>
        <p>{textCommentary}</p>
      </TextCommentary>
    </CommentaryStyled>
  );
};

export default Commentary;
