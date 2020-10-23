import {
  CommentType,
  DELETE_COMMENT,
  EDIT_COMMENT,
  PostActionType,
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
