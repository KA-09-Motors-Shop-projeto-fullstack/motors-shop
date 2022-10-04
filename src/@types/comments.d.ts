import { IUser } from "./users";

export interface IComment {
  id: string;
  text: string;
  user: IUser;
  createdAt: string;
}

interface IPostComment {
  comment: {
    text: string;
  };
  token: string;
  advertisementId: string;
}

export type CommentContextType = {
  postComment: (data: IPostComment) => Promise<IComment>;
};
