import type ITimestamps from "../Timestamps";
import type IClinic from "./Clinic";
import type IUser from "./User";

export default interface IFavorite extends ITimestamps {
  id: number;
  clinic_id: number;
  user_id: number;
  clinic?: IClinic;
  user?: IUser;
}
