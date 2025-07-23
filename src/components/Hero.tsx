import { motion } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-emerald-900/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg mb-4 text-blue-100 font-light tracking-wide"
            >
              Xin chào, tôi là
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Trần Quốc Khoa
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
                Backend Developer
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg mb-10 text-blue-100/90 max-w-lg leading-relaxed font-light"
            >
              <section className="text-white space-y-4">
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>
                    Tôi đã chủ động đề xuất và phát triển{" "}
                    <span className="font-semibold text-white">
                      hệ thống thi trực tuyến realtime tích hợp chống gian lận{" "}
                    </span>
                    bằng{" "}
                    <span className="font-semibold text-white">
                      TypeScript, NodeJS, Socket.IO, ReactJS
                    </span>
                    .
                  </li>
                  <li>
                  <span className="font-semibold text-white">

                    Tích hợp vào phần mềm cũ của trường
                    </span>
                    , thay thế hoàn toàn bảng
                    giấy.
                  </li>
                  <li>
                    Đề tài đạt{" "}
                    <span className="font-semibold text-white">
                      9.5 / 10 – cao nhất khoa Công nghệ Thông tin
                    </span>
                    .
                  </li>
                </ul>
              </section>
            </motion.p>

            {/* Enhanced Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Xem dự án</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-white/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <HiDownload size={20} />
                </motion.div>
                Tải CV
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                {
                  icon: FaGithub,
                  href: "#",
                  label: "GitHub",
                  color: "hover:text-gray-300",
                },
                {
                  icon: FaLinkedin,
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:text-blue-300",
                },
                {
                  icon: HiMail,
                  href: "#contact",
                  label: "Email",
                  color: "hover:text-green-300",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{
                    scale: 1.3,
                    y: -5,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white ${color} transition-all duration-300 group`}
                  onClick={
                    href.startsWith("#")
                      ? (e) => {
                          e.preventDefault();
                          scrollToSection(href);
                        }
                      : undefined
                  }
                >
                  <Icon size={20} />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Elegant Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Video Container */}
              <div className="relative w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 shadow-xl">
                {/* YouTube Video Embed */}
                <iframe
                  src="https://www.youtube.com/embed/jPjQJYKhhk4?si=xBVp7_bTXadQPaYW&autoplay=1&mute=1&loop=1&playlist=jPjQJYKhhk4&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Dự án nổi bật"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Minimal Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400/40 to-purple-500/40 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-pink-400/40 to-orange-500/40 rounded-full blur-sm"></div>

              {/* Elegant Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
