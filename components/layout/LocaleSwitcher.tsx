import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

import { routing } from "@/i18n/routing";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

export default function LocaleSwitcher() {
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();

    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        // endContent={icons.chevron}
                        radius="sm"
                        variant="light"
                    >
                        Features
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                    base: "gap-4",
                }}
            >
                <DropdownItem
                    key="autoscaling"
                    description="ACME scales apps to meet user demand, automagically, based on load."
                    // startContent={icons.scale}
                >
                    Autoscaling
                </DropdownItem>
                <DropdownItem
                    key="usage_metrics"
                    description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                    // startContent={icons.activity}
                >
                    Usage Metrics
                </DropdownItem>
                <DropdownItem
                    key="production_ready"
                    description="ACME runs on ACME, join us and others serving requests at web scale."
                    // startContent={icons.flash}
                >
                    Production Ready
                </DropdownItem>
                <DropdownItem
                    key="99_uptime"
                    description="Applications stay on the grid with high availability and high uptime guarantees."
                    // startContent={icons.server}
                >
                    +99% Uptime
                </DropdownItem>
                <DropdownItem
                    key="supreme_support"
                    description="Overcome any challenge with a supporting team ready to respond."
                    // startContent={icons.user}
                >
                    +Supreme Support
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
