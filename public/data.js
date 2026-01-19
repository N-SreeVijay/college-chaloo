const db = {
    // PORTAL CATEGORIES
    btech: {
        title: "Bachelor of Technology (B.Tech)",
        desc: "A comprehensive 4-year undergraduate program designed to turn aspirants into engineering leaders. Choose from a variety of cutting-edge specializations.",
        duration: "4 Years",
        eligibility: "10+2 (PCM) > 60%",
        seats: "1200+",
        streams: [
            {
                name: "School of Computing",
                icon: "💻",
                id: "computing",
                subCategories: [
                    { name: "CSE", courses: ["AI & ML", "Cyber Security", "Data Science", "Cloud Computing", "Software Engineering"] },
                    { name: "ACSE", courses: ["AI & ML", "Cyber Security", "Data Science", "Internet of Things"] },
                    { name: "Computer Science and Business", courses: ["Business Analytics", "Enterprise systems", "Financial Tech"] }
                ],
                desc: "CSE, ACSE offer specialized tracks in AI, Cyber Security, and more."
            },
            {
                name: "School of Electronics",
                icon: "📡",
                id: "electronics",
                subCategories: [
                    { name: "ECE", courses: ["VLSI Design", "Embedded Systems", "Signal Processing", "Communication Systems"] },
                    { name: "EEE", courses: ["Power Systems", "Control Engineering", "Renewable Energy", "Electric Vehicles"] }
                ],
                desc: "Advanced electronics and electrical engineering programs."
            },
            {
                name: "Bio technology",
                icon: "🧬",
                id: "biotech",
                subCategories: [
                    { name: "Bio Tech", courses: ["Genetic Engineering", "Microbiology", "Bio-Chemistry"] },
                    { name: "Bio Informatics", courses: ["Computational Biology", "Genomics", "Proteomics"] },
                    { name: "Food Tech", courses: ["Food Processing", "Nutrition Science", "Safety Standards"] },
                    { name: "Bio Medical", courses: ["Medical Imaging", "Biomaterials", "Prosthetics"] }
                ],
                desc: "Interdisciplinary programs merging biology with advanced technology."
            },
            {
                name: "Mechanical Engg",
                icon: "⚙️",
                id: "mechanical",
                desc: "The evergreen branch dealing with thermodynamics and robotics.",
                subCategories: [
                    { name: "Robotics", courses: ["Industrial Automation", "Kinematics", "AI in Robotics"] },
                    { name: "Automobile", courses: ["ICE Engines", "Vehicle Dynamics", "EV Technology"] },
                    { name: "Manufacturing", courses: ["CAD/CAM", "3D Printing", "Supply Chain"] }
                ]
            },
            {
                name: "Civil Engineering",
                icon: "🏗️",
                id: "civil",
                desc: "Build the world with structural engineering and construction.",
                subCategories: [
                    { name: "Structural Engg", courses: ["Bridge Design", "Earthquake Resistance", "Concrete Tech"] },
                    { name: "Environmental Engg", courses: ["Water Treatment", "Waste Management", "Pollution Control"] },
                    { name: "Construction Mgmt", courses: ["Project Planning", "Safety Management", "Cost Estimation"] }
                ]
            },
            {
                name: "Information Tech",
                icon: "☁️",
                id: "it",
                desc: "Focus on software systems, cloud computing, and data management.",
                subCategories: [
                    { name: "Cloud Tech", courses: ["AWS Fundamentals", "Azure Administration", "Cloud Security"] },
                    { name: "Network Engg", courses: ["Network Security", "Routing & Switching", "5G Tech"] },
                    { name: "Software Dev", courses: ["Mobile Apps", "Web Development", "DevOps"] }
                ]
            }
        ]
    },
    mtech: {
        title: "Master of Technology (M.Tech)",
        desc: "Advanced postgraduate program for those who wish to specialize and drive research in their engineering fields.",
        duration: "2 Years",
        eligibility: "B.Tech / B.E > 60%",
        seats: "300+",
        streams: [
            {
                name: "Artificial Intelligence",
                icon: "🤖",
                id: "ai",
                desc: "Deep dive into Neural Networks and Machine Learning.",
                subCategories: [
                    { name: "Deep Learning", courses: ["Neural Networks", "NLP", "Robotics"] },
                    { name: "Computer Vision", courses: ["Image Processing", "Video Analytics", "Pattern Recognition"] }
                ]
            },
            {
                name: "VLSI Design",
                icon: "🔋",
                id: "vlsi",
                desc: "Advanced circuit design and semiconductor technology.",
                subCategories: [
                    { name: "Analog VLSI", courses: ["CMOS Design", "Power Management", "Mixed Signal"] },
                    { name: "Digital VLSI", courses: ["Verilog/VHDL", "FPGA Design", "ASIC"] }
                ]
            },
            {
                name: "Structural Engg",
                icon: "🌉",
                id: "structural",
                desc: "Advanced analysis of structures and earthquake engineering.",
                subCategories: [
                    { name: "Adv Structural Analysis", courses: ["FEM", "Dynamic Analysis", "Bridge Engineering"] },
                    { name: "Concrete Tech", courses: ["Adv Concrete Tech", "Pre-stressed Concrete"] }
                ]
            },
            {
                name: "Thermal Engg",
                icon: "🔥",
                id: "thermal",
                desc: "Specialization in heat transfer and energy systems.",
                subCategories: [
                    { name: "Thermodynamics", courses: ["Adv Thermodynamics", "Heat Transfer", "Cryogenics"] },
                    { name: "Energy Systems", courses: ["Solar Energy", "Renewable Power Fluids"] }
                ]
            }
        ]
    },
    pharma: {
        title: "Pharmaceutical Sciences",
        desc: "Explore the world of medicine, drug development, and healthcare with our top-tier Pharmacy programs.",
        duration: "4 Years",
        eligibility: "10+2 (PCB) > 60%",
        seats: "150+",
        streams: [
            {
                name: "B.Pharmacy",
                icon: "💊",
                id: "bpharma",
                desc: "Foundational course in drug properties and manufacturing.",
                subCategories: [
                    { name: "Pharmaceutics", courses: ["Drug Formulation", "Industrial Pharmacy"] },
                    { name: "Pharmacology", courses: ["Drug Action", "Toxicology", "Clinical Research"] }
                ]
            },
            {
                name: "Pharm.D",
                icon: "🩺",
                id: "pharmd",
                desc: "Doctor of Pharmacy - Clinical practice and patient care.",
                subCategories: [
                    { name: "Clinical Pharmacy", courses: ["Therapeutics", "Patient Counseling"] },
                    { name: "Hospital Pharmacy", courses: ["Drug Info Services", "Ward Rounds"] }
                ]
            },
            {
                name: "Drug Regulatory",
                icon: "📜",
                id: "regulatory",
                desc: "Laws and regulations governing the pharma industry.",
                subCategories: [
                    { name: "Regulatory Affairs", courses: ["IPR", "Drug Laws", "Quality Assurance"] }
                ]
            }
        ]
    },
    // ... Additional categories (mba, etc.) can be migrated similarly if needed for this view
};

