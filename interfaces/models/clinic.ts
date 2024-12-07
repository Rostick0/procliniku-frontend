import type ITimestamps from "../Timestamps";
import type ICategory from "./Category";
import type IClinicCategory from "./ClinicCategory";
import type IClinicPhone from "./ClinicPhone";

export default interface IClinic {
  id: number;
  name: string;
  address: string;
  rating: number;
  link: string;
  link_name: string;
  longitude: number;
  latitude: number;
  description?: string;
  owner_id: number;
  main_category: ICategory;
  clinic_categories?: IClinicCategory[];
  clinic_phones?: IClinicPhone[];
}
