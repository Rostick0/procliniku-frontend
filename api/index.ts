import appointments from "./modules/appointments";
import articles from "./modules/articles";
import categories from "./modules/categories";
import cities from "./modules/cities";
import clinics from "./modules/clinics";
import clinicWorker from "./modules/clinicWorker";
import emailCode from "./modules/emailCode";
import favorites from "./modules/favorites";
import images from "./modules/images";
import regions from "./modules/regions";
import reviews from "./modules/reviews";
import serviceCategories from "./modules/serviceCategories";
import services from "./modules/services";
import userProfile from "./modules/userProfile";
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
  appointments,
  articles,
  categories,
  cities,
  clinics,
  clinicWorker,
  regions,
  reviews,
  emailCode,
  favorites,
  images,
  serviceCategories,
  services,
  userProfile,
  users,
};

type apiNames = keyof typeof api;

export { api as default, type apiNames, type apiMethods };