// JOB DATA STORE (Centralized)
const careerData = {
    // Computing
    "AI & ML": [{ role: "Machine Learning Engineer", salary: "₹8L - ₹24L" }, { role: "Data Scientist", salary: "₹10L - ₹30L" }],
    "Cyber Security": [{ role: "Security Analyst", salary: "₹6L - ₹18L" }, { role: "Ethical Hacker", salary: "₹5L - ₹20L" }],
    "Data Science": [{ role: "Data Analyst", salary: "₹5L - ₹12L" }, { role: "BI Developer", salary: "₹7L - ₹16L" }],
    "Cloud Computing": [{ role: "Cloud Architect", salary: "₹18L - ₹45L" }, { role: "DevOps Engineer", salary: "₹8L - ₹22L" }],
    "Software Engineering": [{ role: "Full Stack Dev", salary: "₹6L - ₹20L" }, { role: "Backend Dev", salary: "₹7L - ₹22L" }],

    // Electronics
    "VLSI Design": [{ role: "VLSI Engineer", salary: "₹10L - ₹30L" }, { role: "Chip Designer", salary: "₹12L - ₹35L" }],
    "Embedded Systems": [{ role: "Embedded Engineer", salary: "₹6L - ₹18L" }, { role: "Firmware Dev", salary: "₹7L - ₹20L" }],
    "Signal Processing": [{ role: "DSP Engineer", salary: "₹8L - ₹25L" }, { role: "Audio Engineer", salary: "₹6L - ₹18L" }],

    // Biotech
    "Genetic Engineering": [{ role: "Geneticist", salary: "₹6L - ₹15L" }, { role: "Lab Researcher", salary: "₹4L - ₹10L" }],
    "Microbiology": [{ role: "Microbiologist", salary: "₹4L - ₹9L" }, { role: "QA Analyst", salary: "₹3L - ₹8L" }],
    "Bio Informatics": [{ role: "Bioinformatician", salary: "₹7L - ₹18L" }, { role: "Computational Biologist", salary: "₹8L - ₹20L" }],

    // Mechanical
    "Robotics": [{ role: "Robotics Engineer", salary: "₹8L - ₹25L" }, { role: "Automation Specialist", salary: "₹6L - ₹15L" }],
    "Automobile": [{ role: "Automotive Engineer", salary: "₹5L - ₹12L" }, { role: "Design Engineer", salary: "₹6L - ₹14L" }],

    // Default fallback
    "default": [{ role: "Industry Professional", salary: "₹5L - ₹15L" }, { role: "Research Associate", salary: "₹4L - ₹10L" }]
};

