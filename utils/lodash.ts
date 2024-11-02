export function isLocaleString(localeString: any): boolean {
    if (typeof localeString !== "object" || localeString === null) return false;
    const hasValidLocale = (locale: string) =>
        typeof localeString[locale] === "string" &&
        localeString[locale]?.trim().length > 0;

    return hasValidLocale("en") || hasValidLocale("ar");
}
export function isString(text: string): string | undefined {
    return typeof text === "string" && text?.trim().length > 0
        ? text
        : undefined;
}
export function isValue(value: any): true | undefined {
    // console.log("value", value);
    if (value === undefined || value === null) return undefined;
    if (typeof value === "string" && value?.trim().length === 0)
        return undefined;
    else if (typeof value === "object" && Object.keys(value).length === 0)
        return undefined;
    else if (Array.isArray(value) && value.length === 0) return undefined;
    else return true;
}

// export function _isLocaleString(localeString: any) {
//     // console.log("1");
//     if (typeof localeString !== "object" || localeString === null) return false;
//     // console.log("2", !localeString?.en, !localeString?.ar);
//     if (
//         (localeString?.en && typeof localeString.en === "string") ||
//         (localeString?.ar && typeof localeString.ar === "string")
//     ) {
//         // console.log("3");
//         let isLocale = false;
//         if (localeString?.en && localeString?.en.length > 0) isLocale = true;
//         if (localeString?.ar && localeString?.ar.length > 0) isLocale = true;
//         return isLocale;
//     }
//     // console.log("4");
//     return false;
// }
