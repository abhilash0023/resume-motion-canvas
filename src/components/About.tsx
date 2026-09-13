
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: GraduationCap, label: "Education", value: "B.Tech IT" },
    { icon: Award, label: "CGPA", value: "8.1" },
    { icon: Users, label: "Projects", value: "5" },
    { icon: Clock, label: "Experience", value: "2+ Years" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a <strong className="text-teal-600 dark:text-teal-400">Frontend Developer</strong> with professional experience
                building responsive, user-centric web applications using React.js, JavaScript, HTML, CSS and Bootstrap.
              </p>
              <p className="text-lg leading-relaxed">
                I'm skilled in developing reusable UI components, integrating <strong className="text-teal-600 dark:text-teal-400">REST APIs</strong>,
                optimising application performance and delivering intuitive user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I enjoy collaborating with cross-functional teams to deliver scalable, high-quality web solutions, and I'm continuously
                expanding my expertise in full-stack development with the MERN stack.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">B.Tech Information Technology</h4>
                  <p className="text-gray-600 dark:text-gray-400">Dr. Mahalingam College of Engineering and Technology</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2022 - 2026 | CGPA: 8.1</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Higher Secondary School</h4>
                  <p className="text-gray-600 dark:text-gray-400">Our Lady of Lourdes Matriculation Higher Secondary School</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2019-2022 | HSC: 70.3% | SSLC: 67.8%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
