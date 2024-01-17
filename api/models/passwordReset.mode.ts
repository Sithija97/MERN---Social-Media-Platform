import mongoose, { Schema } from "mongoose";

const passwordResetSchema = new Schema({
  userId: { type: String, unique: true },
  email: { type: String, unique: true },
  createdAt: Date,
  expiresAt: Date,
});

const PasswordReset = mongoose.model("PasswordReset", passwordResetSchema);
export { PasswordReset };
