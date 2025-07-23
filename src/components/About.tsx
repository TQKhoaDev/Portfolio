import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-purple-100/10"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
            Giới thiệu
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full mx-auto mb-8"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto mb-24">
          {/* Enhanced Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-4xl font-bold text-slate-800 mb-12 leading-tight text-center"
            >
              Xin chào! Tôi là
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Trần Quốc Khoa
              </span>
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl p-10 mb-12"
            >
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      Thành tích học tập
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      Tốt nghiệp tại{" "}
                      <strong className="text-slate-800">
                        Trường Cao đẳng Kỹ thuật Cao Thắng (2025)
                      </strong>{" "}
                      với điểm tốt nghiệp cao nhất ngành{" "}
                      <strong className="text-slate-800">9.5/10</strong>.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      Đề tài đồ án nổi bật
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      Tôi đã chủ động đề xuất và phát triển{" "}
                      <strong className="text-slate-800">
                        hệ thống thi trực tuyến realtime tích hợp chống gian lận
                      </strong>
                      , thay thế hình thức thi truyền thống bằng bảng giấy. Được
                      ban tổ chức đánh giá cao và dự kiến áp dụng tại{" "}
                      <strong className="text-slate-800">
                        kỳ thi Olympic Tin học năm sau
                      </strong>
                      .
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      Kinh nghiệm
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      Có kinh nghiệm với các dự án sử dụng{" "}
                      <strong className="text-slate-800">
                        Node.js, Laravel, ReactJS, GraphQL, MySQL
                      </strong>
                      . Chú trọng vào hiệu năng, bảo mật và tính ứng dụng thực
                      tế.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  {/* <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div> */}
                  <div>
                    {/* <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      Phẩm chất cá nhân
                    </h4> */}
                    <p className="text-slate-700 leading-relaxed">
                      Với tinh thần{" "}
                      <strong className="text-slate-800">
                        tự học, trách nhiệm và luôn sẵn sàng thử thách bản thân
                      </strong>
                      , mong muốn được đồng hành cùng những đội ngũ chuyên
                      nghiệp để tạo ra các sản phẩm chất lượng.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="text-center">
              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg flex items-center gap-4 overflow-hidden shadow-xl mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <HiDownload size={22} />
                </motion.div>
                <span className="relative z-10">Tải CV & Portfolio</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
