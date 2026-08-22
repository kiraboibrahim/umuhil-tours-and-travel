"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "@/app/siteConfig";
import { X, Menu, Phone, Mail, Compass } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

    // Prevent background scrolling when mobile menu drawer is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileOpen]);

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <>
            <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white shadow-sm py-3"}`}>
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
                            title="Open navigation menu"
                            type="button"
                            className="lg:hidden p-2 rounded-xl text-[#33052A] hover:bg-gray-100 focus:outline-none transition-colors"
                            onClick={() => setMobileOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Slide-from-Right Drawer Navigation */}
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
                    mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Drawer Header */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative w-9 h-9 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-1 border border-gray-100">
                            <Image
                                src="/img/logo.png"
                                alt={siteConfig.company.name}
                                width={36}
                                height={36}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] bg-clip-text text-transparent">
                            {siteConfig.company.name}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={closeMobileMenu}
                        className="w-9 h-9 rounded-full bg-gray-100 text-[#33052A] hover:bg-[#E619B0] hover:text-white flex items-center justify-center transition-colors focus:outline-none"
                        aria-label="Close navigation menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Drawer Navigation Links */}
                <div className="p-5 space-y-2 flex-grow overflow-y-auto">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 ml-2">Navigation</p>
                    {navLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className={`flex items-center gap-3 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                                    isActive
                                        ? "bg-[#FDE9F8] text-[#E619B0] shadow-xs"
                                        : "text-[#33052A] hover:bg-gray-50"
                                }`}
                            >
                                <Compass className={`w-4 h-4 ${isActive ? "text-[#E619B0]" : "text-gray-400"}`} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}

                    <div className="pt-6">
                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className="block w-full text-center bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:brightness-110 transition-all text-sm"
                        >
                            Book A Safari
                        </Link>
                    </div>
                </div>

                {/* Drawer Footer Contact Info */}
                <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Contact</p>
                    
                    {/* WhatsApp Line */}
                    <a
                        href={`https://wa.me/256${siteConfig.contacts.whatsappNumber.replace(/^0/, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-xs text-[#33052A] font-semibold hover:text-[#E619B0] transition-colors"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-[#E619B0]" />
                        <span className="truncate">WhatsApp: {siteConfig.contacts.whatsappNumber}</span>
                    </a>

                    {/* Call Line */}
                    <a
                        href={`tel:${siteConfig.contacts.phoneNumber.replace(/[^0-9+]/g, "")}`}
                        className="flex items-center gap-2.5 text-xs text-[#33052A] font-semibold hover:text-[#E619B0] transition-colors"
                    >
                        <Phone className="w-4 h-4 text-[#E619B0]" />
                        <span className="truncate">Call: {siteConfig.contacts.phoneNumber}</span>
                    </a>

                    {/* Email Line */}
                    <a
                        href={`mailto:${siteConfig.contacts.email}`}
                        className="flex items-center gap-2.5 text-xs text-[#33052A] font-semibold hover:text-[#E619B0] transition-colors"
                    >
                        <Mail className="w-4 h-4 text-[#E619B0]" />
                        <span className="truncate">{siteConfig.contacts.email}</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;