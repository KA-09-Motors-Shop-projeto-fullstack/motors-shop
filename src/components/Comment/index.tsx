import React from "react";
import { IUser } from "../../@types/users";
import { Avatar } from "../Avatar";
import { formatNameToTwoWords } from "../../utils/format-name-to-two-words";
import {
  CommentaryStyled,
  TitleCommentary,
  TextCommentary,
  Ellipse,
} from "./styles";
import { compareDiffDates } from "../../utils/compare-diff-dates";

interface IPropsComment {
  user: IUser;
  textComment: string;
  date: string;
}

export const Comment = ({ textComment, user, date }: IPropsComment) => {
  return (
    <CommentaryStyled>
      <TitleCommentary>
        <Avatar
          name={user.name}
          color={user.avatarColor}
          size={32}
          fontSize={14}
        />
        <h2>{formatNameToTwoWords(user.name)}</h2>
        <Ellipse />
        <h4>{compareDiffDates(date)}</h4>
      </TitleCommentary>
      <TextCommentary>
        <p>{textComment}</p>
      </TextCommentary>
    </CommentaryStyled>
  );
};
