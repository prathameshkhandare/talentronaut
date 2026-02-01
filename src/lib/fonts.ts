import { EB_Garamond, Inter } from "next/font/google";
import localFont from "next/font/local";

/**
 * BOCHAN (Primary Font)
 * Usage: Headings, Titles, Large Displays, Hero Sections
 * Local Font: Bochan
 * Font Family: Serif
 */
export const bochan = localFont({
  src: [
    {
      path: "../../public/fonts/BochanAlternate-OV6OP.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bochan-Ea3Ge.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bochan",
  display: "swap",
});

/**
 * MINION DISPLAY (Secondary Font)
 * Usage: Body Text, Paragraphs, UI Elements, Buttons, Labels
 * Google Font: EB Garamond (closest alternative to Minion Display)
 * Font Family: Serif
 */
export const minion = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-minion",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

/**
 * INTER (Fallback Font)
 * Usage: Fallback for system text, technical components
 * Font Family: Sans-serif
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
