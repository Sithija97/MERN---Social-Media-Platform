export interface Friend {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  friends: string[];
  views: string[];
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profileUrl?: string;
  location?: string;
  profession?: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  friends: Friend[];
  views: (string | number)[];
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  profileUrl?: string;
  token: string;
}

export interface Request {
  _id: string;
  requestFrom: Friend;
}

export interface SuggestedFriend extends Friend {
  _id: string;
}

export interface Reply {
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    profileUrl: string;
    location: string;
  };
  from: string;
  replyAt: string;
  comment: string;
  created_At: string;
  updated_At: string;
  likes: string[];
  _id: string;
}

export interface Comment {
  _id: string;
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    profileUrl: string;
  };
  postId: string;
  comment: string;
  from: string;
  likes: string[];
  replies: Reply[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Post {
  _id: string;
  userId: User;
  description: string;
  image: string | undefined;
  likes: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface InitialState {
  user: User | null;
  edit: boolean;
}
