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
              x:
                typeof window !== "undefined"
                  ? Math.random() * window.innerWidth
                  : Math.random() * 1000,
              y:
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : Math.random() * 800,
            }}
            animate={{
              y: [
                null,
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : Math.random() * 800,
              ],
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

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 vietnamese-text"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Trần Quốc Khoa
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text vietnamese-text">
                Backend Developer
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-lg mb-10 text-blue-100/90 max-w-lg leading-relaxed font-light"
            >
              <div className="text-white space-y-4">
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
                    , thay thế hoàn toàn bảng giấy, dự kiến áp dụng vào năm sau.
                  </li>
                  <li>
                    Đề tài đạt{" "}
                    <span className="font-semibold text-white">
                      9.5 / 10 – cao nhất khoa Công nghệ Thông tin
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 items-center lg:items-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 shadow-lg w-full sm:w-auto"
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

              <div className="relative group">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-white/30 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <HiDownload size={20} />
                  </motion.div>
                  Tải CV
                </motion.button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <a
                    href="/TranQuocKhoa_TV.pdf"
                    download="TranQuocKhoa_CV_TiengViet.pdf"
                    className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200 rounded-t-xl"
                  >
                    📄 CV Tiếng Việt
                  </a>
                  <a
                    href="/TranQuocKhoa_TA.pdf"
                    download="TranQuocKhoa_CV_TiengAnh.pdf"
                    className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200 rounded-b-xl"
                  >
                    📄 CV Tiếng Anh
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/TQKhoaDev",
                  label: "GitHub",
                  color: "hover:text-gray-300",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/qu%E1%BB%91c-khoa-tr%E1%BA%A7n-7b19ba353/",
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
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  whileHover={{
                    scale: 1.3,
                    y: -5,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white ${color} transition-all duration-300 group`}
                  onClick={
                    href.startsWith("#")
                      ? (e) => {
                          e.preventDefault();
                          scrollToSection(href);
                        }
                      : undefined
                  }
                >
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={20} className="hidden sm:block" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {label}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Responsive Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Responsive Video Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 shadow-xl">
                {/* YouTube Video Embed with autoplay + sound */}
                <iframe
                  src="https://www.youtube.com/embed/Bo245zEoLtI?autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0&si=YRLv_vyvjGTRA6IX"
                  title="Dự án nổi bật"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Minimal Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-400/40 to-purple-500/40 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-pink-400/40 to-orange-500/40 rounded-full blur-sm"></div>

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
