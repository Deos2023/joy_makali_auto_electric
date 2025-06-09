"use client"

import Head from 'next/head';
import Image from 'next/image';
import { LuSparkles, LuSettings, LuLayoutDashboard, LuBatteryCharging, LuClock, LuShield, LuAward, LuPhone, LuMapPin, LuMail, LuWrench, LuBattery, LuRefreshCw, LuShieldCheck } from 'react-icons/lu';
import { motion } from 'framer-motion';
import QuickBar from '../component/QuickBar';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Services - Joy Ma Kali Auto Electric | Exide Battery Services</title>
        <meta name="description" content="Professional battery services including installation, maintenance, and replacement. Authorized Exide service center in Kolkata." />
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
            <h1 className="text-6xl md:text-7xl font-bold text-white fancy-font mb-4">Our Services</h1>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              Professional battery solutions to keep your vehicles and home powered
            </p>
          </motion.div>
        </div>
        <Image
          src="/hero3.jpg" // Make sure to add this image to your public folder
          alt="Battery Service"
          fill
          className="object-cover"
          priority
        />
      </section>



      {/* Quick Contact Bar */}
      <QuickBar />

      {/* Main Services Section */}
      <section className="py-20 px-4 md:px-12 lg:px-20 bg-white">
        <div className="relative mb-16 text-center">
          <p className="text-sm text-red-600 uppercase tracking-wider relative z-10">
            Comprehensive battery care
          </p>
          
          <h2 className="text-4xl sm:text-7xl font-bold fancy-font text-gray-900 mt-2 relative z-10">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Professional Battery Installation',
              icon: <LuBatteryCharging className="text-red-600 text-4xl" />,
              desc: 'Expert installation of car, bike, and inverter batteries with proper testing and setup.',
              features: [
                'Proper terminal cleaning',
                'Voltage testing',
                'Secure mounting',
                'Final performance check'
              ]
            },
            {
              title: 'Battery Health Checkup',
              icon: <LuWrench className="text-red-600 text-4xl" />,
              desc: 'Comprehensive diagnostic service to evaluate your battery condition and performance.',
              features: [
                'Load testing',
                'Voltage measurement',
                'Charging system check',
                'Detailed report'
              ]
            },
            {
              title: 'Battery Replacement',
              icon: <LuBattery className="text-red-600 text-4xl" />,
              desc: 'Authorized Exide battery replacement with old battery exchange benefits.',
              features: [
                'Genuine Exide products',
                'Old battery buyback',
                'Professional disposal',
                'Warranty registration'
              ]
            },
            {
              title: 'Inverter Services',
              icon: <LuSparkles className="text-red-600 text-4xl" />,
              desc: 'Complete inverter battery solutions for home and commercial use.',
              features: [
                'Capacity assessment',
                'Proper cabling',
                'Regular maintenance',
                'Emergency support'
              ]
            },
            {
              title: 'Battery Maintenance',
              icon: <LuRefreshCw className="text-red-600 text-4xl" />,
              desc: 'Regular maintenance services to extend your battery life and performance.',
              features: [
                'Terminal cleaning',
                'Water level check',
                'Charge cycle optimization',
                'Preventive care'
              ]
            },
            {
              title: 'Warranty Services',
              icon: <LuShieldCheck className="text-red-600 text-4xl" />,
              desc: 'Claim your manufacturer warranty with our authorized service support.',
              features: [
                'Warranty validation',
                'Free replacements',
                'Pro-rate benefits',
                'Documentation help'
              ]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="p-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-red-600 uppercase tracking-wider">Our approach</p>
            <h2 className="text-4xl md:text-6xl font-bold fancy-font text-gray-900 mt-2 mb-4">
              The <span className="text-red-600">Joy Ma Kali</span> Service Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure every service is completed to perfection
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-red-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  desc: "We discuss your requirements and assess your current battery condition",
                  icon: <LuPhone className="text-white text-2xl" />
                },
                {
                  step: "02",
                  title: "Diagnostic Testing",
                  desc: "Comprehensive testing to identify any issues with your battery system",
                  icon: <LuSettings className="text-white text-2xl" />
                },
                {
                  step: "03",
                  title: "Solution Proposal",
                  desc: "We recommend the best course of action with transparent pricing",
                  icon: <LuLayoutDashboard className="text-white text-2xl" />
                },
                {
                  step: "04",
                  title: "Professional Service",
                  desc: "Our certified technicians perform the service with precision",
                  icon: <LuWrench className="text-white text-2xl" />
                },
                {
                  step: "05",
                  title: "Quality Check",
                  desc: "Thorough testing to ensure everything works perfectly",
                  icon: <LuShieldCheck className="text-white text-2xl" />
                },
                {
                  step: "06",
                  title: "Aftercare Support",
                  desc: "We provide follow-up support and maintenance advice",
                  icon: <LuAward className="text-white text-2xl" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
                >
                  <div className={`lg:w-1/2 p-6 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse lg:flex-row'} items-start lg:items-center gap-6`}>
                      <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className={`${index % 2 === 0 ? 'text-left' : 'text-right lg:text-left'}`}>
                        <span className="text-sm text-red-600 font-medium">{item.step}</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* services section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-6xl font-bold fancy-font text-gray-900 mb-4">
        Our <span className="text-red-600 ">Services</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We offer premium auto electrical and detailing solutions to keep your vehicle in top shape.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Automotive Batteries",
          desc: "For cars, bikes, trucks and all types of vehicles",
          img: "/hero2.jpg",
          bg: "bg-red-600"
        },
        {
          title: "Inverter Batteries",
          desc: "Reliable power backup solutions for homes and offices",
          img: "/hero3.jpg",
          bg: "bg-black"
        },
        {
          title: "Industrial Batteries",
          desc: "Heavy-duty batteries for commercial applications",
          img: "/ind.jpg",
          bg: "bg-red-600"
        },
        {
          title: "Solar Batteries",
          desc: "Eco-friendly power solutions for solar system",
          img: "/solar.jpg",
          bg: "bg-black"
        }

      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative h-[450px]  overflow-hidden shadow-lg group"
        >
          {/* Background image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />

          {/* Overlay box */}
          <div className={`absolute bottom-0 w-3/4 p-5 ${item.bg} text-white`}>
            <h3 className="text-lg font-bold font-sans uppercase">{item.title}</h3>
            <p className="text-xs mt-1">{item.desc}</p>
            <a
              href="#"
              className="mt-3 inline-block text-white font-semibold text-sm underline underline-offset-4"
            >
              Read more
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Service Benefits */}
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
                <p className="text-sm text-red-600 uppercase tracking-wider">Why choose us</p>
                <h2 className="text-4xl md:text-5xl font-bold fancy-font text-gray-900 mt-2 mb-6">
                  Benefits of Our <span className="text-red-600">Professional Service</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Our authorized Exide service center provides advantages you won't find with unauthorized providers
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Genuine Parts",
                      desc: "We use only authentic Exide components for all services and replacements",
                      icon: <LuShield className="text-red-600" />
                    },
                    {
                      title: "Expert Technicians",
                      desc: "Our staff are Exide-certified with extensive training and experience",
                      icon: <LuAward className="text-red-600" />
                    },
                    {
                      title: "Warranty Protection",
                      desc: "Services performed by us maintain your manufacturer warranty",
                      icon: <LuShieldCheck className="text-red-600" />
                    },
                    {
                      title: "Advanced Tools",
                      desc: "We use professional diagnostic equipment for accurate assessments",
                      icon: <LuSettings className="text-red-600" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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
                  src="/hero2.jpg" // Add this image to your public folder
                  alt="Service Benefits"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">20+ Years of Trust</h3>
                    <p className="text-red-200">Serving Kolkata with reliable battery solutions since 2001</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl fancy-font mb-6">Ready for Battery Service?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Book your service appointment today and experience professional battery care
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
              href="mailto:contact@joymakali.com" 
              className="bg-transparent hover:bg-red-800 border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg transition duration-300 flex items-center justify-center"
            >
              <LuMail className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

    
    </div>
  );
}