import useFetcher from "../../utils/fetch";

export interface ICitiesMethods {
  getAll: ({ params }: { params: any }, header?: any) => Promise<any>;
}

export default <ICitiesMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/cities`, params, headers),
};
