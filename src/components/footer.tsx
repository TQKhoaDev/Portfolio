import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/TQKhoaDev",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/qu%E1%BB%91c-khoa-tr%E1%BA%A7n-7b19ba353/",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-8"
    >
      <div className="bg-white p-8 md:p-12 lg:p-16 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Personal Info with Logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-slate-800 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  TK
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Trần Quốc Khoa
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Backend định hướng Full-stack developer, từng phát triển hệ
                thống thi trực tuyến. Cùng xây dựng những giải pháp thực sự hữu
                ích!
              </p>
              <div className="flex gap-3">
                {socialLinks.slice(0, 3).map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Liên kết nhanh
              </h4>
              <div className="space-y-3">
                <a
                  href="#home"
                  className="block text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  Trang chủ
                </a>
                <a
                  href="#about"
                  className="block text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  Giới thiệu
                </a>
                <a
                  href="#projects"
                  className="block text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  Dự án
                </a>
                <a
                  href="#skills"
                  className="block text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  Kỹ năng
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Dịch vụ
              </h4>
              <div className="space-y-3">
                <p className="text-gray-600">Phát triển Web</p>
                {/* <p className="text-gray-600">UI/UX Design</p>
                <p className="text-gray-600">Mobile Apps</p>
                <p className="text-gray-600">Consulting</p> */}
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Liên hệ
              </h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <HiMail size={16} />
                  <span className="text-sm">tqkhoadev@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <HiPhone size={16} />
                  <span className="text-sm">+84 865 295 131</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">TP. Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Đường kẻ ngang tinh tế */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
