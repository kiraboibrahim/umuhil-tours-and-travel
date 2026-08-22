import siteContent from "@/config/siteContent";
import siteConfig from "@/app/siteConfig";
import Link from "next/link";
import { Check } from "lucide-react";

const AboutSection = () => {
    const { about } = siteContent;

    return (
        <section className="w-full py-20 bg-white" id="about">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Image */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <img
                                className="w-full h-[460px] object-cover"
                                src={about.images.main}
                                alt={`About ${siteConfig.company.name}`}
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-6 space-y-6">
                        <div>
                            <span className="text-[#E619B0] text-xs font-bold uppercase tracking-widest block mb-2">
                                About Us
                            </span>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#33052A] leading-tight">
                                Crafting Unforgettable Safari Encounters in Uganda
                            </h2>
                        </div>

                        <p className="text-gray-600 text-base leading-relaxed">
                            {about.description}
                        </p>

                        {/* Minimal Features List */}
                        <div className="space-y-3 pt-1">
                            <div className="flex items-center gap-3 text-sm font-semibold text-[#33052A]">
                                <span className="w-5 h-5 rounded-full bg-[#FDE9F8] text-[#E619B0] flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3.5 h-3.5" />
                                </span>
                                <span>100% Tailor-Made Safari Itineraries</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-semibold text-[#33052A]">
                                <span className="w-5 h-5 rounded-full bg-[#FDE9F8] text-[#E619B0] flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3.5 h-3.5" />
                                </span>
                                <span>Certified Professional Local Safari Guides</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-semibold text-[#33052A]">
                                <span className="w-5 h-5 rounded-full bg-[#FDE9F8] text-[#E619B0] flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3.5 h-3.5" />
                                </span>
                                <span>Handpicked Luxury & Eco Safari Lodges</span>
                            </div>
                        </div>

                        {/* Action Link */}
                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center font-bold text-white bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] hover:brightness-110 py-3.5 px-8 text-sm rounded-full shadow-md transition-all cursor-pointer"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;