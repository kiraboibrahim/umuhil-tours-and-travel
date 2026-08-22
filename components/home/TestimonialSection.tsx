"use client";

import siteContent from "@/config/siteContent";

const TestimonialSection = () => {
    const testimonials = siteContent.testimonials;

    return (
        <div className="w-full py-12 bg-gray-50/50" id="testimonials">
            <div className="max-w-[1140px] mx-auto px-4 py-8 text-center">
                <h6 className="text-[#E619B0] uppercase tracking-[4px] font-bold text-sm mb-2">
                    Testimonials
                </h6>
                <h1 className="font-heading text-[2.5rem] font-extrabold leading-[1.2] text-[#33052A] mb-8">
                    What Our Travelers Say
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                                &quot;{t.text}&quot;
                            </p>
                            <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E619B0]"
                                />
                                <div>
                                    <h5 className="font-bold text-[#33052A] text-sm">{t.name}</h5>
                                    <p className="text-xs text-[#E619B0] font-medium">{t.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;