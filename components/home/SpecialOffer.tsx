"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { submitSignup } from "@/services/api";
import siteContent from "@/config/siteContent";

const SpecialOffer = () => {
    const { specialOffer } = siteContent;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [destination, setDestination] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        try {
            await submitSignup({ name, email, destination });
            setSuccess(true);
            setName("");
            setEmail("");
            setDestination("");
        } catch (err) {
            console.error(err);
            alert("Failed to claim offer. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full py-16 bg-[#33052A] my-8 relative overflow-hidden" id="special-offer">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E619B0_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="max-w-[1140px] mx-auto px-[15px] relative z-10">
                <div className="flex flex-wrap -mx-[15px] items-center">
                    <div className="lg:w-[58.33333%] w-full px-[15px] mb-8 lg:mb-0">
                        <div className="mb-4">
                            <h6 className="text-[#F566CE] uppercase mb-2 text-sm font-bold tracking-[4px]">
                                {specialOffer.badge}
                            </h6>
                            <h1 className="font-heading text-white mb-4 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-extrabold leading-[1.2]">
                                {specialOffer.title}
                            </h1>
                        </div>
                        <p className="text-white/80 mt-0 mb-6 leading-relaxed text-sm">
                            {specialOffer.description}
                        </p>
                        <ul className="list-none p-0 m-0 space-y-3 mb-6">
                            {specialOffer.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-center text-white/90 text-sm">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#E619B0] mr-3 text-lg" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-[41.66667%] w-full px-[15px]">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-white/20">
                            <h3 className="text-2xl font-bold text-[#33052A] mb-2 text-center">
                                Claim Special Offer
                            </h3>
                            <p className="text-xs text-gray-500 text-center mb-6">
                                Lock in your group discount today.
                            </p>

                            {success ? (
                                <div className="text-center py-6">
                                    <div className="w-12 h-12 bg-[#FDE9F8] rounded-full flex items-center justify-center text-[#E619B0] mx-auto mb-3">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
                                    </div>
                                    <h4 className="font-bold text-[#33052A] text-lg mb-1">Offer Claimed!</h4>
                                    <p className="text-xs text-gray-600">Our tour specialist will reach out to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Full Name"
                                            className="w-full h-11 px-4 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:border-[#E619B0] focus:bg-white outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your Email Address"
                                            className="w-full h-11 px-4 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:border-[#E619B0] focus:bg-white outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                            placeholder="Preferred Destination (Optional)"
                                            className="w-full h-11 px-4 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:border-[#E619B0] focus:bg-white outline-none transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-12 bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] text-white font-bold text-sm rounded-xl shadow-md hover:brightness-110 transition-all cursor-pointer disabled:opacity-60"
                                    >
                                        {loading ? "Submitting..." : "Sign Up & Save 10%"}
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

export default SpecialOffer;