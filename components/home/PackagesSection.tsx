import siteContent from "@/config/siteContent";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt, faUsers, faStar } from "@fortawesome/free-solid-svg-icons";

const PackagesSection = () => {
    const packages = siteContent.packages;

    return (
        <div className="w-full py-8" id="packages">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6 className="text-[#E619B0] uppercase mb-2 text-sm font-bold tracking-[4px]">
                    Packages
                </h6>
                <h1 className="font-heading mb-8 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-extrabold leading-[1.2] text-[#33052A]">
                    Popular Tour Packages
                </h1>
                <div className="flex flex-wrap -mx-[15px]">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-6">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex flex-col h-full">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-3 right-3 bg-[#E619B0] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        Tailor-Made
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3 border-b border-gray-100 pb-3">
                                            <span className="flex items-center gap-1">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#E619B0]" />
                                                {pkg.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="text-[#E619B0]" />
                                                {pkg.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FontAwesomeIcon icon={faUsers} className="text-[#E619B0]" />
                                                {pkg.people}
                                            </span>
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-[#33052A] mb-3 leading-snug hover:text-[#E619B0] transition-colors">
                                            {pkg.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                        <div className="flex items-center gap-1 text-amber-400 text-sm">
                                            <FontAwesomeIcon icon={faStar} />
                                            <span className="font-bold text-[#33052A] text-xs ml-1">{pkg.rating}</span>
                                            <span className="text-gray-400 text-xs">({pkg.ratingCount})</span>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="bg-[#FDE9F8] text-[#E619B0] hover:bg-[#E619B0] hover:text-white font-bold text-xs px-4 py-2 rounded-full transition-all duration-200"
                                        >
                                            Inquire Package
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesSection;