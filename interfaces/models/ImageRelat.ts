import type IImage from "./Image";

export default interface IImageRelat {
  id: number;
  image_id: number;
  created_at: Date;
  image?: IImage;
}
