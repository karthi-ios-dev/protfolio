import { Briefcase, Code2, GraduationCap, User, FolderGit2, Mail } from "lucide-react";

export const resume = {
    basics: {
        name: "Karthikeyan Venkatesan",
        label: "iOS Mobile App Developer",
        email: "karthivenkatesan.cse@gmail.com",
        phone: "+91 9940852159",
        url: "https://www.linkedin.com/in/karthiiosdev",
        summary: "Senior iOS Engineer with 5+ years of hands-on experience building secure, scalable, high-performance iOS applications using Swift, SwiftUI, and UIKit. Strong expertise in Swift Concurrency (async/await), MVVM, REST API integration, performance optimization. Proven ability to deliver enterprise-grade mobile solutions, ensure code quality through static analysis, and collaborate effectively with cross-functional teams.",
        location: {
            city: "Salem",
            region: "Tamil Nadu",
            country: "India",
        },
        profiles: [
            {
                network: "LinkedIn",
                username: "karthiiosdev",
                url: "https://www.linkedin.com/in/karthiiosdev",
            },
            {
                network: "LeetCode",
                username: "karthi_ios_dev",
                url: "https://leetcode.com/u/karthi_ios_dev/",
            }
        ]
    },
    work: [
        {
            name: "Sawab Technologies",
            position: "iOS App Developer",
            url: "",
            startDate: "2021-03",
            endDate: "Present",
            summary: "Developed and implemented new iOS app features based on client requirements, enhancing existing products using Swift and UIKit while ensuring stability and performance.",
            highlights: [
                "Integrated RESTful APIs (GET, POST, PUT, DELETE, MULTIPART) for real-time data synchronization and robust backend communication.",
                "Implemented Firebase services, including Authentication, Cloud Messaging (FCM), Analytics, and Crashlytics, to improve user engagement and monitor production issues.",
                "Managed App Store and TestFlight releases, including build generation, code signing, and release submissions.",
                "Followed MVVM/MVC/JSON architecture, reusable components, and clean code practices to ensure maintainability and scalability.",
                "Implement Major Payment gateways Razorpay, Tamara, Tabby, Apple Pay, Payfort."
            ]
        },
        {
            name: "NDOT Technologies",
            position: "Junior Software Associate",
            url: "",
            startDate: "2019-06",
            endDate: "2021-03",
            summary: "Developed and implemented new iOS app features based on client requirements, enhancing existing products using Swift and UIKit while ensuring stability and performance.",
            highlights: [
                "Integrated Google Maps services to enable live location tracking and map-based user features within the application.",
                "Maintained the product through regular bug fixing, issue analysis, and performance improvements to ensure smooth production releases.",
                "Performed white-label customization for client-specific builds and handled App Store uploads, including configuration, code signing, and release submission."
            ]
        }
    ],
    education: [
        {
            institution: "Anna University",
            area: "Computer Science and Engineering",
            studyType: "Bachelor",
            startDate: "2015",
            endDate: "2019",
            score: "65%"
        },
        {
            institution: "State Board of Tamilnadu",
            area: "Computer Science",
            studyType: "HSLC",
            startDate: "2013",
            endDate: "2015",
            score: "75%"
        },
        {
            institution: "State Board of Tamilnadu",
            area: "General",
            studyType: "SSLC",
            startDate: "2013",
            endDate: "2013",
            score: "75%"
        }
    ],
    skills: [
        {
            name: "iOS Development",
            keywords: ["Swift", "Xcode", "UIKit", "SwiftUI", "iOS SDK", "WebKit (WKWebView)", "App Lifecycle"]
        },
        {
            name: "Architecture",
            keywords: ["MVC", "MVVM"]
        },
        {
            name: "Concurrency",
            keywords: ["Async/Await", "DispatchQueue", "Actors"]
        },
        {
            name: "Data Binding",
            keywords: ["SwiftUI Data Binding (@State, @Binding, @ObservedObject)", "NotificationCenter", "Closures"]
        },
        {
            name: "Backend & APIs",
            keywords: ["REST API integration", "JSON parsing (Codable)", "Third-party API integrations", "Payment Gateway integration"]
        },
        {
            name: "Tools & Frameworks",
            keywords: ["Firebase (Cloud Messaging, Analytics, Crashlytics)", "Git", "CocoaPods", "Push Notifications (APNs)"]
        }
    ],
    projects: [
        {
            name: "DAANAH",
            description: "E-commerce / Fashion / Payments application with customization options and RTL support.",
            highlights: [
                "Customization Options: Various fabrics, colors, and styles choices, Offer grouping, Deeplink.",
                "RTL-Based UI: Designed with right-to-left layout for accessibility.",
                "Account Deletion Process: Privacy-focused account deletion option.",
                "Social Media Login Integration: Easy login/registration.",
            ],
            technologies: ["Swift", "UIKit", "Firebase", "Realm"],
            url: "https://apps.apple.com/in/app/daanah-%D8%AF%D8%A7%D9%86%D8%A9/id1494853357"
        },
        {
            name: "MATHOUN",
            description: "Marriage Booking For Brokers with availability management and subscription plans.",
            highlights: [
                "Availability Management: Booking creation based on provider availability.",
                "Subscription-Based Booking: Plans with booking count limits.",
                "Date Alignment: Hijri and Gregorian calendar support.",
                "Flutter Migration Adoption: Recreated using Flutter with AI-assisted tools."
            ],
            technologies: ["Flutter", "Dart", "Provider"],
            url: "https://apps.apple.com/in/app/mathoun/id6751084778"
        },
        {
            name: "KJS JEWELLERS",
            description: "Chit System application for payments and tracking.",
            highlights: [
                "Chits Module: Monthly, one-time, or specific schedule payments.",
                "Payment Integration: Razorpay, HDFC, and others.",
                "Tracking and history pages."
            ],
            technologies: ["Swift", "UIKit", "Razorpay"],
            url: "https://apps.apple.com/in/app/kjs-jewellers/id1456642589"
        },
        {
            name: "BRINGO",
            description: "Comprehensive multi-role application for Customer, Driver, and Chat System.",
            highlights: [
                "Customer & Driver Applications: Multi-role app for order management.",
                "Chat Module: Real-time chat using WebSockets.",
                "Map Integration: Live driver location tracking using maps and WebSockets.",
                "Data Model Type Handling: Custom model decoding using Codable."
            ],
            technologies: ["Swift", "WebSocket", "GoogleMaps", "CoreLocation"],
            url: ""
        },
        {
            name: "JIMCABS",
            description: "Driver / Passenger App with ride booking and tracking.",
            highlights: [
                "Bookings: End-to-end ride booking (Ride Now / Ride Later).",
                "Map Integration: Google Maps with GPS tracking and fare estimation.",
                "SOS & Operational Features: SOS calling, job history management."
            ],
            technologies: ["Swift", "UIKit", "GoogleMaps"],
            url: ""
        }
    ]
};

export const navLinks = [
    { name: "Home", href: "/", icon: User },
    { name: "About", href: "/about", icon: User },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Contact", href: "/contact", icon: Mail },
];
