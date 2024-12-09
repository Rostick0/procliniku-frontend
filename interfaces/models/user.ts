import type ITimestamps from "../Timestamps";

export interface ILogin {
  email: string;
  password: string;
}

// "login" |
export type EmailCodeType = "register" | "update_email";

export interface IRegister {
  email: string;
  password: string;
  code: string | number;
}

enum UserRole {
  admin = "admin",
  owner = "owner",
  client = "client",
}

export default interface IUser extends ITimestamps {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthdate: Date;
  role: typeof UserRole;
}
