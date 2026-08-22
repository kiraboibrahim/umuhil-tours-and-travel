import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

import "./global.css";
import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import siteConfig from "./siteConfig";

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['600', '700', '800', '900'],
    display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.company.name,
        template: `%s | ${siteConfig.company.name}`
    },
    description: siteConfig.company.tagline,
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon.svg", type: "image/svg+xml" }
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
        ],
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
        title: siteConfig.company.name,
        statusBarStyle: "default",
        capable: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased text-gray-800 bg-white`}>
                <Topbar />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
