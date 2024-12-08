import type IRegion from "./Region";

export default interface ICity {
  id: number;
  name: string;
  region_id: number;
  region?: IRegion;
}
