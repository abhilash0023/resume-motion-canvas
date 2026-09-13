
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React.js", level: 90 },
    { name: "Bootstrap / Tailwind CSS", level: 85 },
    { name: "Node.js & Express.js", level: 80 },
    { name: "MongoDB / SQL", level: 78 },
    { name: "Java", level: 80 },
  ];

  const tooling = [
    "React.js",
    "REST API Integration",
    "PostgreSQL",
    "Git & GitHub",
    "VS Code",
    "Power BI",
    "Android Studio",
    "Linux",
  ];

  const certifications = [
    "Power BI Workshop (Nov 2024)",
    "Android Development using Flutter – KPR College (Feb 2024)",
    "BEC Certificate – Cambridge University (Feb 2023)",
    "NPTEL – Industry 4.0 and Data Analytics with Python (Elite)",
    "Infosys SpringBoard – Bootstrap, React.js, JavaScript",
    "Linux Administration – Expertisor Academy",
    "Full Stack Development (MERN Stack) – Expertisor Academy",
    "Oracle Fusion Cloud HCM Certified Foundations Associate",
    "NCC 'B' Certificate & NCC 'C' Certificate (A Grade)",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className="bg-gradient-to-r from-teal-600 to-blue-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tooling.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                  className="px-3 py-2 rounded-full text-sm bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">Strengths</h3>
            <div className="space-y-3">
              {["Problem Solving", "Team Collaboration", "Adaptability", "Time Management"].map((strength) => (
                <div key={strength} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Certifications</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 border-l-4 border-teal-500"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
