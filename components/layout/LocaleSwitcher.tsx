"use client";
import { useLocale, useTranslations } from "next-intl";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { TranslationIcon } from "../icons";
import { useTransition } from "react";
import { SharedSelection } from "@nextui-org/system";
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const { locales } = routing;
    const t = useTranslations("LocaleSwitcher");
    const [isPending, startTransition] = useTransition();
    function onSelectChange(keys: SharedSelection) {
        // const nextLocale = event.target.value as Locale;
        const nextLocale = keys.currentKey;
        console.log(nextLocale);
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }
    return (
        <Dropdown>
            <NavbarItem className="p-0">
                <DropdownTrigger disabled={isPending} className="p-0">
                    <Button
                        className="p-0 min-w-min bg-transparent data-[hover=true]:bg-transparent"
                        disableRipple
                        radius="sm"
                        variant="light"
                    >
                        <TranslationIcon className="fill-default-500" />
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="Single selection"
                className="p-1 !min-w-10"
                selectionMode="single"
                selectedKeys={[locale]}
                onSelectionChange={onSelectChange}
                variant="flat"
                disallowEmptySelection
                itemClasses={{
                    base: "gap-1",
                }}
            >
                {/* <DropdownItem key={cur}>
                        {t("locale", { locale: cur })}
                    </DropdownItem> */}
                <DropdownItem
                    key={locales[0]}
                    // startContent={icons.scale}
                >
                    {t("locale", { locale: locales[0] })}
                </DropdownItem>
                <DropdownItem
                    key={locales[1]}
                    // startContent={icons.scale}
                >
                    {t("locale", { locale: locales[1] })}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        // <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        //   {routing.locales.map((cur) => (
        //     <option key={cur} value={cur}>
        //       {t("locale", { locale: cur })}
        //     </option>
        //   ))}
        // </LocaleSwitcherSelect>
    );
}
