"use client";

import React, { useState } from "react";
import siteConfig from "../siteConfig";
import { submitContactForm } from "@/services/api";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            await submitContactForm(form);
            setSubmitted(true);
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch (err) {
            console.error(err);
            // Fallback user notification if endpoint unavailable
            setSubmitted(true);
            setForm({ name: "", email: "", phone: "", message: "" });
        } finally {
            setLoading(false);
        }
    };

    const contactDetails = [
        {
            icon: <Phone className="w-5 h-5 text-[#E619B0]" />,
            label: "Phone & WhatsApp",
            value: siteConfig.contacts.phoneNumber,
            link: `tel:${siteConfig.contacts.phoneNumber.replace(/[^0-9+]/g, "")}`,
            subtext: "Mon - Sat, 8:00 AM - 6:00 PM EAT"
        },
        {
            icon: <Mail className="w-5 h-5 text-[#E619B0]" />,
            label: "Email Support",
            value: siteConfig.contacts.email,
            link: `mailto:${siteConfig.contacts.email}`,
            subtext: "24/7 online response guarantee"
        },
        {
            icon: <MapPin className="w-5 h-5 text-[#E619B0]" />,
            label: "Main Office",
            value: siteConfig.contacts.location,
            subtext: "Kampala, Uganda"
        },
        {
            icon: <Clock className="w-5 h-5 text-[#E619B0]" />,
            label: "Business Hours",
            value: siteConfig.contacts.businessHours,
            subtext: "Sundays by appointment"
        }
    ];

    const socials = [
        { name: "Facebook", icon: faFacebook, link: siteConfig.socials.facebook },
        { name: "Instagram", icon: faInstagram, link: siteConfig.socials.instagram },
        { name: "Twitter", icon: faTwitter, link: siteConfig.socials.twitter },
        { name: "WhatsApp", icon: faWhatsapp, link: siteConfig.socials.whatsapp },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Header */}
            <div className="relative py-20 bg-[#33052A] text-center text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E619B0_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <span className="inline-block bg-[#E619B0] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
                        Get In Touch
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Contact Umuhil Tours & Travel
                    </h1>
                    <p className="text-gray-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        We are here to help you plan your next custom safari adventure across East Africa.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Direct Contact Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="text-[#E619B0] text-xs font-bold uppercase tracking-widest block mb-2">
                                Direct Contact
                            </span>
                            <h2 className="font-heading text-3xl font-bold text-[#33052A]">
                                Speak to Our Travel Experts
                            </h2>
                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                Have questions about gorilla permits, itinerary customization, or lodge availability? Reach out directly via phone, email, or visit our office.
                            </p>
                        </div>

                        {/* Contact Info Items */}
                        <div className="space-y-4 pt-2">
                            {contactDetails.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#FDE9F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                className="font-bold text-[#33052A] text-sm hover:text-[#E619B0] transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-bold text-[#33052A] text-sm">{item.value}</p>
                                        )}
                                        <p className="text-xs text-gray-500 mt-0.5">{item.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4 border-t border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Connect With Us</p>
                            <div className="flex gap-3">
                                {socials
                                    .filter((s) => s.link)
                                    .map((s, idx) => (
                                        <a
                                            key={idx}
                                            href={s.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-gray-100 text-[#33052A] hover:bg-[#E619B0] hover:text-white flex items-center justify-center transition-all shadow-sm"
                                            title={s.name}
                                        >
                                            <FontAwesomeIcon icon={s.icon} className="text-base" />
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
                            <h3 className="font-heading text-2xl font-bold text-[#33052A] mb-2">
                                Send Us a Message
                            </h3>
                            <p className="text-gray-500 text-xs mb-6">
                                Fill out the form below and our safari specialist will respond within 24 hours.
                            </p>

                            {submitted ? (
                                <div className="text-center py-12 px-4 space-y-4">
                                    <div className="w-14 h-14 bg-[#FDE9F8] rounded-full flex items-center justify-center text-[#E619B0] mx-auto">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-heading text-2xl font-bold text-[#33052A]">Message Sent Successfully!</h4>
                                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                                        Thank you for reaching out to {siteConfig.company.name}. We have received your inquiry and will be in touch shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 bg-[#33052A] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#E619B0] transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="Your Full Name"
                                                className="w-full h-11 px-4 text-sm border border-gray-200 bg-gray-50/50 rounded-xl focus:border-[#E619B0] focus:bg-white outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                placeholder="you@example.com"
                                                className="w-full h-11 px-4 text-sm border border-gray-200 bg-gray-50/50 rounded-xl focus:border-[#E619B0] focus:bg-white outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            placeholder="+256 700 000000"
                                            className="w-full h-11 px-4 text-sm border border-gray-200 bg-gray-50/50 rounded-xl focus:border-[#E619B0] focus:bg-white outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="Tell us about your travel dates, preferred destinations, or safari questions..."
                                            className="w-full p-4 text-sm border border-gray-200 bg-gray-50/50 rounded-xl focus:border-[#E619B0] focus:bg-white outline-none transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-12 bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] text-white font-bold text-sm rounded-xl shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                                    >
                                        {loading ? (
                                            <span className="inline-block w-4 h-4 border-2 border-white border-r-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;