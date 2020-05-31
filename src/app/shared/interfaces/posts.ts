export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string;
  createdTime: Date;
  updatedTime?: Date;
  isDeleted: boolean;
  commentCount?: number;
}

export interface PostRequest {
  title?: string;
  content?: string;
  author?: string;
  image?: string;
  createdTime: Date;
  updatedTime?: Date;
  isDeleted: boolean;
}
