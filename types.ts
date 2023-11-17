export type ClassPost = {
  id: string;
  title: string;
  body: string;
  userId: string;
  user : {
    name: string;
    email: string;
  };
  createdAt: string | number | Date;
  updatedAt: string;
};
export type ClassData = {
  id: string;
  classCode: string;
  classPosts: ClassPost[];
  members: any[];
  name: string;
  owner: string;
  subject: string;
};
