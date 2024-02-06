import { Document, Types } from "mongoose";

export interface Reply extends Document {
  replyId?: Types.ObjectId;
  userId: Types.ObjectId;
  from: string;
  replyAt: string;
  commment: string;
  createdAt: Date;
  updatedAt: Date;
  likes: string;
}

export interface Comment extends Document {
  userId: Types.ObjectId;
  postId: Types.ObjectId;
  comment: string;
  from: string;
  replies: Reply[];
  likes: string;
  createdAt: Date;
  updatedAt: Date;
}
