import {
  CommentType,
  DELETE_COMMENT,
  EDIT_COMMENT,
  PostActionType,
  SELECT_COMMENT_TO_EDIT,
  WRITE_COMMENT,
} from './types';

export function writeComment(
  postId: number,
  comment: CommentType,
): PostActionType {
  return {
    type: WRITE_COMMENT,
    payload: {
      postId,
      comment,
    },
  };
}

export function selectCommentToEdit(
  editInProgressComment: CommentType | null
): PostActionType {
  return {
    type: SELECT_COMMENT_TO_EDIT,
    payload: {
      editInProgressComment
    },
  };
}

export function editComment(
  postId: number,
  comment: CommentType,
): PostActionType {
  return {
    type: EDIT_COMMENT,
    payload: {
      postId,
      comment,
    },
  };
}

export function deleteComment(postId: number): PostActionType {
  return {
    type: DELETE_COMMENT,
    postId,
  };
}
