import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode, HiX, HiPlay } from "react-icons/hi";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiSocketdotio,
  SiMysql,
  SiLaravel,
  SiDocker,
} from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  videoUrl?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Mock projects data - thay thế bằng dữ liệu thật của bạn
  const projects: Project[] = [
    {
      id: 1,
      title: "Hệ thống thi trực tuyến realtime",
      description: "Hệ thống thi trực tuyến với React và Node.js",
      longDescription:
        "Hệ thống thi trực tuyến realtime có chống gian lận, hỗ trợ làm bài, hồi sinh thí sinh và theo dõi trạng thái realtime. Sử dụng React, Node.js, Socket.IO và MySQL.",
      image: "/api/placeholder/600/400",
      videoUrl: "/videos/ecommerce-demo.mp4", // Thay bằng video thật
      technologies: [
        "Node.js",
        "Express",
        "Prisma",
        "Socket.IO",
        "Docker",
        "TypeScript",
        "React",
        "TailwindCSS",
        "MySQL",
      ],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-demo.vercel.app",
      category: "web",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Ứng dụng quản lý công việc với drag & drop",
      longDescription: "Website thương mại điện tử hiện đại với",
      image: "/api/placeholder/600/400",
      videoUrl: "/videos/task-app-demo.mp4",
      technologies: ["Laravel", "HTML", "CSS3"],
      githubUrl: "https://github.com/yourusername/task-app",
      liveUrl: "https://your-task-app.vercel.app",
      category: "web",
    },
  ];

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "web", name: "Web App" },
    // { id: "design", name: "UI/UX" },
  ];

  const getTechIcon = (tech: string) => {
    const icons: {
      [key: string]: React.ComponentType<{ size?: number; className?: string }>;
    } = {
      // Backend Technologies (theo thứ tự quan trọng)
      "Node.js": FaNodeJs,
      Laravel: SiLaravel,
      Express: SiExpress,
      Prisma: SiPrisma,
      "Socket.IO": SiSocketdotio,
      Docker: SiDocker,

      // Database
      MySQL: SiMysql,
      MongoDB: SiMongodb,

      // Frontend Technologies
      React: FaReact,
      "Next.js": SiNextdotjs,
      TypeScript: SiTypescript,

      // Styling
      TailwindCSS: SiTailwindcss,
      HTML5: FaHtml5,
      CSS3: FaCss3Alt,
    };
    return icons[tech] || HiCode;
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      // Backend Technologies
      "Node.js": "text-green-600",
      Laravel: "text-red-500",
      Express: "text-gray-800",
      Prisma: "text-indigo-600",
      "Socket.IO": "text-black",
      Docker: "text-blue-500",

      // Database
      MySQL: "text-blue-600",
      MongoDB: "text-green-500",

      // Frontend Technologies
      React: "text-blue-500",
      "Next.js": "text-black",
      TypeScript: "text-blue-600",

      // Styling
      TailwindCSS: "text-cyan-500",
      HTML5: "text-orange-500",
      CSS3: "text-blue-500",
    };
    return colors[tech] || "text-gray-600";
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
            Dự án của tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các dự án tôi đã thực hiện với video demo trực quan
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4 bg-gray-100 p-2 rounded-xl">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-white hover:shadow-md"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image/Video */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  {project.videoUrl && hoveredProject === project.id ? (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-primary-600 text-4xl">🚀</div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                    >
                      <HiPlay className="text-white" size={24} />
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => {
                      const Icon = getTechIcon(tech);
                      const colorClass = getTechColor(tech);
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-700"
                        >
                          <Icon size={14} className={colorClass} />
                          {tech}
                        </div>
                      );
                    })}
                    {project.technologies.length > 3 && (
                      <div className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-700">
                        +{project.technologies.length - 3}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <FaGithub size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>

                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <HiExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Video/Image */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    {selectedProject.videoUrl ? (
                      <video
                        controls
                        className="w-full h-64 md:h-80 object-cover"
                        poster={selectedProject.image}
                      >
                        <source
                          src={selectedProject.videoUrl}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <div className="text-primary-600 text-6xl">🚀</div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Công nghệ sử dụng:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => {
                        const Icon = getTechIcon(tech);
                        const colorClass = getTechColor(tech);
                        return (
                          <div
                            key={tech}
                            className="flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-2 rounded-lg font-medium"
                          >
                            <Icon size={16} className={colorClass} />
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FaGithub size={20} />
                      Xem mã nguồn
                    </motion.a>

                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center gap-2"
                    >
                      <HiExternalLink size={20} />
                      Xem demo live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
