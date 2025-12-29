const projectsData = {
  "anchor-global": {
    title: "Anchor Global Website UI",
    type: "ui/ux",
    badge: "🎨 UI/UX Designer",
    description:
      "A comprehensive Figma design for a corporate website featuring modern layouts, team showcases, and contact sections. The design emphasizes clean aesthetics and user-friendly navigation.",
    fullDescription:
      "Anchor Global Website is a corporate web design project created in Figma. The design focuses on creating a professional and trustworthy brand presence with carefully crafted sections including hero banners, service offerings, team member profiles, and integrated contact forms. The color scheme and typography were selected to convey professionalism while maintaining visual interest.",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Responsive Design"],
    challenge:
      "The main challenge was creating a design that balanced corporate professionalism with modern web aesthetics while ensuring the interface remained intuitive for all user groups.",
    solution:
      "I developed a modular design system with reusable components, ensuring consistency across all pages. The layout prioritizes information hierarchy and includes interactive prototypes to demonstrate user flows.",
    features: [
      "Modern, professional design system",
      "Responsive layout designs for all devices",
      "Interactive prototypes for user testing",
      "Comprehensive team and contact sections",
    ],
    screenshots: [
      "assets/anchor.png",
      "assets/anchor1.png",
      "assets/anchor2.png",
    ],
    github: "https://www.figma.com/proto/yeqT0fVqyywivFWvJv6oVa/Anchor-Global?node-id=0-1&t=u0rn6x8Kvj2pUbLI-1",
    liveDemo: null,
  },

  "kitenge-mobile": {
  title: "E-commerce Android App",
  type: "Android Developer",
  badge: "📱 Android App",
  description:
    "A Flutter-based mobile e-commerce app for African fashion, focused on smooth shopping, secure authentication, and an intuitive user experience.",
  fullDescription:
    "Kitenge Closet is a modern Android e-commerce application built with Flutter, designed to showcase and sell African fashion. The app allows users to browse products, manage their cart, authenticate securely, and enjoy a seamless shopping experience optimized for performance and usability.",
  technologies: [
    "Flutter",
    "Dart",
    "Firebase Authentication",
    "State Management",
    "REST APIs",
  ],
  challenge:
    "Building a smooth and responsive mobile shopping experience while ensuring secure user authentication and efficient state management.",
  solution:
    "I leveraged Flutter’s widget system and efficient state management to create a fast, intuitive UI, while integrating secure authentication and clean architecture for scalability.",
  features: [
    "Product browsing and listing",
    "Cart management",
    "User authentication",
    "Responsive mobile UI",
    "Smooth navigation and checkout flow",
  ],
  screenshots: [
    "assets/android.jpeg",
  ],
  github: "https://github.com/Veronicah-155/flutter_ecommerce_app",
  liveDemo: null,
},

  "kitenge-closet": {
    title: "Kitenge Closet E-commerce",
    type: "fullstack",
    badge: "🌐 Fullstack Developer",
    description:
      "An e-commerce platform showcasing African fashion, offering seamless browsing, detailed product views, and a smooth checkout experience.",
    fullDescription:
      "Kitenge Closet is a full-featured e-commerce platform dedicated to African fashion. The platform provides users with an immersive shopping experience, featuring high-quality product imagery, detailed descriptions, size guides, and a streamlined checkout process. Built with modern web technologies, it offers responsive design and smooth performance across all devices.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
    challenge:
      "Creating an engaging shopping experience that highlights the unique beauty of African fashion while ensuring fast page loads and secure transactions.",
    solution:
      "I implemented an optimized image loading system, created an intuitive product filtering mechanism, and built a secure backend with proper session management and data validation.",
    features: [
      "Product catalog with advanced filtering",
      "Detailed product pages with image galleries",
      "Shopping cart with real-time updates",
      "Secure checkout process",
      "Responsive design for android shopping",
      "User account management",
    ],
    screenshots: [
      "assets/Kitenge.png",
      "assets/Kitenge1.png",
      "assets/Kitenge2.png",
    ],
    github: "https://github.com/Veronicah-155/Kitenge-Closet",
    liveDemo: null,
  },
};

// Function to get project by ID
function getProjectById(id) {
  return projectsData[id] || null;
}
