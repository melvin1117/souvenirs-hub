export interface Comment {
  id: number;
  postId: number;
  comment: string;
  commenter: string;
  createdTime: Date;
  updatedTime?: Date;
  isDeleted: boolean;
}
