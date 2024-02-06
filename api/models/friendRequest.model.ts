import mongoose, { Schema } from "mongoose";
import { FriendRequest } from "../interfaces/friendRequest.interface.js";

const friendRequestSchema = new Schema<FriendRequest>(
  {
    requestTo: { type: Schema.Types.ObjectId, ref: "User" },
    requestFrom: { type: Schema.Types.ObjectId, ref: "User" },
    requestStatus: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);
export { FriendRequest };
