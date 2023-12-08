export type ClassPostType = {
  id: string;
  body: string;
  userId: string;
  user : User;
  createdAt: string | number | Date;
  updatedAt: string | number | Date;
};
export type ClassData = {
  id: string;
  classCode: string;
  classPosts: ClassPostType[];
  members: any[];
  name: string;
  owner: string;
  subject: string;
};

export type User = {
  id: string;
  userId : string;
  name: string;
  email: string;
  imageUrl: string;
}

export type Comment = {
  id: string;
  body: string;
  userId: string;
  user : User;
  createdAt: string | number | Date;
  updatedAt: string | number | Date;
  postId: string;
};