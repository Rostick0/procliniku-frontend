import type ITimestamps from "../Timestamps";
import type IClinic from "./Clinic";
import type IUser from "./User";

type clinicWorkerRole = "owner" | "provider" | "specialist";

export default interface IClinicWorker extends ITimestamps {
  id: number;
  clinic_id: number;
  user_id: number;
  role: clinicWorkerRole;
  clinic?: IClinic;
  user?: IUser;
}
