import siteContent from "@/config/siteContent";

const BlogSection = () => {
    const blogPosts = siteContent.blogPosts;

    return (
        <div className="w-full py-12" id="blog">
            <div className="max-w-[1140px] mx-auto px-4 pt-4 pb-4 text-center">
                <h6 className="text-[#E619B0] uppercase tracking-[4px] font-bold text-sm mb-2">
                    Our Blog
                </h6>
                <h1 className="font-heading text-[2.5rem] font-extrabold leading-[1.2] text-[#33052A] mb-8">
                    Latest From Our Travel Blog
                </h1>

                <div className="flex flex-wrap -mx-4 pb-4 text-left">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="w-full md:w-1/3 px-4 mb-8"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#33052A] text-white text-center rounded-xl p-2 min-w-[50px] shadow-md">
                                        <h5 className="font-heading text-lg font-bold leading-none text-[#E619B0]">{post.date.day}</h5>
                                        <small className="uppercase text-[10px] tracking-wider text-white/80">{post.date.month}</small>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-xs text-[#E619B0] font-bold uppercase tracking-wider mb-2">
                                            <span>{post.category}</span>
                                            <span>•</span>
                                            <span className="text-gray-400 font-normal">{post.author}</span>
                                        </div>
                                        <h3 className="font-heading text-base font-bold text-[#33052A] leading-snug mb-4 hover:text-[#E619B0] transition-colors">
                                            {post.title}
                                        </h3>
                                    </div>
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center text-xs font-bold text-[#E619B0] hover:text-[#8A0F6B] uppercase tracking-wider gap-1 pt-2"
                                    >
                                        <span>Read Article</span>
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;