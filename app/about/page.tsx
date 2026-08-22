import Link from "next/link";
import siteConfig from "../siteConfig";
import { Award, Compass, Heart, Shield, Sparkles, ArrowRight } from "lucide-react";

const AboutPage = () => {
    const pillars = [
        {
            title: "Excellence & Expertise",
            icon: <Award className="w-6 h-6 text-[#E619B0]" />,
            description: "With over a decade of hands-on safari experience in East Africa, our specialists partner exclusively with certified top-tier guides to ensure unforgettable travel encounters."
        },
        {
            title: "Authentic Ugandan Roots",
            icon: <Compass className="w-6 h-6 text-[#E619B0]" />,
            description: "Proudly Ugandan-owned and managed, we bring genuine local perspective and deep regional knowledge to every Gorilla trek, wildlife safari, and cultural journey."
        },
        {
            title: "Sustainable Tourism",
            icon: <Heart className="w-6 h-6 text-[#E619B0]" />,
            description: "We are dedicated to preserving wild habitats, protecting endangered wildlife, and empowering local host communities through responsible eco-tourism."
        }
    ];

    const stats = [
        { num: "10+", label: "Years Experience" },
        { num: "500+", label: "Happy Travelers" },
        { num: "50+", label: "Safari Packages" },
        { num: "100%", label: "Tailor-Made" }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Header */}
            <div className="relative py-20 bg-[#33052A] overflow-hidden text-center text-white">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E619B0_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <span className="inline-block bg-[#E619B0] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
                        About Us
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Experiences · People · Places
                    </h1>
                    <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Discover the story behind {siteConfig.company.name} and our passion for crafting custom African safaris.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src="/img/about.jpg"
                                alt="Umuhil Tours & Travel"
                                className="w-full h-[440px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-6 space-y-5">
                        <span className="text-[#E619B0] text-xs font-bold uppercase tracking-widest block">
                            Our Story
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-[#33052A] leading-tight">
                            Who We Are
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {siteConfig.company.name} was founded by passionate Ugandan travel enthusiasts with a single clear vision: to share the breathtaking beauty, wildlife, and cultures of East Africa with travelers from across the globe.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            From face-to-face encounters with mountain gorillas in Bwindi to game drives across Murchison Falls and tranquil retreats along Lake Victoria, we curate personalized journeys tailored precisely to your schedule, preferences, and budget.
                        </p>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="border-r last:border-r-0 border-gray-200/80">
                                <p className="font-heading font-extrabold text-3xl md:text-4xl text-[#E619B0] mb-1">{stat.num}</p>
                                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Pillars */}
                <div>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-[#E619B0] text-xs font-bold uppercase tracking-widest block mb-2">
                            Why Choose Us
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-[#33052A]">
                            Our Core Pillars
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#FDE9F8] flex items-center justify-center">
                                    {pillar.icon}
                                </div>
                                <h3 className="font-bold text-lg text-[#33052A]">{pillar.title}</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#33052A] text-white rounded-2xl p-8 sm:p-10 shadow-md space-y-4">
                        <span className="text-[#F566CE] text-xs font-bold uppercase tracking-widest block">
                            Our Purpose
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-white">Our Mission</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            To deliver extraordinary safari experiences through local expertise, personalized service, and sustainable practices that respect wildlife, natural environments, and local communities.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#E619B0] to-[#8A0F6B] text-white rounded-2xl p-8 sm:p-10 shadow-md space-y-4">
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest block">
                            Looking Ahead
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-white">Our Vision</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                            To be the leading catalyst for authentic and sustainable tourism in East Africa, creating lifelong memories for travelers while safeguarding conservation and community empowerment.
                        </p>
                    </div>
                </div>

                {/* Simplified CTA */}
                <div className="bg-gray-900 text-white rounded-2xl p-10 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-xl mx-auto space-y-4">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold">Ready for Your Custom Safari?</h3>
                        <p className="text-gray-300 text-sm">
                            Let us craft your dream itinerary across Uganda and East Africa.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 font-bold text-white bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] hover:brightness-110 px-8 py-3.5 rounded-full shadow-lg transition-all"
                            >
                                <span>Contact Our Travel Experts</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
