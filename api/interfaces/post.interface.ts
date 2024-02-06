import { Document, Types } from "mongoose";

export interface Post extends Document {
  userId: Types.ObjectId;
  description: string;
  image: string;
  views: string;
  likes: string;
  comments: Types.ObjectId;
}
