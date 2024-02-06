import mongoose, { Schema } from "mongoose";
import { PasswordReset } from "../interfaces/password.interface.js";

const passwordResetSchema = new Schema<PasswordReset>({
  userId: { type: String, unique: true },
  email: { type: String, unique: true },
  createdAt: Date,
  expiresAt: Date,
});

const PasswordReset = mongoose.model("PasswordReset", passwordResetSchema);
export { PasswordReset };
