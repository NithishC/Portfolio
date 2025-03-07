import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "AmazSense: Graph-Driven Context Retrieval",
    description: "Developed a Graph RAG-based system leveraging cuGraph to enhance relationship context extraction, reduce hallucinations, and improve knowledge retrieval efficiency in generative AI.",
    tags: ["Python", "cuGraph", "Graph RAG", "ArangoDB", "LLM", "Generative AI", "NetworkX", "NVIDIA RAPIDS", "HPC", "Knowledge Retrieval", "Machine Learning"],
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "Stock Market Prediction Using Parallel Computing and Sentiment Analysis",
    description: "Developed a stock market prediction model leveraging HPC clusters, GPU acceleration, and parallel processing to reduce training time by over 50%, while integrating sentiment analysis to reveal the impact of public opinion and news events on stock prices.",
    tags: ["Python", "Dask", "PyTorch", "NLP", "HPC", "MPI", "Pandas", "NumPy", "Scikit-learn", "NLTK"],
    link: "https://github.com/NithishC/HPC-Parallel-ML",
    featured: true
  },
  {
    id: 3,
    title: "Personalized AI PDF Assistant",
    description: "Designed a personalized PDF assistant utilizing advanced Retrieval-Augmented Generation (RAG) techniques and developed a browser extension to capture user interaction history, enhancing the personalized user experience.",
    tags: ["Python", "RAG", "Browser Extension", "JavaScript", "User Experience", "Machine Learning", "NLP", "Web Development"],
    link: "https://github.com/Atlee-AI/Atlee---Personalized-PDF-Assistant",
  },
  {
    id: 4,
    title: "ShareQuill - Full-Stack Rental and Sharing Platform",
    description: "Developed a full-stack rental and sharing eCommerce app using Express.js and MongoDB, implementing 10+ API endpoints, and deployed the backend on Heroku. The app was stress-tested for 20 concurrent users, maintaining an average response time of 160ms.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "API Development", "Heroku", "Full-Stack", "Ecommerce", "Stress Testing", "JavaScript"],
    link: "https://github.com/NithishC/ShareQuill"
  },
  {
    id: 5,
    title: "AI and ML based crop detection",
    description: "Developed an offline mobile application for crop identification, achieving over 85% accuracy by leveraging advanced AI and machine learning techniques. Integrated geolocation tagging to enhance contextual crop data accuracy, contributing to precision agriculture efforts.",
    tags: ["Python", "AI", "Machine Learning","CNN", "Tensorflow Lite", "keras", "MobileNetV2", "Mobile App Development", "Crop Identification", "Geolocation", "Precision Agriculture", "Android", "Offline Application"],
    link: "https://link.springer.com/chapter/10.1007/978-981-16-1244-2_19",
    paper: true,
    featured: true
  },
  {
    id: 6,
    title: "ERP System",
    description: "Developed a customized ERP system for faculty members, reducing data entry errors by 10%, and implemented access control for three distinct user types to ensure secure and appropriate access. Enhanced log tracking by 20%, providing administrators with a comprehensive view of staff activities.",
    tags: ["Python", "Django", "ERP System", "Access Control", "User Management", "Data Accuracy", "Log Tracking",  "Database Management", "Security", "System Development"],
    link: "https://github.com/NithishC/Erp"
  }
];
