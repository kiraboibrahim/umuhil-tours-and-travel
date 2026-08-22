import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faTicketAlt, faHotel, faAward } from "@fortawesome/free-solid-svg-icons";
import siteContent from "@/config/siteContent";

const iconMap: Record<string, any> = {
    faRoute,
    faTicketAlt,
    faHotel,
};

const ServicesSection = () => {
    return (
        <div className="w-full py-8" id="services">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6 className="text-[#E619B0] uppercase mb-2 text-sm font-bold tracking-[4px]">
                    Services
                </h6>
                <h1 className="font-heading mb-8 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-extrabold leading-[1.2] text-[#33052A]">
                    Tours & Travel Services
                </h1>
                <div className="flex flex-wrap -mx-[15px]">
                    {siteContent.services.map((s) => {
                        const icon = iconMap[s.icon] || faAward;
                        return (
                            <div key={s.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-6">
                                <div className="group bg-white text-center p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <div className="w-[70px] h-[70px] flex items-center justify-center border-2 border-[#E619B0] bg-white text-[#E619B0] rounded-full mx-auto mb-5 transition-all duration-300 group-hover:bg-[#E619B0] group-hover:text-white shadow-sm">
                                        <FontAwesomeIcon icon={icon} className="text-2xl" />
                                    </div>
                                    <h5 className="mb-3 text-[1.25rem] font-bold text-[#33052A] group-hover:text-[#E619B0] transition-colors">
                                        {s.title}
                                    </h5>
                                    <p className="m-0 text-[#6c757d] text-sm leading-relaxed">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;