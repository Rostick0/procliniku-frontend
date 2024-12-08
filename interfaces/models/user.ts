import type ITimestamps from "../Timestamps";

export interface ILogin {
  login: string;
  password: string;
}

export interface IRegister {
  login: string;
  password: string;
}

export default interface IUser extends ITimestamps {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}
