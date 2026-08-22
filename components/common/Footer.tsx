"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { submitNewsletter } from "../../services/api";
import siteConfig from "@/app/siteConfig";

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const socialIcons = [
        { icon: faFacebookF, key: "facebook" },
        { icon: faTwitter, key: "twitter" },
        { icon: faLinkedinIn, key: "linkedin" },
        { icon: faInstagram, key: "instagram" },
    ];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email || loading) return;

        setLoading(true);
        try {
            await submitNewsletter({ email });
            alert("Successfully subscribed to our newsletter!");
            setEmail("");
        } catch (err) {
            console.error(err);
            alert("Failed to subscribe. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="footer">
            <footer
                className="w-full bg-[#33052A] text-white/70 py-16 px-6 lg:px-12 border-t border-white/10"
                style={{ marginTop: 60 }}
            >
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        {/* Brand & Social */}
                        <div className="w-full lg:w-4/12 md:w-1/2 px-4 mb-12">
                            <Link href="/" className="flex items-center space-x-3 mb-4 hover:no-underline">
                                <div className="w-10 h-10 overflow-hidden rounded-lg bg-white/10 flex items-center justify-center p-1">
                                    <Image 
                                        src="/img/logo.png" 
                                        alt={siteConfig.company.name} 
                                        width={40} 
                                        height={40}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <span className="text-[1.5rem] font-extrabold leading-[1.2] bg-gradient-to-r from-[#F033D6] to-[#E619B0] bg-clip-text text-transparent">
                                    {siteConfig.company.name}
                                </span>
                            </Link>
                            <p className="leading-relaxed mb-6 text-white/70 text-sm">
                                {siteConfig.company.name} offers custom wildlife safaris, gorilla tracking adventures, and memorable holiday travel across Uganda and East Africa with expert local guides.
                            </p>
                            <h6 className="text-white uppercase mb-4 text-xs font-bold tracking-[3px]">
                                Follow Us
                            </h6>
                            <div className="flex justify-start space-x-2">
                                {socialIcons.map(({ icon, key }) => {
                                    const url = (siteConfig.socials as any)[key];
                                    return url ? (
                                        <a
                                            key={key}
                                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#E619B0] hover:text-white"
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={icon} className="text-sm" />
                                        </a>
                                    ) : null;
                                })}
                            </div>
                        </div>

                        {/* Quick Navigation */}
                        <div className="w-full lg:w-2/12 md:w-1/2 px-4 mb-12">
                            <h5 className="text-white uppercase mb-6 text-sm font-bold tracking-[3px]">
                                Quick Links
                            </h5>
                            <div className="flex flex-col space-y-3">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "About Us", href: "/about" },
                                    { label: "Contact Us", href: "/contact" },
                                ].map((item, i) => (
                                    <Link
                                        key={i}
                                        className="text-white/70 text-sm no-underline hover:text-[#F566CE] transition-colors flex items-center"
                                        href={item.href}
                                    >
                                        <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-[#E619B0] text-xs" />
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Our Offerings */}
                        <div className="w-full lg:w-3/12 md:w-1/2 px-4 mb-12">
                            <h5 className="text-white uppercase mb-6 text-sm font-bold tracking-[3px]">
                                Our Highlights
                            </h5>
                            <div className="flex flex-col space-y-3">
                                {[
                                    "Gorilla & Chimp Tracking",
                                    "Wildlife Safaris",
                                    "Cultural Experiences",
                                    "Custom Holiday Packages",
                                    "Group Tours",
                                ].map((item, i) => (
                                    <span key={i} className="text-white/70 text-sm flex items-center">
                                        <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-[#E619B0] text-xs" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact & Newsletter */}
                        <div className="w-full lg:w-3/12 md:w-1/2 px-4 mb-12">
                            <h5 className="text-white uppercase mb-6 text-sm font-bold tracking-[3px]">
                                Contact Us
                            </h5>
                            <p className="text-white/70 text-sm mb-3 flex items-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2.5 mt-1 text-[#E619B0]" />
                                {siteConfig.contacts.location}
                            </p>
                            <p className="text-white/70 text-sm mb-3 flex items-center">
                                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2.5 text-[#E619B0]" />
                                {siteConfig.contacts.phoneNumber}
                            </p>
                            <p className="text-white/70 text-sm mb-6 flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2.5 text-[#E619B0]" />
                                {siteConfig.contacts.email}
                            </p>

                            <h6 className="text-white uppercase mb-3 text-xs font-bold tracking-[3px]">
                                Newsletter
                            </h6>
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="flex">
                                    <input
                                        type="email"
                                        className="flex-1 border border-white/20 bg-white/5 text-white text-sm placeholder:text-white/40 px-3 py-2 rounded-l-lg outline-none focus:border-[#E619B0] transition-all"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] text-white px-4 text-xs font-semibold rounded-r-lg hover:brightness-110 transition-all disabled:opacity-65"
                                        disabled={loading}
                                    >
                                        {loading ? "..." : "Join"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="w-full bg-[#24031D] text-white/50 border-t border-white/10 py-5 px-6 md:px-12 text-xs">
                <div className="max-w-[1140px] mx-auto text-center md:text-left">
                    <p className="m-0">
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="text-white font-semibold">
                            {siteConfig.company.name}
                        </span>
                        . All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;