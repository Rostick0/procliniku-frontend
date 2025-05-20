import type IReview from "~/interfaces/models/Review";
import useFetcher from "../../utils/fetch";

export interface IReviewsMethods {
  getAll: (
    { params }: { params: any },
    headers?: any
  ) => Promise<{ data: IReview[] }>;
  createOrUpdate: ({
    data,
    params,
  }: {
    data: any;
    params?: Record<string, any>;
  }) => Promise<{ data: IReview } & IErrorData>;
  delete: ({
    id,
    params,
  }: {
    id: string | number;
    params?: Record<string, any>;
  }) => Promise<{ message: string } & IErrorData>;
}

export default <IReviewsMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/reviews`, params, headers),
  createOrUpdate: async ({ data }) => useFetcher().post(`/reviews`, data),
  delete: async ({ id, params }) =>
    useFetcher().delete(`/reviews/${id}`, params),
};
