import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Research Experience Layout */}
          <div className="career-info-box company-group">
            <div className="company-header">
              <h3>NIT Jamshedpur</h3>
              <h5>Research Internship · July 2026 – Oct 2026</h5>
            </div>

            <div className="experience-list">
              <div className="experience-row">
                <div className="exp-left">
                  <div className="role-dot"></div>
                  <div className="role-meta">
                    <h4>Research Intern – Slurry Wear Rate Prediction</h4>
                    <h5>Machine Learning & Analytics</h5>
                    <p className="role-date">July 2026 – Oct 2026</p>
                  </div>
                </div>
                <div className="exp-right">
                  <p>
                    Built an end-to-end ML pipeline for slurry erosion wear-rate prediction: data preprocessing, interaction features, categorical encoding, and EDA. Benchmarked 10 regression models with grouped cross-validation, tuning Extra Trees, Random Forest, and Gradient Boosting to achieve test R² = 0.994 and RMSE = 0.250.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hackathons & Competitions */}
          <div className="career-info-box company-group">
            <div className="company-header">
              <h3>Hackathons & Global Challenges</h3>
              <h5>Competitive Engineering & Innovations</h5>
            </div>

            <div className="experience-list">
              <div className="experience-row">
                <div className="exp-left">
                  <div className="role-dot"></div>
                  <div className="role-connector"></div>
                  <div className="role-meta">
                    <h4>Meta PyTorch × Scaler OpenEnv</h4>
                    <h5>Grand Finalist</h5>
                    <p className="role-date">Top teams out of 70,000+ registrations</p>
                  </div>
                </div>
                <div className="exp-right">
                  <p>
                    Selected for the Grand Finale of Meta PyTorch × Scaler OpenEnv Hackathon. Architected and engineered an intelligent autonomous environment prototype with PyTorch.
                  </p>
                </div>
              </div>

              <div className="experience-row">
                <div className="exp-left">
                  <div className="role-dot"></div>
                  <div className="role-connector"></div>
                  <div className="role-meta">
                    <h4>Google Solution Challenge</h4>
                    <h5>Global Top 106</h5>
                    <p className="role-date">Out of 85,000+ developers & 6,700+ prototypes</p>
                  </div>
                </div>
                <div className="exp-right">
                  <p>
                    Recognized among the Top 106 prototypes globally in Google Solution Challenge for engineering impactful software solutions addressing UN Sustainable Development Goals.
                  </p>
                </div>
              </div>

              <div className="experience-row">
                <div className="exp-left">
                  <div className="role-dot"></div>
                  <div className="role-meta">
                    <h4>ZS Campus Beats & Aero Design</h4>
                    <h5>National Podium & SAE California</h5>
                    <p className="role-date">7,000+ participants across India</p>
                  </div>
                </div>
                <div className="exp-right">
                  <p>
                    Secured 2nd Runner-Up across India in business case-solving and analytical reasoning. Represented NIT Jamshedpur at IIT Bombay Techfest (2nd Runner-Up) and SAE Aero Design West 2025 (California).
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
