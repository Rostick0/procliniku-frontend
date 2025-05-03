export const ROUTES_NAMES = {
  cities: "/cities",
  clinic: "/clinic",
  profile: "/profile",
  profile_edit: "/profile/edit",
  profile_favorites: "/profile/favorites",
  profile_appointment_future: "/profile/appointment/future",
  profile_appointment_past: "/profile/appointment/past",
  clinic_profile: "/clinic-profile",
  clinic_profile_clinics: "/clinic-profile/clinics",
  clinic_profile_clinics_id: (id: number) => `/clinic-profile/clinics/${id}`,
  clinic_profile_clinics_info: (id: number) =>
    `/clinic-profile/clinics/${id}/info`,
  clinic_profile_clinics_address: (id: number) =>
    `/clinic-profile/clinics/${id}/address`,
  clinic_profile_clinics_images: (id: number) =>
    `/clinic-profile/clinics/${id}/images`,
  clinic_profile_clinics_tags: (id: number) =>
    `/clinic-profile/clinics/${id}/tags`,
  clinic_profile_clinics_articles: (id: number) =>
    `/clinic-profile/clinics/${id}/articles`,
  clinic_profile_clinics_workers: (id: number) =>
    `/clinic-profile/clinics/${id}/workers`,
  clinic_profile_cnc: "/clinic-profile/cnc",
  clinic_profile_settings: "/clinic-profile/settings",
  clinic_profile_help: "/clinic-profile/help",
  clinic_profile_legal_entity: "/clinic-profile/legal_entity",
  about: "/about",
  main: "/",
  login: "/login",
  offer: "/offer",
  policy: "/policy",
  regions: "/regions",
  register: "/register",
};
