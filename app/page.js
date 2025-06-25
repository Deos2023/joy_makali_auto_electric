"use client"

import Head from 'next/head';
import Image from 'next/image';
import { LuSparkles, LuSettings, LuLayoutDashboard, LuBatteryCharging, LuClock, LuShield, LuAward, LuPhone, LuMapPin, LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import QuickBar from './component/QuickBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <Head>
        <title>Joy Ma Kali Auto Electric - Authorized Exide Battery Dealer</title>
        <meta name="description" content="Authorized Exide Battery and Inverter Dealer in Kolkata since 2001. Genuine products with warranty and expert installation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    

      {/* Hero Section */}
      <section id='home' className="relative w-full h-screen overflow-hidden flex items-center justify-start bg-white">
  {/* Background Image with smooth motion */}
  <motion.div
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    }}
    className="absolute inset-0 z-0"
  >
    <Image
      src="/hero2.jpg"
      alt="Hero background"
      fill
      className="object-cover"
      priority
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#E7000B] via-transparent to-transparent z-10" />
    {/* Optional white blur overlay */}
    <div className="absolute inset-0 bg-white/10 z-10" />
  </motion.div>

  {/* Text Content */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="relative z-20 px-8 md:px-16 text-left max-w-2xl"
  >
    <p className="text-white uppercase tracking-widest mb-2 font-medium">
      Make your ride better than new
    </p>
    <h1 className="text-7xl md:text-9xl  text-white leading-tight tracking-tight fancy-font">
      JOY MA KALI<br />AUTO ELECTRIC
    </h1>
    <button className="mt-6 bg-red-600 text-white px-6 py-3 font-semibold rounded shadow hover:bg-red-700 transition">
      Book your visit now
    </button>
  </motion.div>
</section>

      {/* Quick Contact Bar */}
      <QuickBar />

<section id='services' className="bg-white py-20 px-4 md:px-12 lg:px-20 text-center">
      {/* HEADER */}
      <div className="relative mb-10">
  {/* Shadow Text Behind */}
 

  {/* Foreground Content */}
  <p className="text-sm text-red-600 uppercase tracking-wider relative  z-10">
    Power solutions taken to the next level
  </p>
   
  <h2 className="text-6xl font-extrabold fancy-font text-gray-900 mt-2 relative z-10">
    OUR SERVICES
  </h2>
</div>

      {/* SERVICE CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {[
          {
            title: 'BATTERY INSTALLATION',
            desc: 'Quick on-site installation for car and inverter batteries by trained professionals.',
            img: '/battery/img1.webp',
            color: 'bg-red-700',
          },
          {
            title: 'BATTERY CHECK-UP',
            desc: 'Detailed battery diagnostics for voltage, charging, and performance.',
            img: '/battery/img2.webp',
            color: 'bg-black',
          },
          {
            title: 'INVERTER SOLUTIONS',
            desc: 'Reliable inverter battery options for home and commercial use.',
            img: '/battery/img3.webp',
            color: 'bg-red-600',
          },
          {
            title: 'OLD BATTERY EXCHANGE',
            desc: 'Get instant discounts when exchanging your old batteries.',
            img: '/battery/img4.webp',
            color: 'bg-black',
          },
        ].map((item, idx) => (
          <div key={idx} className={`text-white rounded overflow-hidden shadow ${item.color}`}>
            <img src={item.img} alt={item.title} className="w-full  object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm mb-3">{item.desc}</p>
              <button className="text-red-200 underline text-sm">Read more</button>
            </div>
          </div>
        ))}
      </div>

      {/* EXCELLENCE SECTION */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-sm text-red-600 uppercase tracking-wider">Our process</p>
        <h2 className="text-6xl font-bold fancy-font text-gray-900 mt-2 mb-4">EXCELLENCE IN POWER CARE</h2>
        <p className="text-gray-600 text-sm">
          We pride ourselves on delivering top-tier service and genuine Exide products, ensuring long-lasting performance for all battery needs.
        </p>
      </div>
      </section>
      {/* About Us Section */}
      <section id='about' className="py-16 bg-white">
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
                  src="/battery/img5.webp"
                  alt="Our Shop"
                  width={600}
                  height={200}
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
 
 
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-red-100 to-red-200 overflow-hidden">
  {/* Decorative Background SVG */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <svg
      className="absolute top-0 left-0 w-1/2 h-1/2 opacity-30"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle cx="200" cy="200" r="200" fill="#E3948E" />
    </svg>
    <svg
      className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20"
      viewBox="0 0 300 300"
      fill="none"
    >
      <circle cx="150" cy="150" r="150" fill="#E3948E" />
    </svg>
  </div>

  <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-12 md:p-20 max-w-6xl mx-auto border border-red-200">
    {/* Illustration */}
    <div className="flex-shrink-0 flex flex-col items-center">
      {/* Example SVG illustration: Auto parts icon */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6"
      >
        <circle cx="60" cy="60" r="50" fill="#F59E42" />
        <path d="M40 60h40v10H40z" fill="#fff" />
        <path d="M60 40v40" stroke="#fff" strokeWidth="10" />
      </svg>
      <span className="text-red-500 font-semibold tracking-wide uppercase text-sm">
        Expert Auto Electrician
      </span>
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col gap-6">
      <h1 className="text-4xl md:text-6xl fancy-font  text-gray-900 leading-tight mb-2">
        Powering Every <span className="text-red-500">Drive</span> with Precision
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-medium">
        JOY MA KALI AUTO ELECTRIC is your trusted partner for comprehensive automotive electrical solutions. 
        With a strong legacy of service excellence, we specialize in vehicle wiring, battery maintenance, lighting systems, 
        and diagnostics. Our skilled technicians ensure your vehicle stays efficient, reliable, and road-ready with 
        precision and care.
      </p>
      <div className="flex gap-4 mt-4">
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full bg-red-500 text-white font-semibold shadow-lg hover:bg-red-600 transition"
        >
          View Our Services
        </a>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full border border-red-400 text-red-600 font-semibold bg-white/80 hover:bg-red-50 transition"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold fancy-font text-gray-900 mb-4">
              Our <span className="text-red-600 ">Product Range</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of Exide batteries for all your power needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automotive Batteries",
                desc: "For cars, bikes, trucks and all types of vehicles",
                icon: <LuBatteryCharging className="text-red-600 text-4xl mb-4" />,
                bg: "bg-white"
              },
              {
                title: "Inverter Batteries",
                desc: "Reliable power backup solutions for homes and offices",
                icon: <LuSparkles className="text-red-600 text-4xl mb-4" />,
                bg: "bg-white"
              },
              {
                title: "Industrial Batteries",
                desc: "Heavy-duty batteries for commercial applications",
                icon: <LuSettings className="text-red-600 text-4xl mb-4" />,
                bg: "bg-white"
              },
              {
                title: "Solar Batteries",
                desc: "Eco-friendly power solutions for solar systems",
                icon: <LuLayoutDashboard className="text-red-600 text-4xl mb-4" />,
                bg: "bg-red-50"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.bg} rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300 text-center`}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center justify-center mx-auto">
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold fancy-font text-gray-900 mb-4">
              Why Choose <span className="text-red-600 ">Our Exide Care Shop</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond just selling batteries - we provide complete power solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Genuine Products",
                desc: "100% authentic Exide batteries with manufacturer warranty",
                icon: <LuShield className="text-red-600" />
              },
              {
                title: "Expert Advice",
                desc: "Professional guidance to choose the right battery",
                icon: <LuAward className="text-red-600" />
              },
              {
                title: "Quick Service",
                desc: "Same-day installation and emergency support",
                icon: <LuClock className="text-red-600" />
              },
              {
                title: "Best Prices",
                desc: "Competitive pricing with special discounts",
                icon: <LuBatteryCharging className="text-red-600" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition duration-300"
              >
                <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Maintenance Tips */}
      <section className=" py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl  fancy-font mb-6">
                  Battery <span className="text-yellow-300">Maintenance Tips</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white text-red-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Regular Inspection</h3>
                      <p className="text-red-100">
                        Check battery terminals monthly for corrosion and clean if necessary
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-red-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Proper Charging</h3>
                      <p className="text-red-100">
                        Avoid overcharging and deep discharging to extend battery life
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-red-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Water Level</h3>
                      <p className="text-red-100">
                        For flooded batteries, maintain proper water level with distilled water
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-red-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Professional Checkup</h3>
                      <p className="text-red-100">
                        Get your battery tested by professionals every 6 months
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
                className="relative rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/hero2.jpg"
                  alt="Battery Maintenance"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">Need Battery Service?</h3>
                    <p className="text-yellow-200">Our experts are ready to help</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id='testimonials' className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl  fancy-font text-gray-900 mb-4">
              What Our <span className="text-red-600">Customers Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                rating: 5,
                comment: "Bought an Exide car battery from Joy Ma Kali Auto Electric. The service was excellent and the battery is performing very well even after 2 years.",
                location: "Kolkata"
              },
              {
                name: "Priya Banerjee",
                rating: 5,
                comment: "Their inverter battery installation service was prompt and professional. The battery is giving us uninterrupted power backup during outages.",
                location: "Howrah"
              },
              {
                name: "Amit Kumar",
                rating: 4,
                comment: "Trusted Exide dealer in Kolkata. I've been buying batteries from them for my fleet of vehicles for years.",
                location: "Barrackpore"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full mr-4 flex items-center justify-center text-red-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Replacement Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl  fancy-font text-gray-900 mb-4">
              Our <span className="text-red-600">Battery Replacement Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to get your battery replaced quickly and efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Diagnosis",
                desc: "Our experts test your current battery to confirm replacement need"
              },
              {
                step: "2",
                title: "Selection",
                desc: "We help you choose the right Exide battery for your needs"
              },
              {
                step: "3",
                title: "Installation",
                desc: "Professional installation with proper safety checks"
              },
              {
                step: "4",
                title: "Testing",
                desc: "Final testing to ensure everything works perfectly"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* Contact Content */}
      <section id='contact' className="py-16 px-4 md:px-12 lg:px-20 bg-white">
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

              <form
  className="space-y-6 text-black"
  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const service = e.target.service.value;
    const message = e.target.message.value;

    const whatsappMessage = `Hello, I would like to enquire about the following service:

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Needed: ${service}
Message: ${message}

Please get back to me.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "9830320876"; // change to your actual WhatsApp number

    window.open(`https://wa.me/91${whatsappNumber}?text=${encodedMessage}`, "_blank");
  }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
        placeholder="Enter your name"
      />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
        placeholder="Enter your phone number"
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
    Send via WhatsApp
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
          <h2 className="text-5xl md:text-6xl  fancy-font mb-6">Need a New Battery?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today for expert advice and the best deals on genuine Exide batteries
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
              href="https://www.google.com/maps/place/Exide+Care+-+Joy+Makali+Auto+Electric/@22.564451,88.3927307,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02767d26d0cc6d:0x44d4fc72a2e47b4a!8m2!3d22.564451!4d88.395311!16s%2Fg%2F1v3gqb2p?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-red-800 border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg transition duration-300 flex items-center justify-center"
            >
              <LuMapPin className="mr-2" />
              Visit Our Shop
            </a>
          </div>
        </div>
      </section>

    
       

          </div> 
       )}