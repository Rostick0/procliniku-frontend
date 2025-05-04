import type ITimestamps from "../Timestamps";

export default interface IClinicWorkTime extends ITimestamps {
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  time_start: string;
  time_end: string;
  clinic_id: number;
}
