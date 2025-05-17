import type IReview from "~/interfaces/models/Review";
import useFetcher from "../../utils/fetch";

export interface IReviewsMethods {
  getAll: (
    { params }: { params: any },
    headers?: any
  ) => Promise<{ data: IReview[] }>;
}

export default <IReviewsMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/reviews`, params, headers),
};
