import type IClinicWorker from "~/interfaces/models/ClinicWorker";
import useFetcher from "../../utils/fetch";

export interface IClinicWorkerMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<{ data: IClinicWorker }>;
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<{ data: IClinicWorker[] }>;
  create: ({
    data,
    params,
  }: {
    data: any;
    params?: Record<string, any>;
  }) => Promise<IClinicWorker & IErrorData>;
  delete: ({
    id,
    params,
  }: {
    id: string | number;
    params?: Record<string, any>;
  }) => Promise<{ message: string } & IErrorData>;
}

export default <IClinicWorkerMethods>{
  get: async ({ id, params }) =>
    useFetcher().get(`/clinic-workers/${id}`, params),
  getAll: async ({ params }, headers?: any) =>
    useFetcher().get(`/clinic-workers`, params, headers),
  create: async ({ data }) => useFetcher().post(`/clinic-workers`, data),
  delete: async ({ id, params }) =>
    useFetcher().delete(`/clinic-workers/${id}`, params),
};
