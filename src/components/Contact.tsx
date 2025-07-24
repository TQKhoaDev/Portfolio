import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";

const Contact = () => {
  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      info: "tqkhoadev@gmail.com",
      link: "mailto:tqkhoadev@gmail.com",
    },
    {
      icon: HiPhone,
      title: "Điện thoại",
      info: "+84 865 295 131",
      link: "tel:+84865295131",
    },
  ];


  return (
    <section id="contact" className="section-padding bg-gray-50">
            {/* kẻ ngang*/}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

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
            Liên hệ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hãy kết nối với tôi! Tôi luôn sẵn sàng với các cơ hội hợp tác
          </p>
        </motion.div>

        {/* Contact Info - Centered */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <item.icon className="text-primary-600" size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
