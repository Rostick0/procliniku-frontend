import type IUser from "~/interfaces/models/User";
import useFetcher from "../../utils/fetch";

export interface IUserProfileMethods {
  update: ({ data }: { data: any }) => Promise<{ data: IUser } & IErrorData>;
}

export default <IUserProfileMethods>{
  update: async ({ data }) => useFetcher().patch(`/user-profile`, data),
};
