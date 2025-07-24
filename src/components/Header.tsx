import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronRight } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section);
        return element ? element.offsetTop - 100 : 0;
      });

      const currentPosition = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionOffsets[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Dự án", href: "#projects" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-blue-100/50 border-b border-white/20"
          : "bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div className="relative text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </div>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                      : scrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                      : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              );
            })}

            {/* CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base"
              onClick={() => scrollToSection("#contact")}
            >
              Liên hệ ngay
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                  : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {isMenuOpen ? (
                  <HiX size={20} className="sm:hidden" />
                ) : (
                  <HiMenu size={20} className="sm:hidden" />
                )}
                {isMenuOpen ? (
                  <HiX size={24} className="hidden sm:block" />
                ) : (
                  <HiMenu size={24} className="hidden sm:block" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl"
            >
              <div className="container-custom py-4 sm:py-6 px-4 sm:px-6">
                <motion.div className="space-y-1">
                  {menuItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.button
                        key={item.name}
                        variants={itemVariants}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`group relative w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                          isActive
                            ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                            />
                          )}
                          <span className={isActive ? "font-semibold" : ""}>
                            {item.name}
                          </span>
                        </div>

                        <motion.div
                          animate={{ x: isActive ? 0 : -10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`${
                            isActive
                              ? "text-white"
                              : "text-gray-400 group-hover:text-blue-500"
                          } transition-colors duration-300`}
                        >
                          <HiChevronRight size={16} className="sm:hidden" />
                          <HiChevronRight
                            size={18}
                            className="hidden sm:block"
                          />
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  variants={itemVariants}
                  className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("#contact")}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <span>Bắt đầu dự án</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
