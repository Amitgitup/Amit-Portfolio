import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Multi-Agent LLM Orchestration Platform",
    category: "Agentic AI & LLM Systems",
    tools: "LangGraph, FastAPI, Groq LLaMA, Gemini, Tavily, AWS ECS, Docker, Jenkins",
    image: "/images/multi-agent.png",
    video: "",
    link: "https://github.com/Amitgitup/Multi-AI-Agent",
  },
  {
    title: "SportShield",
    category: "Full-Stack AI Protection Platform",
    tools: "FastAPI, Next.js, GCP Cloud Run, Vertex AI, Cloud Vision, Firestore, C2PA, DMCA Automation",
    image: "/images/sportshield.png",
    video: "",
    link: "https://github.com/sarasinghrse/sportshield",
  },
  {
    title: "Medical RAG Chatbot",
    category: "Generative AI & Semantic Retrieval",
    tools: "Flask, LangChain, HuggingFace, FAISS Vector DB, Docker, AWS (ECR/EC2), CI/CD",
    image: "/images/medical-rag.png",
    video: "",
    link: "https://github.com/Amitgitup/RAG-Medical-Chatbot",
  },
  {
    title: "Hotel Reservation Prediction",
    category: "MLOps & Predictive Modeling",
    tools: "LightGBM, MLflow, DagsHub, Jenkins CI/CD, Docker, GCP Cloud Run, SMOTE",
    image: "/images/hotel-reservation.png",
    video: "",
    link: "https://github.com/Amitgitup/Hotel-Reservation-Prediction",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <div className="work-tags-flex">
                            {project.tools.split(', ').map((tool, tagIndex) => (
                              <div className="work-tags" key={tagIndex}>
                                {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                            data-cursor="disable"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              color: 'var(--accentColor)',
                              marginTop: '20px',
                              fontSize: '16px',
                              fontWeight: '500',
                              textDecoration: 'none'
                            }}
                          >
                            View Project <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} video={project.video} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
