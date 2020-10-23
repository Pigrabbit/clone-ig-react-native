import { CommentType } from '../../components/PostComment';

export const WRITE_COMMENT = 'WRITE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

interface writeCommentAction {
  type: typeof WRITE_COMMENT;
  comment: CommentType;
}

interface editCommentAction {
  type: typeof EDIT_COMMENT;
  comment: CommentType;
}

interface deleteCommentAction {
  type: typeof DELETE_COMMENT;
}

export type PostActionType =
  | writeCommentAction
  | editCommentAction
  | deleteCommentAction;
