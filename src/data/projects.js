
export const PROJECTS = [
    {
        title: "Interview Prep — AI Coach",
        description: "A comprehensive AI interview platform that simulates real-world scenarios with voice and chat capabilities. Features a 'Gauntlet Mode' for technical mastery, integrated Razorpay payments, and Gemini 3.0 models.",
        tech: ["Gemini 3.0", "FastAPI", "PostgreSQL", "LangChain", "React", "Razorpay"],
        category: "GenAI",
        image: "./interview_prep.png", // Placeholder, will use fallback or can be updated
        liveLink: "https://interview-prep-frontend-dusky.vercel.app/",
        githubLink: "#", // Private startup repo? Leaving as # for now based on context
        isStartup: true // Custom flag for styling
    },
    {
        title: "The Price is Right — Autonomous AI",
        description: "Autonomous multi-agent framework that monitors deal feeds, estimates true values using ensemble AI models, and sends push notifications for discounts.",
        tech: ["Gemini 2.5", "LangChain", "ChromaDB", "Pushover", "Streamlit"],
        category: "GenAI",
        image: "/the_price_is_Right.png",
        liveLink: "https://priceisright.streamlit.app/",
        githubLink: "https://github.com/RohanTemgire/LLM-apps/tree/main/PriceIsRight"
    },
    {
        title: "InsureLLM RAG Chatbot",
        description: "Robust RAG workflow integrating organizational data into a conversational AI. Features query rewriting, dual-stage retrieval, and custom evaluation.",
        tech: ["Gemini 2.5", "RAG", "ChromaDB", "LangChain", "Streamlit"],
        category: "GenAI",
        image: "/insureLLM_RAG_chatbot.png",
        liveLink: "https://insurelm-rag-chatbot.streamlit.app/",
        githubLink: "https://github.com/RohanTemgire/LLM-apps/tree/main/InsureLLM"
    },
    {
        title: "Brain Tumor Detection (Medical AI)",
        description: "Medically realistic MRI classification system detecting 4 tumor types/grades using EfficientNetB2. Quantized to INT8 for edge deployment with rigorous evaluation.",
        tech: ["EfficientNetB2", "TensorFlow", "Keras", "TFLite"],
        category: "ML",
        image: "/brain_tumor_detection.png",
        liveLink: "",
        githubLink: "https://github.com/RohanTemgire/machine-learning-zoomcamp/tree/main/Capstone_project"
    },
    {
        title: "Fashion Image Classifier",
        description: "End-to-end clothing classification system achieving 90% accuracy using Transfer Learning (Xception). Deployed with a FastAPI backend.",
        tech: ["Xception", "TensorFlow", "Streamlit", "FastAPI"],
        category: "ML",
        image: "/fashion_classifier.png",
        liveLink: "https://fashion-classifier-2.streamlit.app/",
        githubLink: "https://github.com/RohanTemgire/machine-learning-zoomcamp/tree/main/08-Deep-learning"
    },
    {
        title: "Credit Risk Scoring Engine",
        description: "Financial risk assessment model predicting loan defaults using XGBoost and Decision Trees to optimize lending decisions.",
        tech: ["XGBoost", "Scikit-Learn", "Python", "Pandas"],
        category: "ML",
        image: "/credit_risk_scording.png",
        liveLink: "",
        githubLink: "https://github.com/RohanTemgire/machine-learning-zoomcamp/tree/main/07-midterm%20proj"
    },
    {
        title: "Real-Time Stock Price Monitoring System",
        description: "Designed a real-time data pipeline using GCP (Pub/Sub, Dataflow, BigQuery) for streaming stock analytics with efficient storage and querying.",
        tech: ["Python", "GCP", "Looker Studio", "BigQuery"],
        category: "Data Engineering",
        image: "/project-stock.jpg", // Placeholder
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "CloudShift - On-Prem to Azure Migration",
        description: "Migrated 3GB+ of on-prem data to Azure using SSMS and Azure Synapse. Optimized storage by 30% using Delta format and Medallion architecture.",
        tech: ["Azure Synapse", "Databricks", "ADLS Gen2", "SSMS"],
        category: "Data Engineering",
        image: "/project-cloud.jpg", // Placeholder
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Land Registry Management System",
        description: "Blockchain-based system for secure and transparent land registry management.",
        tech: ["Blockchain", "Solidity", "React"],
        category: "Web3", // Mapping to Other if not GenAI/ML
        image: "/project-land.jpg", // Placeholder
        liveLink: "#",
        githubLink: "#"
    }
];
