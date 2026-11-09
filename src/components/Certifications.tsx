import { MdArrowOutward } from "react-icons/md";
import "./styles/Career.css";

const certifications = [
    {
        title: "Google Solution Challenge - Global Top 106",
        issuer: "Google",
        year: "2025",
        link: "https://drive.google.com/file/d/1Gb2IlDwq08DSEu9S8FaSPBG9UhXhqndB/view?usp=sharing",
        description:
            "Ranked among the Top 106 globally out of 85,000+ developers and 6,700+ submissions for building impactful solutions addressing UN Sustainable Development Goals.",
    },
    {
        title: "Meta PyTorch × Scaler OpenEnv Finalist",
        issuer: "Meta & Scaler",
        year: "2025",
        link: "https://github.com/Amitgitup/DebugZero",
        description:
            "Selected for the Grand Finale of Meta PyTorch × Scaler OpenEnv Hackathon among top teams out of 70,000+ registrations across India.",
    },
    {
        title: "Complete Generative AI Course With LangChain & HuggingFace",
        issuer: "Udemy",
        year: "2025",
        link: "https://drive.google.com/file/d/1hUpvkoI0lUPpvWPvJo2axR6xfUdqfOPI/view?usp=sharing",
        description:
            "Mastered Generative AI architectures, LangChain agentic pipelines, RAG systems, vector embeddings, and Hugging Face transformer integration.",
    },
    {
        title: "Complete Data Science, ML, DL & NLP Bootcamp",
        issuer: "Udemy",
        year: "2025",
        link: "https://drive.google.com/file/d/1jHgMFaVxeFw7rB9d7yYCMaFoEKy-Fa7g/view?usp=sharing",
        description:
            "Mastered foundational and advanced machine learning algorithms, deep learning architectures, PyTorch, Scikit-learn, and NLP workflows.",
    },
    {
        title: "IIT Guwahati C&A Competition - Top 25%",
        issuer: "IIT Guwahati",
        year: "2024",
        link: "https://drive.google.com/file/d/1dI1gDPYKstcr7YTXpWhATSwoohaN-sk2/view?usp=sharing",
        description:
            "Achieved Top 25 Percentile ranking among 500+ participants in technical analytics, case-solving, and algorithmic challenges.",
    },
    {
        title: "SAE Aero Design West (California)",
        issuer: "SAE International",
        year: "2025",
        link: "https://drive.google.com/file/d/1afRycy1xaauwXWYW7RN7hhmWEBS9NT6h/view?usp=sharing",
        description:
            "Represented NIT Jamshedpur with Team Phoenix at the international SAE Aero Design West competition in California, USA.",
    },
];

const Certifications = () => {
    return (
        <div className="career-section section-container" id="certifications">
            <div className="career-container">
                <h2>
                    Certifications <span>& Honors</span>
                </h2>
                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>

                    <div className="experience-list">
                        {certifications.map((cert, index) => (
                            <div className="experience-row" key={index}>
                                <div className="exp-left">
                                    <div className="role-dot"></div>
                                    {index !== certifications.length - 1 && (
                                        <div className="role-connector"></div>
                                    )}
                                    <div className="role-meta">
                                        <h4>{cert.title}</h4>
                                        <h5>{cert.issuer}</h5>
                                        <p className="role-date">{cert.year}</p>
                                    </div>
                                </div>
                                <div className="exp-right">
                                    <p>{cert.description}</p>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-cursor="disable"
                                        className="cert-view-link"
                                    >
                                        View Certificate <MdArrowOutward />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
