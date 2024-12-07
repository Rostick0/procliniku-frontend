import type ICategory from "./Category";
import type IClinic from "./clinic";

export default interface IClinicCategory {
  id: number;
  clinic_id: number;
  category_id: number;
  clinic?: IClinic;
  category?: ICategory;
}
