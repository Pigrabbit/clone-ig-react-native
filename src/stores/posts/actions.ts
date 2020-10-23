import {
  CommentType,
  DELETE_COMMENT,
  EDIT_COMMENT,
  PostActionType,
  WRITE_COMMENT,
} from './types';

export function writeComment(commentList: CommentType[]): PostActionType {
  return {
    type: WRITE_COMMENT,
    commentList,
  };
}

export function editComment(commentList: CommentType[]): PostActionType {
  return {
    type: EDIT_COMMENT,
    commentList,
  };
}

export function deleteComment(): PostActionType {
  return {
    type: DELETE_COMMENT,
  };
}
