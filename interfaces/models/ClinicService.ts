import type IClinic from "./Clinic";
import type IService from "./Service";

export default interface IClinicService {
  id: number;
  clinic_id: number;
  service_id: number;
  clinic?: IClinic;
  service?: IService;
}
