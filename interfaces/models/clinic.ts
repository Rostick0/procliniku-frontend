import type ITimestamps from "../Timestamps";
import type ICategory from "./Category";
import type ICity from "./City";
import type IClinicCategory from "./ClinicCategory";
import type IClinicPhone from "./ClinicPhone";
import type IFavorite from "./Favorite";
import type IImageRelat from "./ImageRelat";

export default interface IClinic extends ITimestamps {
  id: number;
  name: string;
  address: string;
  rating: number;
  link: string;
  link_name: string;
  longitude: number;
  latitude: number;
  description?: string;
  is_verification: boolean;
  owner_id: number;
  main_category: ICategory;
  clinic_categories?: IClinicCategory[];
  city?: ICity;
  clinic_phones?: IClinicPhone[];
  images?: IImageRelat[];
  my_favorite?: IFavorite;
}
