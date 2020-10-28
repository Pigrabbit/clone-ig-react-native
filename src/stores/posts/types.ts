export type CommentType = {
  id: number;
  writer: string;
  content: string;
};

export type PostType = {
  id: number;
  writer: string;
  body: string;
  imgURL: string;
  comments: CommentType[];
};

export interface PostState {
  postList: PostType[];
  editInProgessComment: CommentType | null;
}

export const WRITE_COMMENT = 'WRITE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const SELECT_COMMENT_TO_EDIT = 'SELECT_COMMENT_TO_EDIT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

interface writeCommentAction {
  type: typeof WRITE_COMMENT;
  payload: {
    postId: number;
    comment: CommentType;
  };
}

interface selectCommentToEditAction {
  type: typeof SELECT_COMMENT_TO_EDIT;
  payload: {
    editInProgressComment: CommentType | null;
  };
}

interface editCommentAction {
  type: typeof EDIT_COMMENT;
  payload: {
    postId: number;
    comment: CommentType;
  };
}

interface deleteCommentAction {
  type: typeof DELETE_COMMENT;
  payload: {
    postId: number;
    commentId: number;
  };
}

export type PostActionType =
  | writeCommentAction
  | selectCommentToEditAction
  | editCommentAction
  | deleteCommentAction;
