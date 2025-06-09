'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, MailCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">JOY MA KALI AUTO ELECTRIC</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for comprehensive Battery Dealer LEI certifications.
            </p>
            <div className="flex gap-4">
              <a href="#"  className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#"  className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#"  className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Professional Battery Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Battery Health Checkup</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Battery Replacement</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Inverter Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Battery Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Warranty Services</a></li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-red-400" />
                <div>
                  <p className="text-gray-300">9830320876</p>
                  <p className="text-gray-300">9830449015</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MailCheck className="w-5 h-5 mt-1 text-red-400" />
                <span className="text-gray-300">joymakaliautoelectric2005@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-red-400" />
                <span className="text-gray-300">
               17A Hemchandra Naskar Road , Near Beliaghata Apollo Clinic Opposite ICIC Bank ,
Kolkata - 700010
West Bengal, India
                </span>
              </li>
              
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-12"
        />
        {/* Map Section */}
     
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" overflow-hidden shadow-xl"
          >

           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3916407250913!2d88.39531099999999!3d22.564451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02767d26d0cc6d%3A0x44d4fc72a2e47b4a!2sExide%20Care%20-%20Joy%20Makali%20Auto%20Electric!5e0!3m2!1sen!2sin!4v1747659269609!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>
       

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
             © {new Date().getFullYear()}  All Rights Reserved.<br />
        Website Developed & Maintained by Digital Exposure Online Services
          </motion.p>
          
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}