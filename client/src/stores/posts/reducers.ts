import {
  DELETE_COMMENT,
  EDIT_COMMENT,
  PostActionType,
  PostState,
  SELECT_COMMENT_TO_EDIT,
  WRITE_COMMENT,
} from './types';
import produce from 'immer';

const initialState: PostState = {
  postList: [
    {
      id: 1,
      writer: 'pigrabbit',
      body: '여행마렵다... 언제 또 가지ㅜㅜ',
      imgURL:
        'https://media.nkba.org/uploads/2017/09/Pine-Glades-Wetlands-Natural-Area-Sunset-Square-1024x1024.jpg',
      comments: [
        {
          id: 1,
          writer: 'joedoe',
          content: '우와 사진어디야?',
        },
        {
          id: 2,
          writer: 'resit',
          content: 'Awesome picture!',
        },
      ],
    },
    {
      id: 2,
      writer: 'myrib',
      body: '터키터키터키',
      imgURL:
        'https://static.toiimg.com/photo/64986478/Cappadocia.jpg?width=748&resize=4',
      comments: [
        {
          id: 1,
          writer: 'donald',
          content: '열기구 슈우웅',
        },
      ],
    },
  ],
  editInProgessComment: null,
};

export function postReducer(
  state = initialState,
  action: PostActionType,
): PostState {
  switch (action.type) {
    case WRITE_COMMENT:
      return produce(state, (draftState) => {
        const currentPost = draftState.postList.filter(
          (post) => post.id === action.payload.postId,
        )[0];
        currentPost.comments.push({
          ...action.payload.comment,
          id: currentPost.comments.length + 1,
        });
      });

    case SELECT_COMMENT_TO_EDIT:
      return produce(state, (draftState) => {
        draftState.editInProgessComment = action.payload.editInProgressComment;
      });
    case EDIT_COMMENT:
      return produce(state, (draftState) => {
        const currentPost = draftState.postList.filter(
          (post) => post.id === action.payload.postId,
        )[0];
        const currentComment = currentPost.comments.filter(
          (comment) => comment.id === action.payload.comment.id,
        )[0];
        currentComment.content = action.payload.comment.content;
      });
    case DELETE_COMMENT:
      return produce(state, (draftState) => {
        const currentPost = draftState.postList.filter(
          (post) => post.id === action.payload.postId,
        )[0];
        currentPost.comments = currentPost.comments.filter(
          (comment) => comment.id !== action.payload.commentId,
        );
      });
    default:
      return { ...state };
  }
}
