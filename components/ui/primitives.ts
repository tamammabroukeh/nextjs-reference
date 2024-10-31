import { tv } from "tailwind-variants";

export const title = tv({
    base: "tracking-tight inline font-semibold",
    variants: {
        color: {
            primary: "from-primary to-primary/70",
            secondary: "from-secondary to-secondary/70",
            violet: "from-[#FF1CF7] to-[#b249f8]",
            yellow: "from-[#FF705B] to-[#FFB457]",
            blue: "from-[#5EA2EF] to-[#0072F5]",
            cyan: "from-[#00b7fa] to-[#01cfea]",
            green: "from-[#6FEE8D] to-[#17c964]",
            pink: "from-[#FF72E1] to-[#F54C7A]",
            foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
        },
        size: {
            sm: "text-3xl lg:text-4xl",
            md: "text-[2.3rem] lg:text-5xl leading-9",
            lg: "text-4xl lg:text-6xl",
            xl: "text-5xl md:text-6xl lg:text-7xl",
        },
        fullWidth: {
            true: "w-full block",
        },
    },
    defaultVariants: {
        size: "md",
        color: "blue",
    },
    compoundVariants: [
        {
            color: [
                "violet",
                "yellow",
                "blue",
                "cyan",
                "green",
                "pink",
                "primary",
                "secondary",
                "foreground",
            ],
            class: "bg-clip-text text-transparent bg-gradient-to-b",
        },
    ],
});

export const subtitle = tv({
    base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
    variants: {
        fullWidth: {
            true: "!w-full",
        },
    },
    defaultVariants: {
        fullWidth: true,
    },
});
export const sectionWrapper = tv({
    base: "relative z-10 flex flex-col gap-2 w-full",
    variants: {
        isBlurred: {
            true: [
                "bg-transparent",
                "dark:bg-transparent",
                "before:bg-background/10",
                "before:content-['']",
                "before:block",
                "before:z-[-1]",
                "before:absolute",
                "before:inset-0",
                "before:backdrop-blur-md",
                "before:backdrop-saturate-200",
            ],
        },
    },
});
