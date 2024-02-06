import { Document, Types } from "mongoose";

export interface EmailVerfication extends Document {
  userId: string;
  token: string;
  createdAt: Date;
  expiresAt: Date;
}
