import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import contactBG from '../assets/images/backgrounds/contactBG.png';
const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formFields = [
    { label: "Introduce yourself, please*", name: "name", type: "text" },
    { label: "Telephone number", name: "phone", type: "tel" },
    { label: "E-mail*", name: "email", type: "email" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Office - 211 KML Business Center, Al meydan Street Dubai, United Arab Emirates" },
    { icon: <FaPhone />, text: "+971-4-3382153" },
    { icon: <FaPhone />, text: "+971-567185064" },
    { icon: <FaEnvelope />, text: "info@geospectratech.com" },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append your access key
    formData.append("access_key", "dda34f32-4509-48cb-a989-f76fd25a1aec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowPopup(true);
      event.target.reset();
    } else {
      console.error("Error", res);
      // Optionally, show an error message
    }
  };

  return (
    <section id="contacts" className="min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className='container mx-auto px-4 relative'>

        <Breadcrumb title={'Contact Us'} />
      </div>
      <div class="image-container">
        <img src={contactBG} alt="Overlay Image" />
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-syncopate overlay text-4xl md:text-6xl sm:text-4xl lg:text-7xl font-bold mb-20 tracking-wider text-custom"
          style={{ color: 'black', fontFamily: 'system-ui' }}
        >
          Consulting meets<br /> Transformation
        </motion.h2>
        {/* <div class="overlay"></div> */}
      </div>
      <div className="absolute inset-0 opacity-20 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #066aab 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-syncopate text-4xl md:text-6xl sm:text-4xl lg:text-7xl font-bold mb-20 tracking-wider text-light"
          style={{ WebkitTextStroke: '1px #b84e4a', color: 'transparent', fontFamily: 'system-ui' }}
        >
          CONTACT
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <form className="space-y-12" onSubmit={onSubmit}>
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary transition-colors outline-none text-custom peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-0 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-primary peer-focus:text-sm">
                    {field.label}
                  </label>
                </motion.div>
              ))}

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative group"
              >
                <textarea
                  name="message"
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary transition-colors outline-none resize-none text-custom"
                  placeholder=" "
                />
                <label className="absolute left-0 top-0 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-primary peer-focus:text-sm">
                  Message Text
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-custom text-light font-space-grotesk tracking-wider hover:bg-primary/90 transition-colors"
              >
                Send
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 text-light"
                >
                  <span className="text-custom text-2xl">{info.icon}</span>
                  <span className="font-outfit text-dark">{info.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12"
            >
              <h4 className="text-xl font-bold text-dark mb-4">Working Hours</h4>
              <p className="text-gray-400 font-outfit">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </motion.div>
          </motion.div>


        </div>
        <div>
          <iframe className='mt-5' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.450547454451!2d55.25879161491412!3d25.172817251024316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzIyLjAiTiA1NcKwMTUnMzQuNCJF!5e0!3m2!1sen!2sin!4v1453974743604' allowfullscreen width="100%" height={"400px"} frameborder="0" />
        </div>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-dark p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-light">Thank You!</h2>
            <p className="text-gray-400 mt-2">Your message has been sent successfully.</p>
            <motion.button
              className="mt-4 px-4 py-2 bg-primary text-light rounded hover:bg-primary/90 transition-colors"
              onClick={() => setShowPopup(false)}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact; 