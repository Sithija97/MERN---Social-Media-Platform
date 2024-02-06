import mongoose, { Schema } from "mongoose";
import { EmailVerfication } from "../interfaces/emailVerfification.interface.js";

const emailVerificationSchema = new Schema<EmailVerfication>({
  userId: String,
  token: String,
  createdAt: Date,
  expiresAt: Date,
});

const EmailVerification = mongoose.model(
  "EmailVerification",
  emailVerificationSchema
);
export { EmailVerification };
