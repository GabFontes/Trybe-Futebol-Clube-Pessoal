export interface ILogin {
  user: User
  token: string,
}

export type User = {
  id: number;
  username: string;
  role: string;
  email: string;
  password?: string;
};

export type LoginParams = {
  email: string;
  password: string;
};
