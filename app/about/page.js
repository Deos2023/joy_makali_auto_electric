"use client"

import Head from 'next/head';
import Image from 'next/image';
import { LuShield, LuAward, LuClock, LuUsers, LuBatteryCharging, LuMail, LuPhone, LuMapPin } from 'react-icons/lu';
import { motion } from 'framer-motion';
import QuickBar from '../component/QuickBar';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us - Joy Ma Kali Auto Electric | Exide Battery Dealer</title>
        <meta name="description" content="Learn about Joy Ma Kali Auto Electric - Authorized Exide Battery and Inverter Dealer in Kolkata since 2001" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/hero2.jpg"
          alt="Our Battery Shop"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold fancy-font text-white mb-4">Our Story</h1>
            <p className="text-lg md:text-xl text-red-200 max-w-2xl mx-auto">
              Trusted Exide battery dealer in Kolkata since 2001
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <QuickBar />

      {/* About Us Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-5xl md:text-7xl fancy-font  text-gray-900 mb-6">
                        About <span className="text-red-600">Joy Ma Kali Auto Electric</span>
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Established in 2001, Joy Ma Kali Auto Electric is a trusted name in Kolkata for genuine Exide batteries and 
                        inverter solutions. With over two decades of experience, we've served thousands of satisfied customers 
                        with reliable products and exceptional service.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-red-100 p-2 rounded-full mr-4">
                            <LuShield className="text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800">Authorized Exide Dealer</h3>
                            <p className="text-gray-600 text-sm">Genuine products with manufacturer warranty</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-red-100 p-2 rounded-full mr-4">
                            <LuAward className="text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800">Experienced Technicians</h3>
                            <p className="text-gray-600 text-sm">20+ years of expertise in battery solutions</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-red-100 p-2 rounded-full mr-4">
                            <LuClock className="text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800">Quick Service</h3>
                            <p className="text-gray-600 text-sm">Same-day installation and emergency support</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative  overflow-hidden shadow-2xl"
                    >
                      <Image
                        src="/img10.png"
                        alt="Our Shop"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl font-bold">Our Exide Care Shop</h3>
                        <p className="text-red-200 text-sm">17A Hemchandra Naskar Road, Kolkata - 700010</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold fancy-font text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Our Exide Care Shop</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond just selling batteries - we provide complete power solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <LuShield className="text-red-600 text-4xl" />,
                title: "Authorized Dealer",
                desc: "Genuine Exide products with full manufacturer warranty"
              },
              {
                icon: <LuAward className="text-red-600 text-4xl" />,
                title: "20+ Years Experience",
                desc: "Serving Kolkata since 2001 with proven expertise"
              },
              {
                icon: <LuUsers className="text-red-600 text-4xl" />,
                title: "Customer First",
                desc: "Thousands of satisfied customers across West Bengal"
              },
              {
                icon: <LuBatteryCharging className="text-red-600 text-4xl" />,
                title: "Complete Solutions",
                desc: "From small bike batteries to industrial power solutions"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Our Shop Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold fancy-font mb-6">
                  Visit <span className="text-red-400 ">Our Exide Care Shop</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <LuMapPin className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-gray-300">
                        17A Hemchandra Naskar Road, Kolkata - 700010, West Bengal, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <LuClock className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Saturday: 9:00 AM - 8:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <LuPhone className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Contact Numbers</h3>
                      <p className="text-gray-300">
                        Nirmal Sarkar: 9830320876<br />
                        Mahadeb Sarkar: 9830449015<br />
                        Shop: 8232885325
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-xl h-96"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.107281118654!2d88.3672683153631!3d22.5727858851819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f1315f19%3A0x1cfd4042311b6e8b!2s17A%2C%20Hemchandra%20Naskar%20Rd%2C%20Beliaghata%2C%20Kolkata%2C%20West%20Bengal%20700010!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold fancy-font mb-6">Have Questions About Our Products?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our battery experts are ready to help you choose the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:9830320876" 
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-medium text-lg shadow-lg transition duration-300 flex items-center justify-center"
            >
              <LuPhone className="mr-2" />
              Call: 9830320876
            </a>
            <a 
              href="/contact" 
              className="bg-transparent hover:bg-red-800 border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg transition duration-300 flex items-center justify-center"
            >
              <LuMail className="mr-2" />
              Send Message
            </a>
          </div>
        </div>
      </section>

   
    </div>
  );
}