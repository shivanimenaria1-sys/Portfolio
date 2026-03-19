export const profile = {
  name: "Shivani Menaria",
  role: "Full-Stack Developer & Data Science Student",
  tagline: "I build responsive MERN products, practical machine learning workflows, and backend systems that solve real problems.",
  summary:
    "I am a data science undergraduate with strong fundamentals in DSA, DBMS, OOP, and Computer Networks. My work combines full-stack development with data-driven thinking, from React interfaces and Node APIs to machine learning models and evaluation pipelines.",
  email: "shivanimenaria1@gmail.com",
  phone: "7357767963",
  linkedin: "https://linkedin.com/in/shivani-menaria-681a13346",
  github: "https://github.com/shivanimenaria1-sys",
  resumePath: "/shivani-menaria-resume.pdf",
  about:
    "I enjoy turning ideas into polished web experiences that are fast, useful, and visually clear. My strongest work sits at the intersection of frontend development, backend architecture, and machine learning-backed features.",
  aboutPoints: [
    "Interested in internships and product-building opportunities where engineering quality matters.",
    "Comfortable with both UI implementation and backend API design.",
    "Prefer projects that combine problem-solving, scalability, and practical user value.",
  ],
  focusAreas: [
    "Responsive React interfaces",
    "REST API architecture",
    "MERN application flows",
    "Machine learning integration",
  ],
  heroStats: [
    { label: "CGPA", value: 8.81, decimals: 2, suffix: " / 10" },
    { label: "Major Projects", value: 3, decimals: 0, suffix: "" },
    { label: "Dean's List", value: 2, decimals: 0, suffix: "x" },
  ],
};

export const skills = [
  {
    symbol: "JS",
    title: "Languages",
    items: ["C", "C++", "JavaScript", "Python (Basics)"],
  },
  {
    symbol: "UI",
    title: "Frontend",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    symbol: "API",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    symbol: "DB",
    title: "Databases",
    items: ["MongoDB", "SQL"],
  },
  {
    symbol: "DEV",
    title: "Tools",
    items: ["Git", "VS Code"],
  },
  {
    symbol: "CS",
    title: "Core Concepts",
    items: ["DSA", "OOP", "OS", "CN", "Machine Learning", "MVC Architecture"],
  },
];

export const highlights = [
  "Designed scalable REST APIs following MVC architecture and clean coding practices.",
  "Applied data-driven decision-making using machine learning evaluation metrics.",
  "Built responsive interfaces with real-time interaction and practical customization workflows.",
];

export const projects = [
  {
    title: "E-Commerce Sales Prediction & Customer Segmentation",
    stack: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Scikit-learn"],
    accent: "sunrise",
    summary:
      "Built an end-to-end machine learning workflow for e-commerce sales prediction and customer segmentation. The project involved preprocessing raw data, engineering useful features, handling missing values, and training ensemble models such as Random Forest and XGBoost. After tuning model performance, I evaluated results using RMSE and MAE, achieving an R² score of 0.75. I also applied K-Means clustering to group customers and extract practical business insights from behavioral patterns.",
    liveLink: "#",
    githubRepo: "https://github.com/shivanimenaria/ecommerce-sales-prediction",
    points: [
      "Built a machine learning pipeline to predict e-commerce sales with ensemble techniques.",
      "Handled data preprocessing, feature engineering, and missing value treatment.",
      "Implemented Random Forest and XGBoost with hyperparameter tuning, achieving an R² score of 0.75.",
      "Evaluated model performance using RMSE and MAE, then applied K-Means clustering for customer segmentation.",
    ],
  },
  {
    title: "AI Resume Builder",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "AI/NLP"],
    accent: "teal",
    summary:
      "Developed an AI-powered resume builder using the MERN stack to help users create, edit, and manage professional resumes through a responsive interface. I designed the frontend for real-time preview and customization while building secure RESTful APIs for authentication and resume data management. To improve the product experience, I integrated AI-assisted content suggestions for summaries, skills, and project descriptions, making the workflow more practical and user-friendly.",
    liveLink: "#",
    githubRepo: "https://github.com/shivanimenaria/ai-resume-builder",
    points: [
      "Developed an AI-powered resume builder for creating, editing, and managing professional resumes.",
      "Integrated AI-based content suggestions for summaries, skills, and project descriptions.",
      "Built secure RESTful APIs for authentication and resume data management.",
      "Designed a responsive React interface with real-time preview and dynamic customization.",
    ],
  },
  {
    title: "Hostel-Based Peer-to-Peer Marketplace Platform",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "React.js"],
    accent: "ember",
    summary:
      "Created a hostel-focused peer-to-peer marketplace where students could act as both buyers and sellers through a unified account. The platform included RESTful APIs and MongoDB schemas for users, products, and orders, along with features like product listing, hostel-based filtering, order placement, and order tracking. I also explored AI-assisted image-based listing so product names and categories could be suggested automatically, making the selling flow faster and more convenient.",
    liveLink: "#",
    githubRepo: "https://github.com/shivanimenaria/hostel-marketplace",
    points: [
      "Developed a hostel-focused marketplace where students can act as buyers and sellers through one account.",
      "Designed RESTful APIs and MongoDB schemas for users, products, and orders.",
      "Implemented product listing, hostel-based filtering, order placement, and order tracking.",
      "Integrated AI-assisted image-based product listing to automate product name and category suggestions.",
    ],
  },
];

export const education = {
  school: "Manipal University Jaipur",
  degree: "B.Tech in Data Science",
  duration: "2023 - 2027",
  scoreLabel: "CGPA",
  scoreValue: 8.81,
  scoreMax: 10,
};

export const certifications = [
  "NPTEL: Object-Oriented Programming using Java",
  "NPTEL: Operating Systems",
  "Dean's List Award (2 Times)",
];
