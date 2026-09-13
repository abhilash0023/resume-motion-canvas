
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Calendar, MapPin, MessageCircle, BookOpen, ShoppingCart, Dumbbell } from 'lucide-react';
import travelPlannerImg from '../assets/travel-planner.jpg';
import geminiCloneImg from '../assets/gemini-clone.jpg';
import smartLmsImg from '../assets/smart-lms.jpg';
import ecommerceImg from '../assets/ecommerce.jpg';
import fitFusionImg from '../assets/fit-fusion.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Travel Itinerary Planner",
      description: "Responsive travel itinerary planner built with React.js, letting users create, edit and manage personalised travel plans with real-time weather forecasting and interactive maps.",
      icon: MapPin,
      technologies: ["React.js", "REST APIs", "State Management"],
      color: "from-blue-500 to-purple-600",
      github: "https://github.com/abhilash0023/Travel.com",
      image: travelPlannerImg
    },
    {
      title: "E-Commerce Website",
      description: "Fully responsive e-commerce application with dynamic product listings, search and category filtering, cart management, order summary and secure checkout using React Router and Context API.",
      icon: ShoppingCart,
      technologies: ["React.js", "React Router", "Context API"],
      color: "from-emerald-500 to-teal-600",
      github: "https://github.com/abhilash0023",
      image: ecommerceImg
    },
    {
      title: "Gemini Clone",
      description: "AI-powered chatbot interface built with React.js and Vite, integrated with the Gemini API for real-time conversational responses, loading indicators and conversation history.",
      icon: MessageCircle,
      technologies: ["React", "Vite", "Gemini API"],
      color: "from-orange-500 to-red-600",
      github: "https://github.com/abhilash0023/Gemini_Clone",
      image: geminiCloneImg
    },
    {
      title: "Smart-LMS",
      description: "Full-stack Learning Management System with secure authentication for students and admins, course management, enrolment, progress tracking and RESTful APIs.",
      icon: BookOpen,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      color: "from-indigo-500 to-purple-600",
      github: "https://github.com/abhilash0023/Smart-LMS",
      image: smartLmsImg
    },
    {
      title: "Fit Fusion",
      description: "Gym & fitness management platform with Admin, Trainer and Member dashboards, JWT auth and role-based access, UPI payments with QR generation, invoicing and 80mm thermal receipt printing.",
      icon: Dumbbell,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      color: "from-rose-500 to-pink-600",
      github: "https://github.com/abhilash0023/FitFusion",
      image: fitFusionImg
    }
  ];

  const internships = [
    {
      company: "FAM Infomedia Pvt. Ltd. – Palladam, Tamil Nadu",
      role: "Frontend Developer Intern",
      duration: "Jan 2026 – Aug 2026",
      description: "Built responsive, interactive interfaces with HTML, CSS, JavaScript, React.js and Bootstrap. Created reusable modular components, integrated REST APIs for dynamic data, collaborated with UI/UX designers and backend developers, and optimised apps for performance and cross-browser compatibility."
    },
    {
      company: "NOVI TECH – Coimbatore",
      role: "MERN Stack Development Intern",
      duration: "Oct 2024 – Nov 2024",
      description: "Virtual internship focused on full-stack development: built RESTful APIs for backend integration, developed responsive React interfaces, and worked with Git version control and debugging tools."
    },
    {
      company: "AWERUM – Pollachi",
      role: "Front-end Development Intern",
      duration: "Jun 2024 – Jul 2024",
      description: "15-day internship designing and developing responsive, user-friendly web interfaces with HTML, CSS and JavaScript. Implemented modern UI/UX practices, improved performance and cross-browser compatibility, and built navigation menus, forms and sliders."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Projects & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200"
          >
            Featured Projects
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Github className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200"
          >
            Internship Experience
          </motion.h3>

          <div className="space-y-6">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {internship.role}
                    </h4>
                    <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold">
                      {internship.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {internship.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
