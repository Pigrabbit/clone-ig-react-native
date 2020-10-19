export type CommentType = {
  writer: string
  content: string
}

export type PostType = {
  writer: string
  body: string
  imgURL: string
  comments: Comment[]
}

export const FETCHED_POSTS: Post[] = [
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
  }
]