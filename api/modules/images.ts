import type IImage from "~/interfaces/models/Image";
import useFetcher from "../../utils/fetch";

export interface IImageMethods {
  create: ({
    data,
  }: {
    data: FormData;
  }) => Promise<{ data: IImage } & IErrorData>;
}

export default <IImageMethods>{
  create: async ({ data }) => useFetcher().post(`/images`, data),
};
