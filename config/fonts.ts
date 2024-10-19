// import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });
import localFont from "next/font/local";
export const Colfax = localFont({
  src: [
    {
      path: "../public/colfax-font/Colfax-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/colfax-font/Colfax-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/colfax-font/Colfax-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/colfax-font/Colfax-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/colfax-font/Colfax-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/colfax-font/Colfax-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
});