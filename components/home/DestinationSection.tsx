import Image from "next/image";
import Link from "next/link";
import siteContent from "@/config/siteContent";

const DestinationSection = () => {
    const destinations = siteContent.destinations;

    return (
        <div className="w-full py-8" id="destinations">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6 className="text-[#E619B0] uppercase mb-2 text-sm font-bold tracking-[4px]">
                    Destinations
                </h6>
                <h1 className="font-heading mb-8 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-extrabold leading-[1.2] text-[#33052A]">
                    Explore Top Destinations in Uganda
                </h1>
                <div className="flex flex-wrap -mx-[15px]">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-6">
                            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        unoptimized
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#33052A]/90 via-[#33052A]/30 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white z-10">
                                    <span className="inline-block bg-[#E619B0] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                                        {dest.attractionsCount}+ Experiences
                                    </span>
                                    <h3 className="font-heading text-lg font-bold mb-1 text-white group-hover:text-[#F566CE] transition-colors">
                                        {dest.name}
                                    </h3>
                                    <p className="text-xs text-white/80 flex items-center gap-1">
                                        <span>{dest.location}</span>
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="absolute inset-0 z-20"
                                    aria-label={`Explore ${dest.name}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationSection;