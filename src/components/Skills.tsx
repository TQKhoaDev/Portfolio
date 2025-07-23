import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiPrisma,
  SiSocketdotio,
  SiMysql,
  SiLaravel,
  SiDocker,
} from "react-icons/si";

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
    { name: "TailwindCSS", level: 95, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", level: 90, icon: FaJs, color: "#F7DF1E" },
    { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
    { name: "Docker", level: 85, icon: SiDocker, color: "#3178C6" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 80, icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", level: 75, icon: SiExpress, color: "#000000" },
    { name: "Prisma", level: 75, icon: SiPrisma, color: "#000000" },
    { name: "Socket.IO", level: 75, icon: SiSocketdotio, color: "#000000" },
    { name: "MySQL", level: 75, icon: SiMysql, color: "#000000" },
    { name: "Laravel", level: 75, icon: SiLaravel, color: "#F05032" },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git", level: 85, icon: FaGitAlt, color: "#F05032" },
    { name: "Vercel", level: 90, icon: SiVercel, color: "#000000" },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
              Kỹ năng
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những công nghệ và công cụ tôi sử dụng để tạo ra những sản phẩm
              chất lượng
            </p> */}
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[...frontendSkills, ...backendSkills, ...toolsSkills].map(
              (skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:border-primary-200">
                    <skill.icon
                      size={32}
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {skill.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
