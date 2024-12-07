import useFetcher from "../../utils/fetch";
import type { apiMethods } from "../index";

export default <apiMethods>{
  get: async ({ id, params }) => useFetcher().get(`/clinics/${id}`, params),
  // delete: async ({ id, params }) => useFetcher().delete(`/clinics/${id}`, params),
  // update: async ({ id, data, params }) =>
  //   useFetcher().patch(`/clinics/${id}`, data, params),
  getAll: async ({ params }, headers?: any) =>
    useFetcher().get(`/clinics`, params, headers),
  create: async ({ data }) => useFetcher().post(`/clinics`, data),
};
