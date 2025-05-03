import useFetcher from "../../utils/fetch";
import type IArticle from "~/interfaces/models/Article";

export interface IArticlesMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<{ data: IArticle }>;
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<{ data: IArticle[] }>;
  update: ({
    id,
    data,
    params,
  }: {
    id: string | number;
    data: any;
    params?: Record<string, any>;
  }) => Promise<IArticle & IErrorData>;
  create: ({
    data,
    params,
  }: {
    data: any;
    params?: Record<string, any>;
  }) => Promise<IArticle & IErrorData>;
}

export default <IArticlesMethods>{
  get: async ({ id, params }) => useFetcher().get(`/articles/${id}`, params),
  getAll: async ({ params }, headers?: any) =>
    useFetcher().get(`/articles`, params, headers),
  update: async ({ id, data, params }) =>
    useFetcher().patch(`/articles/${id}`, data, params),
  create: async ({ data }) => useFetcher().post(`/articles`, data),
  // delete: async ({ id, params }) => useFetcher().delete(`/articles/${id}`, params),
};
