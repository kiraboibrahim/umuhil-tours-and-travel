import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyCheckAlt,
    faAward,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import siteContent from '@/config/siteContent';

const iconMap: Record<string, any> = {
    faMoneyCheckAlt,
    faAward,
    faGlobe,
};

const FeatureSection = () => {
    return (
        <div className="w-full pb-8" id="features">
            <div className="max-w-[1140px] mx-auto px-[15px]">
                <div className="flex flex-wrap -mx-[15px]">
                    {siteContent.features.map((f) => {
                        const icon = iconMap[f.icon] || faAward;
                        return (
                            <div key={f.id} className="md:w-1/3 w-full px-[15px] mb-4 md:mb-0">
                                <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-shrink-0 items-center justify-center bg-gradient-to-br from-[#E619B0] to-[#8A0F6B] mr-4 h-[65px] w-[65px] rounded-xl shadow-md">
                                        <FontAwesomeIcon
                                            icon={icon}
                                            className="text-white text-[1.4em]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="mb-1 text-[1.1rem] font-bold leading-[1.2] text-[#33052A]">
                                            {f.title}
                                        </h5>
                                        <p className="m-0 text-[#6c757d] text-xs leading-relaxed">
                                            {f.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;