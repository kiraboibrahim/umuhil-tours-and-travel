import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import siteConfig from "@/app/siteConfig";

const Topbar = () => (
    <div className="w-full bg-[#33052A] text-white/90 py-2.5 px-4 hidden lg:block border-b border-white/10 text-xs font-medium">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
                <a 
                    href={`mailto:${siteConfig.contacts.email}`} 
                    className="flex items-center space-x-2 text-white/80 hover:text-[#F566CE] transition-colors"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#F033D6]" />
                    <span>{siteConfig.contacts.email}</span>
                </a>
                <span className="text-white/20">|</span>
                <a 
                    href={`tel:${siteConfig.contacts.phoneNumber.replace(/[^0-9+]/g, '')}`} 
                    className="flex items-center space-x-2 text-white/80 hover:text-[#F566CE] transition-colors"
                >
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-[#F033D6]" />
                    <span>{siteConfig.contacts.phoneNumber}</span>
                </a>
                <span className="text-white/20">|</span>
                <div className="flex items-center space-x-2 text-white/70">
                    <FontAwesomeIcon icon={faClock} className="text-[#F033D6]" />
                    <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
                <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold mr-1">Follow Us:</span>
                {(
                    Object.entries({
                        facebook: faFacebookF,
                        twitter: faTwitter,
                        linkedin: faLinkedinIn,
                        instagram: faInstagram,
                        youtube: faYoutube,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    }) as [string, any][]
                )
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .filter(([key]) => (siteConfig.socials as any)[key])
                    .map(([key, icon]) => (
                        <Link
                            key={key}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            href={(siteConfig.socials as any)[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#E619B0] text-white flex items-center justify-center transition-all duration-200"
                        >
                            <FontAwesomeIcon icon={icon} className="text-[10px]" />
                        </Link>
                    ))}
            </div>
        </div>
    </div>
);

export default Topbar;