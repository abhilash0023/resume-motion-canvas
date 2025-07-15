
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, MapPin, ShoppingCart, MessageCircle, BookOpen } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Travel Itinerary Planner",
      description: "Developed a responsive travel planner using React.js, allowing users to create, manage, and share custom itineraries with real-time weather and map integration.",
      icon: MapPin,
      technologies: ["React.js", "APIs", "Responsive Design"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "E-Commerce Website",
      description: "Built a dynamic e-commerce platform with React.js, featuring product listings, shopping cart functionality, user authentication, and secure payment integration.",
      icon: ShoppingCart,
      technologies: ["React.js", "Authentication", "Payment Integration"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Gemini Clone",
      description: "Developed a Gemini clone using React and Vite, replicating the core UI and user experience. Integrated the application with the Gemini API for real-time conversational functionality.",
      icon: MessageCircle,
      technologies: ["React", "Vite", "Gemini API"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Smart-LMS",
      description: "Built a Smart-LMS (Learning Management System) using React, Vite, Node.js, and MongoDB, providing seamless course management, user interaction, and dynamic content delivery for an efficient learning experience.",
      icon: BookOpen,
      technologies: ["React", "Vite", "Node.js", "MongoDB"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const internships = [
    {
      company: "AWERUM - POLLACHI",
      role: "Front-end Development Intern",
      duration: "24.06.24 - 09.07.24",
      description: "Completed a 15-day front-end development internship specializing in HTML, CSS, and JavaScript. Built responsive user interfaces and improved UI/UX through clean, efficient coding practices."
    },
    {
      company: "NOVI TECH - COIMBATORE",
      role: "MERN Stack Development Intern",
      duration: "16.10.24 - 23.11.24",
      description: "Completed a MERN Stack development internship progressing from foundational to intermediate level. Gained practical experience in building full-stack applications using MongoDB, Express.js, React.js, and Node.js."
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
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
