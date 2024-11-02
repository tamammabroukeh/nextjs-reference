export function getLangDir(value: string) {
  return value.toLocaleLowerCase() === "ar" ? "rtl" : "ltr";
}
