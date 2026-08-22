"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "@/app/siteConfig";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white shadow-sm py-3"}`}>
            <div className="max-w-[1140px] mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Brand Logo & Name */}
                    <Link href="/" className="flex items-center space-x-3 group hover:no-underline">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-1 border border-gray-100 group-hover:scale-105 transition-transform">
                            <Image 
                                src="/img/logo.png" 
                                alt={siteConfig.company.name} 
                                width={40} 
                                height={40}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-xl tracking-tight leading-none bg-gradient-to-r from-[#E619B0] via-[#C11292] to-[#8A0F6B] bg-clip-text text-transparent">
                                {siteConfig.company.name}
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#4D0838]/70 leading-tight">
                                Tours & Travel
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`relative font-semibold text-sm transition-colors duration-200 py-1 hover:text-[#E619B0] hover:no-underline ${
                                        isActive ? "text-[#E619B0]" : "text-gray-700"
                                    }`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E619B0] rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Header Action CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] hover:from-[#C11292] hover:to-[#6B0A52] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:no-underline flex items-center space-x-2"
                        >
                            <span>Book A Safari</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        title="Toggle navigation"
                        type="button"
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Navigation Drawer */}
                {mobileOpen && (
                    <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 pb-4 space-y-3 animate-fadeIn">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`block py-2 px-3 rounded-lg font-medium text-base transition-colors ${
                                        isActive ? "bg-[#FDE9F8] text-[#E619B0]" : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="block w-full text-center bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] text-white font-semibold py-2.5 rounded-xl shadow-md"
                            >
                                Book A Safari
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;