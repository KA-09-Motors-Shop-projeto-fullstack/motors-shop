import React, { createContext } from "react";
import { getTokenLocalStorage } from "services/auth";
import {
  CommentContextType,
  IComment,
  IPostComment,
} from "../../@types/comments";
import api from "../../services/api";

interface IProps {
  children?: React.ReactNode;
}

export const CommentContext = createContext<CommentContextType | null>(null);

export const CommentProvider: React.FC<IProps> = ({ children }) => {
  const postComment = async ({
    advertisementId,
    comment,
    token,
  }: IPostComment) => {
    const { data } = await api.post<IComment>(
      `/advertisements/${advertisementId}/comments`,
      comment,
      {
        headers: {
          Authorization: `Bearer ${getTokenLocalStorage()}`,
        },
      }
    );

    return data;
  };

  return (
    <CommentContext.Provider value={{ postComment }}>
      {children}
    </CommentContext.Provider>
  );
};
