"use client"

import Head from 'next/head';
import Image from 'next/image';
import { LuPhone, LuMapPin, LuMail, LuClock, LuMessageSquare } from 'react-icons/lu';
import { motion } from 'framer-motion';
import QuickBar from '../component/QuickBar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us - Joy Ma Kali Auto Electric | Exide Battery Services</title>
        <meta name="description" content="Get in touch with Kolkata's trusted Exide battery service center. Professional battery solutions since 2001." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white fancy-font mb-4">Contact Us</h1>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              Reach out for professional battery solutions and expert advice
            </p>
          </motion.div>
        </div>
        <Image
          src="/hero3.jpg" // Add this image to your public folder
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Quick Contact Bar */}
      <QuickBar />

      {/* Contact Content */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative mb-12">
                <h2 className="text-4xl md:text-5xl font-bold fancy-font text-gray-900">
                  Get In <span className="text-red-600">Touch</span>
                </h2>
                <p className="text-gray-600 mt-4">
                  Have questions about our services or need battery advice? Fill out the form below and we'll get back to you promptly.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="battery-installation">Battery Installation</option>
                    <option value="battery-replacement">Battery Replacement</option>
                    <option value="inverter-service">Inverter Service</option>
                    <option value="battery-checkup">Battery Checkup</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-50 p-8 md:p-12 rounded-xl h-full">
                <h3 className="text-3xl font-bold fancy-font text-gray-900 mb-6">
                  Contact <span className="text-red-600">Information</span>
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <LuPhone className="text-red-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href="tel:9830320876" className="block text-gray-600 hover:text-red-600 transition">9830320876</a>
                        <a href="tel:9876543210" className="block text-gray-600 hover:text-red-600 transition">9830449015</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <LuMail className="text-red-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Email Address</h4>
                      <div className="space-y-1">
                        <a href="mailto:contact@joymakali.com" className="block text-gray-600 hover:text-red-600 transition">joymakaliautoelectric2005@gmail.com</a>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <LuMapPin className="text-red-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Our Location</h4>
                      <address className="not-italic text-gray-600">
                        17A Hemchandra Naskar Road ,<br />
                        Near Beliaghata Apollo Clinic Opposite ICIC Bank,
                        Kolkata - 700010<br />
                        West Bengal, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <LuClock className="text-red-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Working Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                        <p>Sunday: 9:00 AM - 2:00 PM</p>
                        <p>Emergency services available</p>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold fancy-font text-gray-900 mb-4">
              Find Our <span className="text-red-600">Location</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our shop for professional battery services and expert advice
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >

           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3916407250913!2d88.39531099999999!3d22.564451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02767d26d0cc6d%3A0x44d4fc72a2e47b4a!2sExide%20Care%20-%20Joy%20Makali%20Auto%20Electric!5e0!3m2!1sen!2sin!4v1747659269609!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl fancy-font mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Call us now for emergency battery services or expert advice
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
              href="https://wa.me/919830320876" 
              className="bg-transparent hover:bg-red-800 border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg transition duration-300 flex items-center justify-center"
            >
              <LuMessageSquare className="mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}