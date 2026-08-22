export interface SafariPackage {
    id: string | number;
    title: string;
    location: string;
    duration: string;
    people: string;
    rating: number;
    ratingCount: number;
    image: string;
    price?: string;
    description?: string;
}

export interface DestinationItem {
    id: string | number;
    name: string;
    location: string;
    attractionsCount: number;
    image: string;
}

export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface TeamMemberItem {
    id: string;
    name: string;
    designation: string;
    picture: string;
}

export interface TestimonialItem {
    id: number;
    name: string;
    profession: string;
    image: string;
    text: string;
}

export interface BlogPostItem {
    id: number;
    title: string;
    author: string;
    category: string;
    date: { day: string; month: string };
    image: string;
    link: string;
}

export const siteContent = {
    heroSlides: [
        {
            id: 1,
            img: "/img/carousel-2.jpeg",
            title: "Luxury Hotel & Lodge Reservations",
            subtitle: "Umuhil Tours & Travel - Uganda",
            description: "Relax in handpicked boutique lodges and luxury hotels as you enjoy breathtaking sunsets along Lake Victoria and iconic national parks.",
            ctaText: "Book Your Adventure",
            ctaLink: "/contact",
        },
        {
            id: 2,
            img: "/img/antelope.jpeg",
            title: "Custom Wildlife Safaris",
            subtitle: "Umuhil Tours & Travel - Uganda",
            description: "Discover East Africa's remarkable wildlife, open savannas, and natural wonders on tailor-made guided safari tours.",
            ctaText: "Explore Safaris",
            ctaLink: "/contact",
        },
        {
            id: 3,
            img: "/img/elephant-crowd.jpeg",
            title: "Big Game Encounters",
            subtitle: "Umuhil Tours & Travel - Uganda",
            description: "Witness majestic elephant herds, lions, and iconic wildlife in their natural habitat across Queen Elizabeth and Murchison Falls.",
            ctaText: "Inquire Now",
            ctaLink: "/contact",
        },
        {
            id: 4,
            img: "/img/packages/chimpanzee-kibale-park.jpg",
            title: "Chimpanzee Tracking Expeditions",
            subtitle: "Umuhil Tours & Travel - Uganda",
            description: "Explore Kibale Forest's lush canopy with memorable primate-tracking adventures led by expert local guides.",
            ctaText: "Book Expedition",
            ctaLink: "/contact",
        },
        {
            id: 5,
            img: "/img/packages/gorilla-trekking.jpg",
            title: "Gorilla Trekking in Bwindi",
            subtitle: "Umuhil Tours & Travel - Uganda",
            description: "Experience the profound awe of meeting wild mountain gorillas face-to-face in Bwindi Impenetrable Forest.",
            ctaText: "Plan Your Trek",
            ctaLink: "/contact",
        },
    ],

    bookingOptions: {
        destinations: [
            { value: "bwindi", label: "Bwindi Impenetrable Forest" },
            { value: "murchison-falls", label: "Murchison Falls National Park" },
            { value: "queen-elizabeth", label: "Queen Elizabeth National Park" },
            { value: "kibale", label: "Kibale Forest National Park" },
            { value: "lake-mburo", label: "Lake Mburo National Park" },
            { value: "kidepo", label: "Kidepo Valley National Park" },
            { value: "jinja", label: "Jinja & Source of the Nile" },
        ],
        durations: [
            { value: "1", label: "1 Day Tour" },
            { value: "2", label: "2 Days / 1 Night" },
            { value: "3", label: "3 Days / 2 Nights" },
            { value: "4", label: "4 Days / 3 Nights" },
            { value: "5", label: "5 Days / 4 Nights" },
            { value: "7", label: "7 Days / 6 Nights" },
            { value: "10", label: "10 Days Safari" },
            { value: "14", label: "14 Days Grand Expedition" },
        ],
    },

    about: {
        badge: "About Us",
        title: "Experience Uganda's Wonders with Our Expertly Curated Safari Packages",
        description: "Umuhil Tours & Travel specializes in creating unforgettable safari adventures in Uganda's national parks. From gorilla tracking encounters and scenic landscapes to luxury lodges and guided tours, we offer personalized experiences tailored precisely to your budget and schedule.",
        stats: [
            { num: "10+", label: "Years Experience" },
            { num: "500+", label: "Happy Travelers" },
            { num: "50+", label: "Safari Packages" },
            { num: "100%", label: "Tailor-Made" },
        ],
        images: {
            main: "/img/about.jpg",
            feature1: "/img/spacious-rides.jpeg",
            feature2: "/img/hotel-view-with-sunset.jpeg",
        },
    },

    features: [
        {
            id: "pricing",
            title: "Competitive Pricing",
            description: "We offer safari packages, luxury lodge reservations and travel services at competitive rates with transparent pricing.",
            icon: "faMoneyCheckAlt",
        },
        {
            id: "packages",
            title: "Custom Packages",
            description: "Tailor-made itineraries designed around your dreams, schedule, and preferred pace of travel.",
            icon: "faAward",
        },
        {
            id: "transport",
            title: "4x4 Safari Vehicles",
            description: "Reliable, customized 4x4 safari cruisers with pop-up roofs for optimal game viewing.",
            icon: "faGlobe",
        },
    ],

    destinations: [
        {
            id: 1,
            name: "Munyaga Waterfalls",
            location: "Bwindi Impenetrable Forest",
            attractionsCount: 50,
            image: "/img/waterfall.jpeg",
        },
        {
            id: 2,
            name: "Bwindi Impenetrable Forest",
            location: "Southwestern Uganda",
            attractionsCount: 30,
            image: "/img/tourist-with-gorilla.jpeg",
        },
        {
            id: 3,
            name: "Kidepo Valley National Park",
            location: "Northeastern Uganda",
            attractionsCount: 25,
            image: "/img/elephant-crowd.jpeg",
        },
        {
            id: 4,
            name: "Lake Bunyonyi & Scenic Waters",
            location: "Kabale, Uganda",
            attractionsCount: 15,
            image: "/img/tourist-swimming.jpeg",
        },
        {
            id: 5,
            name: "Ishasha Tree-Climbing Lions",
            location: "Queen Elizabeth Park",
            attractionsCount: 20,
            image: "/img/tourist-trek.jpeg",
        },
        {
            id: 6,
            name: "Murchison Falls Cruise",
            location: "Murchison Falls Park",
            attractionsCount: 10,
            image: "/img/boat-cruise-murchison-falls.jpg",
        },
    ] as DestinationItem[],

    services: [
        {
            id: "guide",
            title: "Expert Travel Guides",
            description: "Professional, English-speaking local guides with deep knowledge of wildlife behavior and culture.",
            icon: "faRoute",
        },
        {
            id: "tickets",
            title: "Permits & Ticket Booking",
            description: "Seamless booking for gorilla tracking permits, national park entries, and adventure activities.",
            icon: "faTicketAlt",
        },
        {
            id: "hotels",
            title: "Boutique & Luxury Lodges",
            description: "Handpicked safari lodges, eco-camps, and hotels providing warm African hospitality.",
            icon: "faHotel",
        },
    ] as ServiceItem[],

    packages: [
        {
            id: 1,
            title: "3 Days Queen Elizabeth Wildlife Safari",
            location: "Queen Elizabeth",
            duration: "3 days",
            people: "2-6 Persons",
            rating: 4.8,
            ratingCount: 120,
            image: "/img/packages/buffalo-queen-elizabeth.jpg",
        },
        {
            id: 2,
            title: "4 Days Gorilla Trekking in Bwindi Impenetrable Forest",
            location: "Bwindi",
            duration: "4 days",
            people: "2-4 Persons",
            rating: 5.0,
            ratingCount: 85,
            image: "/img/packages/gorilla-trekking.jpg",
        },
        {
            id: 3,
            title: "3 Days Chimpanzee Tracking in Kibale National Park",
            location: "Kibale",
            duration: "3 days",
            people: "2-6 Persons",
            rating: 4.7,
            ratingCount: 60,
            image: "/img/packages/chimpanzee-kibale-park.jpg",
        },
        {
            id: 5,
            title: "5 Days Mountaineering at Rwenzori Mountains",
            location: "Rwenzori Mountains",
            duration: "5 days",
            people: "2-4 Persons",
            rating: 4.9,
            ratingCount: 70,
            image: "/img/packages/hiking-rwenzori-national-park.jpg",
        },
        {
            id: 6,
            title: "1 Day Kampala Cultural & Historic City Tour",
            location: "Kampala",
            duration: "1 day",
            people: "1-10 Persons",
            rating: 4.5,
            ratingCount: 100,
            image: "/img/packages/kampala-city-tour.jpg",
        },
    ] as SafariPackage[],

    specialOffer: {
        badge: "Special Group Offer",
        title: "10% Discount for groups of 4 and above",
        description: "Embark on an unforgettable safari in Uganda's most iconic National Parks. Enjoy wildlife encounters, breathtaking landscapes, and guided tours at an exclusive group rate.",
        highlights: [
            "Guided safaris in Murchison Falls & Queen Elizabeth",
            "Luxury lodges with breathtaking views",
            "Customizable itineraries tailored to your schedule",
        ],
    },

    team: [
        {
            id: "dhahill",
            name: "Dhahill Twongeirwe",
            designation: "CEO & Founder",
            picture: "/img/dhahill-twongeirwe.jpg",
        },
    ] as TeamMemberItem[],

    testimonials: [
        {
            id: 1,
            name: "Sarah Nakato",
            profession: "Adventure Traveler",
            image: "/img/testimonial-1.jpg",
            text: "The gorilla tracking in Bwindi was a once-in-a-lifetime experience. The Umuhil guides were exceptionally knowledgeable!",
        },
        {
            id: 2,
            name: "David Okello",
            profession: "Safari Enthusiast",
            image: "/img/testimonial-2.jpg",
            text: "Our Queen Elizabeth National Park safari exceeded all expectations. We saw tree-climbing lions and elephants up close!",
        },
        {
            id: 3,
            name: "Grace Achieng",
            profession: "Cultural Explorer",
            image: "/img/testimonial-3.jpg",
            text: "Visiting the island scenery was peaceful and rejuvenating. The local hospitality and organization were top-tier.",
        },
    ] as TestimonialItem[],

    blogPosts: [
        {
            id: 1,
            title: "Essential Gorilla Tracking Tips & Packing Checklist",
            author: "Umuhil Team",
            category: "Travel Guide",
            date: { day: "12", month: "Nov" },
            image: "/img/blog/gorilla-trekking.jpg",
            link: "#",
        },
        {
            id: 2,
            title: "Gorilla Trekking in Bwindi: Best Seasons & What to Expect",
            author: "Umuhil Team",
            category: "Safari Tips",
            date: { day: "20", month: "Oct" },
            image: "/img/scenery.jpeg",
            link: "#",
        },
        {
            id: 3,
            title: "Munyaga Waterfalls: Discovering Bwindi's Hidden Gems",
            author: "Umuhil Team",
            category: "Adventure",
            date: { day: "05", month: "Sep" },
            image: "/img/tourist-swimming.jpeg",
            link: "#",
        },
    ] as BlogPostItem[],
};

export default siteContent;