// --- EXAM DATA STORE ---
const examData = [
    {
        id: "jee-mains",
        name: "JEE Mains",
        full_name: "Joint Entrance Examination - Mains",
        stream: "Engineering",
        level: "National",
        conducting_body: "NTA",
        date: "Jan 24, 2026",
        app_deadline: "Nov 22, 2025",
        mode: "Online",
        website: "https://jeemain.nta.nic.in",
        desc: "Gateway to NITs, IIITs, and CFTIs."
    },
    {
        id: "jee-adv",
        name: "JEE Advanced",
        full_name: "Joint Entrance Examination - Advanced",
        stream: "Engineering",
        level: "National",
        conducting_body: "IITs",
        date: "May 26, 2026",
        app_deadline: "May 07, 2026",
        mode: "Online",
        website: "https://jeeadv.ac.in",
        desc: "Entrance for IITs."
    },
    {
        id: "neet",
        name: "NEET UG",
        full_name: "National Eligibility cum Entrance Test",
        stream: "Medical",
        level: "National",
        conducting_body: "NTA",
        date: "May 05, 2026",
        app_deadline: "Mar 09, 2026",
        mode: "Offline",
        website: "https://neet.nta.nic.in",
        desc: "Entrance for MBBS/BDS."
    },
    {
        id: "cat",
        name: "CAT",
        full_name: "Common Admission Test",
        stream: "Management",
        level: "National",
        conducting_body: "IIMs",
        date: "Nov 24, 2025",
        app_deadline: "Sep 13, 2025",
        mode: "Online",
        website: "https://iimcat.ac.in",
        desc: "Entrance for IIMs."
    },
    {
        id: "gate",
        name: "GATE",
        full_name: "Graduate Aptitude Test in Engineering",
        stream: "Engineering",
        level: "National",
        conducting_body: "IITs",
        date: "Feb 03, 2026",
        app_deadline: "Sep 29, 2025",
        mode: "Online",
        website: "https://gate.iitk.ac.in",
        desc: "For M.Tech & PSUs."
    },
    {
        id: "bitsat",
        name: "BITSAT",
        full_name: "BITS Admission Test",
        stream: "Engineering",
        level: "University",
        conducting_body: "BITS",
        date: "May 20, 2026",
        app_deadline: "Apr 11, 2026",
        mode: "Online",
        website: "https://bitsadmission.com",
        desc: "For BITS Pilani campuses."
    },
    {
        id: "clat",
        name: "CLAT",
        full_name: "Common Law Admission Test",
        stream: "Law",
        level: "National",
        conducting_body: "NLUs",
        date: "Dec 03, 2025",
        app_deadline: "Nov 03, 2025",
        mode: "Offline",
        website: "https://consortiumofnlus.ac.in",
        desc: "For National Law Universities."
    },
    {
        id: "upsc",
        name: "UPSC CSE",
        full_name: "Civil Services Exam",
        stream: "Government",
        level: "National",
        conducting_body: "UPSC",
        date: "May 26, 2026",
        app_deadline: "Feb 21, 2026",
        mode: "Offline",
        website: "https://upsc.gov.in",
        desc: "For IAS, IPS, IFS."
    }
];

