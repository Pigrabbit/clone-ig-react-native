import {
  DELETE_COMMENT,
  EDIT_COMMENT,
  PostActionType,
  PostState,
  WRITE_COMMENT
} from './types';

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
};

export function postReducer(
  state = initialState,
  action: PostActionType,
): PostState {
  switch (action.type) {
    case WRITE_COMMENT:
      return {
        ...state,
        postList: state.postList.map((post) => {
          if (post.id !== action.payload.postId) return post;
          return {
            ...post,
            comments: post.comments.concat(action.payload.comment),
          };
        }),
      };
    case EDIT_COMMENT:
      return {
        ...state,
        postList: state.postList.map((post) => {
          if (post.id !== action.payload.postId) return post;
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment.id !== action.payload.comment.id) return comment;
              return action.payload.comment;
            }),
          };
        }),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        postList: state.postList.map((post) => {
          if (post.id !== action.postId) return post;
          return {
            ...post,
            comments: post.comments.filter(
              (comment) => comment.id !== action.postId,
            ),
          };
        }),
      };
    default:
      return { ...state };
  }
}