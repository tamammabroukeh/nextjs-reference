"use server";
import { isString } from "./lodash";
import { getLocale } from "next-intl/server";
import { defaultLocale } from "@/i18n/routing";
import { Translation } from "@/types/translation";

export async function getCurrentLocaleString(localeString: Translation) {
    const currentLocale = (await getLocale()) || defaultLocale;
    return (
        isString(localeString[currentLocale]) ??
        isString(localeString[defaultLocale]) ??
        isString(localeString["en"]) ??
        ""
    );
}