// --- COLLEGE DATA STORE (for Comparison) ---
const collegeData = [
    {
        id: "iit_bombay",
        name: "IIT Bombay",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=200",
        location: "Mumbai, Maharashtra",
        type: "Public",
        ranking: "#3 NIRF",
        fees: "₹8.5 Lakhs (Total)",
        placement: "98%",
        avg_package: "₹24 LPA",
        highest_package: "₹3.7 CPA",
        facilities: ["Hostel", "Sports Complex", "R&D Labs", "Gym"]
    },
    {
        id: "iit_delhi",
        name: "IIT Delhi",
        image: "https://images.unsplash.com/photo-1592280771884-1d1b15170d70?auto=format&fit=crop&q=80&w=200",
        location: "New Delhi, Delhi",
        type: "Public",
        ranking: "#2 NIRF",
        fees: "₹8.2 Lakhs (Total)",
        placement: "96%",
        avg_package: "₹22 LPA",
        highest_package: "₹2.5 CPA",
        facilities: ["Hostel", "Pool", "Smart Classrooms", "Library"]
    },
    {
        id: "bits_pilani",
        name: "BITS Pilani",
        image: "https://images.unsplash.com/photo-1621640786737-173873118486?auto=format&fit=crop&q=80&w=200",
        location: "Pilani, Rajasthan",
        type: "Private",
        ranking: "#18 NIRF",
        fees: "₹24 Lakhs (Total)",
        placement: "95%",
        avg_package: "₹18 LPA",
        highest_package: "₹60 LPA",
        facilities: ["Hostel", "Auditorium", "Incubation Center", "Sports"]
    },
    {
        id: "nit_trichy",
        name: "NIT Trichy",
        image: "https://images.unsplash.com/photo-1541339907198-e0e1add64322?auto=format&fit=crop&q=80&w=200",
        location: "Tiruchirappalli, Tamil Nadu",
        type: "Public",
        ranking: "#9 NIRF",
        fees: "₹6.5 Lakhs (Total)",
        placement: "92%",
        avg_package: "₹14 LPA",
        highest_package: "₹55 LPA",
        facilities: ["Hostel", "Computer Center", "Central Library", "Stadium"]
    },
    {
        id: "vit_vellore",
        name: "VIT Vellore",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=200",
        location: "Vellore, Tamil Nadu",
        type: "Private",
        ranking: "#12 NIRF",
        fees: "₹16 Lakhs (Total)",
        placement: "90%",
        avg_package: "₹9 LPA",
        highest_package: "₹1.2 CPA",
        facilities: ["Hostel", "Food Court", "Research Park", "Gym"]
    },
    {
        id: "srm_chennai",
        name: "SRM University",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=200",
        location: "Chennai, Tamil Nadu",
        type: "Private",
        ranking: "#32 NIRF",
        fees: "₹14 Lakhs (Total)",
        placement: "88%",
        avg_package: "₹7.5 LPA",
        highest_package: "₹45 LPA",
        facilities: ["Hostel", "Transport", "Hospital", "Auditorium"]
    }
];
