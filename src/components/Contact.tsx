import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

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

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/yourusername",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
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

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Theo dõi tôi
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-lg shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-lg transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
