// Portfolio Data Configuration
// Modify this file to update portfolio content

const portfolioData = {
    // Personal Information
    hero: {
        label: "Full Stack Developer • Strategic Analyst • Problem Solver",
        name: "Nishit Kumar",
        tagline: "Building Solutions Through Deep Analysis",
        description: "I don't just write code—I architect solutions that scale businesses. 24+ years of turning complex challenges into elegant, profitable software.",
        ctas: [
            {
                text: "Let's Build Something",
                href: "#contact",
                type: "primary",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
            },
            {
                text: "Explore My Work",
                href: "#projects",
                type: "secondary",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84 1.13-1.83 1.4-2.87M10 21v-7.5M14 10V3M10 21h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-6l-2-2H9.5M10 21l-.9-2.25M14 3l.9 2.25M22 10H8c-2 0-3 2-3 2s1 .5 2 0c1.2-.5 1.5-1 2-2l-.5-.5H22Z"/></svg>`
            }
        ],
        stats: [
            {
                number: "24+",
                label: "Years Experience"
            },
            {
                number: "100+",
                label: "Projects Delivered"
            },
            {
                number: "10+",
                label: "Technologies Mastered"
            },
            {
                number: "Global",
                label: "Client Base"
            }
        ]
    },

    philosophy: [
        {
            icon: "🔍",
            title: "Deep Analysis",
            description: "Every project begins with comprehensive research and analysis. I dive deep into your requirements, business context, and technical constraints to understand the complete picture."
        },
        {
            icon: "🎯",
            title: "Strategic Thinking",
            description: "Drawing from my MBA from IIM Bangalore and years of business leadership, I ensure technical decisions support your strategic goals and deliver measurable ROI."
        },
        {
            icon: "⚡",
            title: "Execution Excellence",
            description: "Combining vast technical expertise with proven project management skills, I deliver high-quality solutions on time, with clean code and comprehensive documentation."
        }
    ],
    whyWorkWithMe: [
        {
            number: "01",
            title: "Business-Minded Developer",
            description: "With an MBA from IIM Bangalore and 24+ years spanning sales leadership at Microsoft to startup founding, I understand business objectives. I don't just code—I solve business problems through technology."
        },
        {
            number: "02",
            title: "Research-Driven Approach",
            description: "Every project begins with thorough analysis. I research best practices, study your industry, and analyze your competitors to ensure the solution fits your unique context and gives you a competitive edge."
        },
        {
            number: "03",
            title: "Full Ownership & Accountability",
            description: "From requirement analysis to deployment and maintenance, I take complete ownership. You get clear communication, on-time delivery, and a partner who's invested in your success."
        },
        {
            number: "04",
            title: "Proven Track Record",
            description: "Trusted by clients globally through Codeable. Successfully delivered 100+ projects ranging from complex WordPress plugins to AI/ML applications. Clients return because of quality and reliability."
        },
        {
            number: "05",
            title: "Strategic Scaling Expertise",
            description: "Led business growth from $10M to $20M at Microsoft. Grew TechGig by 400%. I understand what it takes to scale, and I build solutions that grow with your business."
        },
        {
            number: "06",
            title: "Continuous Learning",
            description: "Actively learning cutting-edge technologies through MIT, Stanford, and other top institutions. I stay ahead of trends in AI/ML, cloud computing, and modern web development frameworks."
        }
    ],
	// Work Process
    process: [
        {
            number: 1,
            title: "Discovery & Analysis",
            description: "Deep dive into your requirements, business context, user needs, and technical\
            constraints. I research your industry, analyze competitors, and identify best\
            practices to inform the solution design."
        },
        {
            number: 2,
            title: "Strategic Planning",
            description: "Create a comprehensive project plan with clear milestones, deliverables, and\
                success metrics. I propose the optimal technology stack and architecture based\
                on research and your specific needs."
        },
        {
            number: 3,
            title: "Iterative Development",
            description: "Build in sprints with regular check-ins and demos. You see progress continuously,\
				provide feedback early, and we course-correct as needed. Clean, documented,\
				maintainable code is non-negotiable."
        },
        {
            number: 4,
            title: "Testing & Quality Assurance",
            description: "Rigorous testing across devices, browsers, and scenarios. Performance optimization,\
				security hardening, and accessibility compliance. I deliver production-ready solutions."
        },
        {
            number: 5,
            title: "Deployment & Support",
            description: "Smooth deployment with minimal disruption. Comprehensive documentation and training.\
				Post-launch support to ensure everything runs perfectly. I'm available for\
				maintenance and future enhancements."
        }
    ],
    // Projects
    projects: [
        {
            title: "DTF Express & Addon Plugins",
            description: "Comprehensive e-commerce solution featuring custom product creation, REST API-based React frontend and admin screens, dynamic pricing engine, discount management, campaign tracking, custom order processing, and multiple API integrations.",
            tags: ["WordPress", "WooCommerce", "Custom Plugin", "React"],
            link: {
                url: "https://printpunk.com/",
                text: "View Live Site",
                type: "external", // external, internal, github
                target: "_blank"
            }
        },
        {
            title: "Smoobu Sync & Single Page Checkout",
            description: "Developed a sophisticated booking system with real-time synchronization with Smoobu API, custom single-page checkout experience, and seamless integration with existing WooCommerce infrastructure for a luxury accommodation booking platform.",
            tags: ["WordPress", "WooCommerce", "API Integration", "Custom Checkout"],
            link: {
                url: "https://book-a-bubble.de/en/",
                text: "View Live Site",
                type: "external",
                target: "_blank"
            }
        },
        {
            title: "Golf Swing Prediction Model",
            description: "Built an advanced machine learning model to predict golf swing patterns from Apple Watch sensor data. Implemented multiple signal processing techniques including Butterworth filters, VQF, and Savitzky-Golay filters, utilizing PyTorch and TensorFlow for model training.",
            tags: ["Machine Learning", "Python", "PyTorch", "IoT Data"],
            link: {
                url: "./golf_swing_case_study.html",
                text: "View Case Study",
                type: "internal",
                target: null
            }
        },
        {
            title: "AI-Powered Park Exploration Planner",
            description: "Created an intelligent application leveraging LLaMA 3.1 to help park visitors design optimal exploration routes. Built with Django backend and cross-platform frontend using React and React Native for seamless mobile and web experiences.",
            tags: ["LLM", "Django", "React", "React Native"],
            link: {
                url: "#",
                text: "View Case Study (Coming Soon)",
                type: "internal",
                target: null
            }
        },
        {
            title: "Webinar Management System",
            description: "Developed a comprehensive Gutenberg-based webinar management plugin with custom blocks, registration handling, automated email notifications, and seamless integration with popular webinar platforms.",
            tags: ["WordPress", "Gutenberg", "Custom Plugin"],
            link: {
                url: "https://github.com/dhitimedin/st-webinar-management",
                text: "View on GitHub",
                type: "github",
                target: "_blank"
            }
        },
        {
            title: "NGO & Rural Development Websites",
            description: "Designed and developed complete WordPress solutions including custom themes, plugins, and content management systems for non-profit organizations focused on rural development and sustainable energy initiatives.",
            tags: ["WordPress", "Custom Theme", "Full Site"],
            link: {
                url: "https://mithunrural.org",
                text: "View Mithun Rural",
                type: "external",
                target: "_blank"
            }
        }
    ],

    // Experience Timeline
    journey: [
        {
            year: "2020 - Present",
            title: "Freelance Developer",
            company: "Remote",
            location: null,
            description: "Custom WordPress, full-stack, AI/ML for global clients—plugins to data-driven powerhouses."
        },
        {
            year: "2017 - 2020",
            title: "National Sales Head",
            company: "Times Internet",
            location: "TimesJobs & TechGig",
            description: "Exploded TechGig 400%. Led 120+ team, optimized pricing for massive profitability."
        },
        {
            year: "2015 - 2017",
            title: "VP Sales and Partnership",
            company: "3LOQ Labs",
            location: "Mumbai",
            description: "Landed HDFC Bank, Hungama, IRCTC—drove adoption across India and Southeast Asia."
        },
        {
            year: "2013 - 2015",
            title: "Co-founder & India Head",
            company: "GlocalEdge Consultants",
            location: "Noida",
            description: "Scaled SaaS venture: 6× revenue, 90% retention, government/enterprise conquests."
        },
        {
            year: "2006 - 2012",
            title: "Developer Tools Sales Lead",
            company: "Microsoft Corporation India",
            location: null,
            description: "Doubled revenue every 2 years, scaled $10M to $20M in downturn—account expansion master."
        },
        {
            year: "2000 - 2006",
            title: "Software Engineer & Pre-Sales Consultant",
            company: "Wipro Technologies & Borland Software",
            location: null,
            description: "J2EE/C++ to multi-million deals: 100% YoY growth via tech depth and killer proposals."
        }
    ],

    education: [
        {
            degree: "MBA (PGSEM)",
            institution: "Indian Institute of Management Bangalore",
            year: "2006",
            type: "degree" // to differentiate from certifications
        },
        {
            degree: "B.E. Computer Science",
            institution: "Birla Institute of Technology Mesra",
            year: "2000",
            type: "degree"
        },
        {
            degree: "Continuous Learning & Certifications",
            certifications: [
                {
                    category: "AI/ML:",
                    details: "MIT Professional X, Stanford, John Hopkins"
                },
                {
                    category: "Mathematics:",
                    details: "MIT OCW (Linear Algebra, Statistics, Calculus)"
                },
                {
                    category: "Cloud & Security:",
                    details: "Cybersecurity (MIT), Cloud Computing (edX)"
                }
            ],
            type: "certifications"
        }
    ],
    
    social: [
        {
            platform: "Twitter / X",
            description: "My latest thoughts, tech insights, and project updates.",
            url: "https://x.com/nisitkumar",
            buttonText: "Follow on Twitter",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="lucide lucide-twitter" viewBox="0 0 24 24">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>`
        },
        {
            platform: "Mastodon",
            description: "More in-depth discussions and community engagement.",
            url: "https://mastodon.social/@nisitkumar",
            buttonText: "Follow on Mastodon",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="lucide lucide-mastodon" viewBox="0 0 24 24">
                <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"/>
            </svg>`
        },
        {
            platform: "GitHub",
            description: "Explore my open-source contributions and project code.",
            url: "https://github.com/nisit",
            buttonText: "View GitHub Profile",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1-3-1.4-3.5-.5-.3-1.2-.3-1.8.1 0 0-1.5 1-3 1.5-1.2-.3-2.4-.3-3.5 0-1.5-.5-3-1.5-3-1.5-.6-.4-1.3-.3-1.8.1-.4.5-1.4 3-1.4 3-.5.92-.78 2.03-.75 3.18 0 3.5 3 5.5 6 5.5-.3.6-.6 1.2-.6 2v4"/></svg>`
        }
    ],
    // Tech Radar Data
    techRadar: {
        canvas: {
            id: "techRadar",
            description: "My proficiency across a diverse technology stack, visualized. Level 1 = Learning, Level 5 = Mastery. Hover over points for detailed experience."
        },
        legend: [
            {
                color: "#06B6D4",
                label: "WordPress Stack"
            },
            {
                color: "#8B5CF6",
                label: "Full-Stack Dev"
            },
            {
                color: "#FB923C",
                label: "AI/ML Tools"
            },
            {
                color: "#14B8A6",
                label: "Cloud/DevOps"
            }
        ],
        marquee: [
            "WordPress",
            "React",
            "Node.js",
            "Python",
            "Django",
            "Next.js",
            "WooCommerce",
            "PyTorch",
            "AWS",
            "Docker"
        ],
        expertise: [
            {
                category: "WordPress Custom Development",
                technologies: [
                    "Custom Plugins",
                    "Theme Development",
                    "WooCommerce",
                    "Gutenberg Blocks",
                    "REST API",
                    "Webhooks",
                    "Payment Integration",
                    "Performance Opt."
                ]
            },
            {
                category: "Full Stack Development",
                technologies: [
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "Django",
                    "Flask",
                    "Python",
                    "JavaScript",
                    "PHP",
                    "TypeScript",
                    "GraphQL",
                    "Docker"
                ]
            },
            {
                category: "Data Science & AI",
                technologies: [
                    "LLM Integration",
                    "Machine Learning",
                    "PyTorch",
                    "TensorFlow",
                    "Pandas",
                    "NumPy",
                    "Scikit-learn",
                    "Data Analysis"
                ]
            },
            {
                category: "Cloud & Infrastructure",
                technologies: [
                    "AWS",
                    "Google Cloud",
                    "MySQL",
                    "MongoDB",
                    "NGINX",
                    "Apache",
                    "CI/CD",
                    "DevOps"
                ]
            }
        ]
    },
  contact: [
        {
            icon: "📅",
            title: "Schedule a Call",
            type: "calendly",
            link: {
                url: "https://calendly.com/nisitkumar/30min",
                text: "Book Free Consultation",
                target: "_blank"
            }
        },
        {
            icon: "📍",
            title: "Visit Me",
            type: "location",
            iframe: {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.3172094777983!2d77.0822958!3d28.420623599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23027869b2af%3A0xf567730cda942ca8!2sSagacitas%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1763058128794!5m2!1sen!2sin",
                width: "400",
                height: "150"
            },
            link: {
                url: "https://maps.app.goo.gl/cG3XuGQKtvx1H44W8",
                text: "Gurugram, India",
                target: "_blank",
                rel: "noopener noreferrer"
            }
        }
    ],
    
    footer: {
        copyright: "2024 Nishit Kumar. All rights reserved.",
        tagline: "Built with deep analysis, strategic thought, and clean code."
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
