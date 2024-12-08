import type IServiceCategory from "./ServiceCategory";

export default interface IService {
  id: number;
  name: string;
  service_category_id: number;
  service_category?: IServiceCategory;
}
