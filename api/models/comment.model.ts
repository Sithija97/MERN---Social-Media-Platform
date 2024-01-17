import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    postId: { type: Schema.Types.ObjectId, ref: "Post" },
    comment: { type: String, required: true },
    from: { type: String, required: true },
    replies: [
      {
        replyId: { type: Schema.Types.ObjectId },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        from: { type: String },
        replyAt: { type: String },
        commment: { type: String },
        createdAt: { type: Date, default: Date.now() },
        updatedAt: { type: Date, default: Date.now() },
        likes: { type: String },
      },
    ],
    likes: { type: String },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export { Comment };
