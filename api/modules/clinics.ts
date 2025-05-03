import type IClinic from "~/interfaces/models/Clinic";
import useFetcher from "../../utils/fetch";
import type { apiMethods } from "../index";

export interface IClinicsMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<{ data: IClinic }>;
  showByLinkName: ({
    link_name,
    params,
  }: {
    link_name: string;
    params?: any;
  }) => Promise<{ data: IClinic }>;
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<{ data: IClinic[] }>;
  update: ({
    id,
    data,
    params,
  }: {
    id: string | number;
    data: any;
    params?: Record<string, any>;
  }) => Promise<IClinic & IErrorData>;
}

export default <IClinicsMethods>{
  get: async ({ id, params }) => useFetcher().get(`/clinics/${id}`, params),
  showByLinkName: async ({ link_name, params }) =>
    useFetcher().get(`/clinics/link/${link_name}`, params),
  // delete: async ({ id, params }) => useFetcher().delete(`/clinics/${id}`, params),
  update: async ({ id, data, params }) =>
    useFetcher().patch(`/clinics/${id}`, data, params),
  getAll: async ({ params }, headers?: any) =>
    useFetcher().get(`/clinics`, params, headers),
  // create: async ({ data }) => useFetcher().post(`/clinics`, data),
};
