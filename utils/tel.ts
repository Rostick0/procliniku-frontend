export const convertPhoneToDb = (tel: string) =>
  tel?.replace(new RegExp(" ", "g"), "")?.replace("+", "");

export const maskaPhone = "+7 ### ### ## ##";
