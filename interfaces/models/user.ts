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

export const USER_ROLE = {
  admin: "admin",
  owner: "owner",
  worker: "worker",
  client: "client",
};

type UserRole = keyof typeof USER_ROLE;

// enum UserRole {
//   admin = "admin",
//   owner = "owner",
//   client = "client",
// }

export default interface IUser extends ITimestamps {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthdate: Date;
  role: UserRole;
}
