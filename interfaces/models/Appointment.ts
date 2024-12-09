import type ITimestamps from "../Timestamps";
import type IClinic from "./Clinic";
import type IService from "./Service";
import type IUser from "./User";

export default interface IAppointment extends ITimestamps {
  id: number;
  price: number;
  date: Date;
  service_id: number;
  clinic_id: number;
  user_id: number;
  service?: IService;
  clinic?: IClinic;
  user?: IUser;
}
