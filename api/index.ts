import cities from "./modules/cities";
import clinics from "./modules/clinics";
import regions from "./modules/regions";
import users from "./modules/users";

interface apiMethods {
  get?: ({ id, params }: { id: number | string; params?: any }) => Promise<any>;
  getAll?: ({ params }: { params: any }) => Promise<any>;
  create?: ({ data }: { data: any }) => Promise<any>;
  update?: ({
    id,
    data,
    params,
  }: {
    id: number | string;
    data: any;
    params?: any;
  }) => Promise<any>;
  delete?: ({ id, params }: { id: number; params?: any }) => Promise<any>;
}

const api = {
  cities,
  clinics,
  regions,
  users,
};

type apiNames = keyof typeof api;

export { api as default, type apiNames, type apiMethods };
