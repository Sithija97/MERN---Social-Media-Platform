import { Document, Types } from "mongoose";

export interface FriendRequest extends Document {
  requestTo: Types.ObjectId;
  requestFrom: Types.ObjectId;
  requestStatus: string;
}
