

export interface IThreads {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  updateAt: string;
  user: IUser
  likes: ILike[]
  replies: IReplies[]
}

export interface ICreateThread {
  content: string
  image: Blob | MediaSource | string
}

export interface ILike {
  createdAt: Date;
  id: number;
  updateAt: Date;
  user: IUser
}
export interface IReplies {
  content: string
  createdAt: Date
  id: number
  image: string
  updateAt: Date
  user: IUser
}


export interface IUser {
  createdAt: string;
  email: string;
  fullname: string;
  id: number;
  password: string;
  profile_description: string;
  profile_picture: string;
  username: string;
}
