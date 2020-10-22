import { PostType } from "./components/Post"

export const FETCHED_POSTS: PostType[] = [
  {
    writer: 'pigrabbit',
    body: '여행마렵다... 언제 또 가지ㅜㅜ',
    imgURL: 'https://media.nkba.org/uploads/2017/09/Pine-Glades-Wetlands-Natural-Area-Sunset-Square-1024x1024.jpg',
    comments: [
      {
        writer: 'joedoe',
        content: '우와 사진어디야?'
      },
      {
        writer: 'resit',
        content: 'Awesome picture!'
      }
    ]
  },
  {
    writer: 'myrib',
    body: '터키터키터키',
    imgURL: 'https://static.toiimg.com/photo/64986478/Cappadocia.jpg?width=748&resize=4',
    comments: [
      {
        writer: 'donald',
        content: '열기구 슈우웅'
      }
    ]
  }
]