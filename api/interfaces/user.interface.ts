import { Document } from "mongoose";
import { Types } from "mongoose";

interface User extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  location?: string;
  profileUrl?: string;
  profession?: string;
  friends: Types.ObjectId[] | any;
  views: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export { User };
