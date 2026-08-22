import siteContent from "@/config/siteContent";

const TeamSection = () => {
    const teamMembers = siteContent.team;

    return (
        <section className="w-full py-16 bg-white" id="team">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <span className="text-[#E619B0] uppercase mb-2 text-xs font-bold tracking-[4px] block">
                    Leadership
                </span>
                <h2 className="font-heading mb-10 text-3xl sm:text-4xl font-extrabold text-[#33052A]">
                    Leadership & Management
                </h2>

                <div className="flex justify-center">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="max-w-sm w-full">
                            <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                <div className="relative overflow-hidden h-[420px] bg-gray-100">
                                    <img
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        src={member.picture}
                                        alt={member.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#33052A]/80 via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-4 left-0 right-0 p-4 text-center text-white z-10">
                                        <span className="inline-block bg-[#E619B0] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-1.5 shadow-md">
                                            {member.designation}
                                        </span>
                                        <h3 className="font-heading text-2xl font-bold text-white leading-tight">
                                            {member.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;