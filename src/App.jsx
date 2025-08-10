import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Mail, Linkedin, MapPin, Calendar, Code, Database, Cloud, Brain, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Neural Network From Scratch",
      period: "May 2025 – Jun 2025",
      tech: ["Python", "NumPy", "Streamlit"],
      description: "Built a feedforward neural network from first principles with vectorized forward/backprop, ReLU/Softmax, cross-entropy, and L2 regularization.",
      highlights: [
        "Dual interfaces: CLI for scripted runs and Streamlit UI",
        "Containerized with multi-stage Dockerfile",
        "Deployed on Render with environment-based configuration"
      ],
      github: "https://github.com/diego-88850/NeuralNetwork",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Weatherbot – AI Weather Emails",
      period: "Jun 2025 – Jul 2025", 
      tech: ["Python", "SQLite", "Streamlit"],
      description: "End-to-end weather alert system with personality-styled AI commentary and automated email delivery.",
      highlights: [
        "Integrated WeatherAPI and Gemini for NLG",
        "SQLite persistence with structured logging",
        "Dockerized with docker-compose for reproducible deploys"
      ],
      github: "https://github.com/diego-88850/Weather_Bot",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Real-Time Face Auth/ID Demo",
      period: "Jul 2025 – Aug 2025",
      tech: ["Python", "OpenCV", "React", "SQLite"],
      description: "Full-stack authentication system using FaceNet embeddings and cosine similarity matching.",
      highlights: [
        "React webcam UI with one-click authentication",
        "Blink-based liveness detection heuristic", 
        "Full containerized stack with CI/CD pipeline"
      ],
      github: "https://github.com/diego-88850/FaceRecog",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "ICU Mortality Risk Prediction",
      period: "Jan 2025 – Feb 2025",
      tech: ["Python", "Scikit-Learn", "Pandas"],
      description: "Logistic regression model predicting ICU mortality with 82.2% AUROC using real patient data.",
      highlights: [
        "Processed 12,000+ patient records with feature engineering",
        "5-fold cross-validation improving F1-score by 20%",
        "L1/L2 regularization to identify key mortality predictors"
      ],
      github: null,
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Fakebook JDBC — SQL Database Optimization",
      period: "Jan 2025 – Feb 2025",
      tech: ["Java", "SQL", "JDBC"],
      description: "Developed and optimized SQL queries for a large-scale Fakebook social media dataset.",
      highlights: [
        "Implemented JDBC connection pooling to improve query performance",
        "Designed complex relational queries improving retrieval efficiency by 30%",
        "Optimized database operations for large-scale social media data"
      ],
      github: null,
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "MongoDB Data Processing",
      period: "Feb 2025 – Mar 2025",
      tech: ["Python", "MongoDB", "NoSQL"],
      description: "Implemented data pipelines to process and query NoSQL JSON datasets in MongoDB.",
      highlights: [
        "Designed efficient indexing strategies improving query execution by 25%",
        "Developed aggregation queries for large-scale data analysis",
        "Enhanced data retrieval efficiency for NoSQL datasets"
      ],
      github: null,
      icon: <Database className="w-6 h-6" />
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "JavaScript", "C/C++", "SQL", "NoSQL", "Scala", "HTML/CSS", "MATLAB"],
    "Frameworks": ["React", "FastAPI", "Streamlit", "TensorFlow", "PyTorch", "Scikit-Learn", "JDBC"],
    "Tools": ["AWS", "Docker", "Git", "Linux", "Azure", "MongoDB", "Spark", "OpenCV", "AutoCAD"]
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-200/50">
        <div className="w-full max-w-none px-6 py-4">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-2xl font-bold text-amber-900">AC</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-amber-800 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50 w-full" 
             style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
        
        <div className="text-center z-10 w-full max-w-4xl mx-auto px-6">
          {/* Profile Initial */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-5xl font-bold text-white">A</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
            Alonso Coronado
          </h1>
          <h2 className="text-2xl md:text-3xl text-amber-700 mb-8 font-light">
            Computer Science & Engineering Student
          </h2>
          <p className="text-xl text-amber-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            Amazon SDE Intern • Machine Learning Enthusiast • Full-Stack Developer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="mailto:diegocor@umich.edu" 
               className="px-8 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="/Alonso_Coronado_Resume.pdf" download="Alonso_Coronado_Resume.pdf"
               className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a href="https://github.com/diego-88850" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 border-2 border-amber-600 text-amber-700 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-700" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 w-full">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-amber-900 mb-16 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">Education & Experience</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-amber-900">University of Michigan</h4>
                      <p className="text-amber-700">B.S.E - Computer Science and Engineering</p>
                      <p className="text-sm text-amber-600">Aug 2023 – Apr 2027</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-amber-900">Amazon SDE Intern</h4>
                      <p className="text-amber-700">Business Data Technologies</p>
                      <p className="text-sm text-amber-600">Jun 2025 – Aug 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">Personal</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                <p className="text-amber-700 leading-relaxed italic text-center py-8">
                  [Personal section placeholder - 150 words about your interests, hobbies, what excites you about technology, career aspirations, etc. This will be customized with your personal story and what makes you unique beyond your technical skills.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 w-full">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-amber-900 mb-16 text-center">Experience</h2>
          
          <div className="space-y-8">
            {/* Amazon Experience */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Software Development Engineer Intern</h3>
                  <p className="text-amber-700 font-medium mb-2">Amazon – Business Data Technologies</p>
                  <p className="text-amber-600 text-sm mb-4">Jun 2025 – Aug 2025 • Detroit, MI</p>
                </div>
                
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Engineered a full CI/CD pipeline for a job decoration service, automating ~100 weekly updates and cutting deployment effort to zero for downstream systems.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Monitored and optimized performance for an engine processing hundreds of thousands of jobs/day, creating real-time metrics and alarms for API errors, fault rates, latency, and reliability.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Reduced incident resolution time from 8 hours to minutes by building a slow job runtime monitor in Java using concurrency executors and branching logic.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Integrated AWS (CloudWatch, Lambda, S3, CloudFormation) and internal Amazon systems to automate monitoring, logging, and recovery processes.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Helios Experience */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Computer Engineering Intern</h3>
                  <p className="text-amber-700 font-medium mb-2">Helios Electric LLC</p>
                  <p className="text-amber-600 text-sm mb-4">Summers 2022 – 2024 • Gaithersburg, MD</p>
                </div>
                
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Developed and configured SEL equipment for simulation testing and system automation.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Reviewed and analyzed technical electrical markups to ensure accurate implementation of system designs.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Collaborated with a team to develop and integrate software modules for a simulation rack, optimizing its functionality and testing efficiency.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Presented technical AutoCAD and SEL projects to customers and other departments.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-amber-800">Leveraged Microsoft Azure for data storage and analysis, for efficient handling of large datasets and supporting data-driven decision-making.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50 w-full">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-amber-900 mb-16 text-center">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">{project.title}</h3>
                    <p className="text-sm text-amber-600">{project.period}</p>
                  </div>
                </div>
                
                <p className="text-amber-800 mb-6 leading-relaxed">{project.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-amber-700">{highlight}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 font-medium transition-colors">
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-amber-900 mb-16 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100">
                <h3 className="text-xl font-bold text-amber-900 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium border border-amber-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-amber-100 to-orange-100 w-full">
        <div className="w-full max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8">Let's Connect</h2>
          <p className="text-xl text-amber-700 mb-12">
            I'm always interested in new opportunities and interesting projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:diegocor@umich.edu" 
               className="flex items-center justify-center gap-3 px-8 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Mail className="w-5 h-5" />
              diegocor@umich.edu
            </a>
            <a href="https://www.linkedin.com/in/alonsodcoronado" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/diego-88850" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-amber-900 text-center w-full">
        <p className="text-amber-100">
          © 2025 Alonso Coronado.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;