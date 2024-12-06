export interface clinic {
  id: number;
  name: string;
  address: string;
  phone: string;
  rating: number;
  longitude: number;
  latitude: number;
  description?: string;
  owner_id: number;
}
