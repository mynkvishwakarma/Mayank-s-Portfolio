'use client';

import { useState, useEffect, SyntheticEvent } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Download,
  MessageCircle,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Award,
  Calendar,
  Users,
  Target,
  LucideIcon
} from 'lucide-react';
import Footer from '@/components/Footer';
import useDisableInspect from '@/hooks/useDisableInspect';

// Define interfaces
interface StatItem {
  number: string;
  label: string;
  icon: LucideIcon;
}

interface ContactInfo {
  icon: LucideIcon;
  text: string;
  link: string | null;
}

export default function Home() {
  useDisableInspect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats: StatItem[] = [
    {number:'1+ Year', label: 'Instructor/Trainer at AKS University', icon: Award},
    { number: '10+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Learning', icon: Calendar },
    { number: '5+', label: 'Technologies', icon: Users },
    { number: '100%', label: 'Dedication', icon: Target }
  ];

  const contactInfo: ContactInfo[] = [
    { icon: MapPin, text: 'Arjun Nagar Pateri, Satna (M.P.)', link: null },
    { icon: Phone, text: '+91 7470955491', link: 'tel:+917470955491' },
    { icon: Mail, text: 'mynkvishwakarma@gmail.com', link: 'mailto:mynkvishwakarma@gmail.com' },
    { icon: Linkedin, text: 'Mayank Vishwakarma', link: 'https://www.linkedin.com/in/vmynk' },
    { icon: Github, text: 'mynkvishwakarma', link: 'https://github.com/mynkvishwakarma' }
  ];

  const handleResumeDownload = () => {
    // You can replace this with your actual resume file
    const link = document.createElement('a');
    link.href = '/resume/Mayank Vishwakarma Resume.pdf'; // Make sure to add your resume file in public folder
    link.download = 'Mayank_Vishwakarma_Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const nextSibling = target.nextSibling as HTMLElement;
    if (nextSibling) {
      nextSibling.style.display = 'flex';
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg overflow-hidden">
            <img 
              src="/profile/Mayank.png" 
              alt="Mayank Vishwakarma" 
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div className="hidden items-center justify-center w-full h-full">
              MV
            </div>
          </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mayank <span className="text-yellow-300">Vishwakarma</span>
            </h1>
            
            {/* Marquee Profession Titles */}
            <div className="mb-6 relative">
              <div className="relative overflow-hidden h-8 md:h-10">
                <div className="animate-slow-marquee whitespace-nowrap">
                  <span className="inline-block mx-6 text-xl md:text-2xl font-semibold">🚀 Aspiring Software Developer</span>
                  <span className="inline-block mx-6 text-xl md:text-2xl font-semibold">📊 Data Analytics</span>
                  <span className="inline-block mx-6 text-xl md:text-2xl font-semibold">🚀 Aspiring Software Developer</span>
                  <span className="inline-block mx-6 text-xl md:text-2xl font-semibold">📊 Data Analytics</span>
                  <span className="inline-block mx-6 text-xl md:text-2xl font-semibold">🚀 Aspiring Software Developer</span>
                  <span className="inline-block mx-6 text-xl md:text-2xl font-semibold">📊 Data Analytics</span>
                  <span className="inline-block mx-6 text-xl md:text-2xl font-semibold">🚀 Aspiring Software Developer</span>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-600 to-transparent"></div>
            </div>

            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative software solutions and leveraging my 
              communication, interpersonal, and technical skills in a professional environment. 
              Seeking opportunities in software development and data analytics to apply my 
              problem-solving abilities and contribute to meaningful projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleResumeDownload}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={handleContactClick}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Contact Me
              </button>
            </div>
          </div>
        </div>
        </section>

      {/* About & Contact Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Career Objective
              </h2>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                 To become a software developer and data analyst, leveraging my communication, 
                  interpersonal, and technical skills in a professional environment. I am passionate 
                  about creating innovative solutions, analyzing data to derive meaningful insights, 
                  and continuously learning new technologies to stay at the forefront of software 
                  development and data analytics.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                      <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800 dark:text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div id="contact-section">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Get In Touch
              </h2>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                        <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex-1"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300 flex-1">
                          {item.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Quick Action Buttons */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.linkedin.com/in/mayank-vishwakarma-112597300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-center font-medium flex items-center justify-center gap-2"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/mynkvishwakarma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-center font-medium flex items-center justify-center gap-2"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start a Project?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:mynkvishwakarma@gmail.com"
              className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a 
              href="tel:+917470955491"
              className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
      

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes slow-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slow-marquee {
          animation: slow-marquee 25s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}