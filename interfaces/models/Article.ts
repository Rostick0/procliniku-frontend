import type ITimestamps from "../Timestamps";

export default interface IArticle extends ITimestamps {
  id: number;
  title: string;
  content: string;
  is_show: boolean;
  user_id: number;
  clinic_id?: number;
}
