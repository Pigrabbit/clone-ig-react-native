export type CommentType = {
  writer: string;
  content: string;
};

export type PostType = {
  writer: string;
  body: string;
  imgURL: string;
  comments: CommentType[];
};

export interface PostState {
  postList: PostType[]
}

export const WRITE_COMMENT = 'WRITE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

interface writeCommentAction {
  type: typeof WRITE_COMMENT;
  commentList: CommentType[];
}

interface editCommentAction {
  type: typeof EDIT_COMMENT;
  commentList: CommentType[];
}

interface deleteCommentAction {
  type: typeof DELETE_COMMENT;
}

export type PostActionType =
  | writeCommentAction
  | editCommentAction
  | deleteCommentAction;
