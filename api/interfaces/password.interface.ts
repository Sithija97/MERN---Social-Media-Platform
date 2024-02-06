import { Document, Types } from "mongoose";

export interface PasswordReset extends Document {
  userId: string;
  email: string;
  createdAt: Date;
  expiresAt: Date;
}
