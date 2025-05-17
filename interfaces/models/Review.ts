import type IClinic from "./Clinic";
import type IUser from "./User";

export default interface IReview {
  id: number;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  clinic_id: number;
  user_id: number;
  clinic?: IClinic;
  user?: IUser;
}
