import useFetcher from "../../utils/fetch";
import type ICategory from "~/interfaces/models/Category";

export interface ICategoriesMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<{ data: ICategory }>;
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<{ data: ICategory[] }>;
}

export default <ICategoriesMethods>{
  get: async ({ id, params }) => useFetcher().get(`/categories/${id}`, params),
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/categories`, params, headers),
};
