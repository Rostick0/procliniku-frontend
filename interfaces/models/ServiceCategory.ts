import type IService from "./Service";

export default interface IServiceCategory {
  id: number;
  name: string;
  service_type_id: number;
  services?: IService[];
}
