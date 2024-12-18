import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
// import { fontSans } from "@/config/fonts";
import { Colfax } from "@/config/fonts";
import { Navbar } from "@/components/layout/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getLangDir } from "@/i18n/getLangDir";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }
    const messages = await getMessages();
    const dir = getLangDir(locale);
    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background antialiased",
                    // fontSans.variable,
                    Colfax.className
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <NextIntlClientProvider messages={messages}>
                        <div className="relative flex flex-col h-screen">
                            <Navbar />
                            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                                {children}
                            </main>
                            <footer className="w-full flex items-center justify-center py-3">
                                <Link
                                    isExternal
                                    className="flex items-center gap-1 text-current"
                                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                                    title="nextui.org homepage"
                                >
                                    <span className="text-default-600">
                                        Powered by
                                    </span>
                                    <p className="text-primary">NextUI</p>
                                </Link>
                            </footer>
                        </div>
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    );
}
