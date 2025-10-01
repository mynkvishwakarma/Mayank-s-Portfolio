'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Users,
  Code2,
  Database,
  Brain,
  Shield,
  School,
  Heart,
  MessageCircle,
  Search,
  Image as ImageIcon,
  LucideIcon
} from 'lucide-react';
import Footer from '@/components/Footer';
import useDisableInspect from '@/hooks/useDisableInspect';

// Define interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl: string | null;
  liveUrl: string | null;
  year: string;
  team: string;
  features: string[];
  icon: LucideIcon;
  fallbackColor: string;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

export default function Projects() {
  useDisableInspect();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AKSU Department Automation',
      description: 'Objective of this internship project to automate CSE & CS Department in AKS University Satna.',
      fullDescription: 'A comprehensive automation system for the Computer Science department at AKS University. This project involved creating an integrated platform for student management, faculty coordination, and administrative tasks to streamline department operations.',
      image: '/project-img/aksu-automation.png',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Prisma'],
      category: 'web',
      status: 'completed',
      githubUrl: 'https://github.com/mynkvishwakarma/AKSU-Computer-Science.git',
      liveUrl: null,
      year: '2025',
      team: 'Solo & Mentor',
      features: [
        'Student Management System',
        'Faculty Dashboard',
        'Attendance Automation',
        'Grade Management',
        'Department Notices'
      ],
      icon: School,
      fallbackColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Serenity Space: Mental Health Platform',
      description: 'Built using Next.js, Prisma, and MongoDB to support mental health awareness.',
      fullDescription: 'A comprehensive mental health platform designed to provide resources, support, and community for individuals seeking mental wellness. Features include mood tracking, professional resources, and community support forums.',
      image: '/project-img/mentalhealth.png',
      technologies: ['Next.js', 'Prisma', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      status: 'completed',
      githubUrl: 'https://github.com/mynkvishwakarma/Serenity-Space.git',
      liveUrl: null,
      year: '2024',
      team: 'Solo',
      features: [
        'Mood Tracking',
        'Resource Library',
        'Community Forum',
        'Professional Directory',
        'Anonymous Chat Support'
      ],
      icon: Heart,
      fallbackColor: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'AI Chat Bot',
      description: 'Designed using Machine Learning and Natural Language Processing (NLP).',
      fullDescription: 'An intelligent chatbot implementation using modern ML and NLP techniques. The bot can understand context, maintain conversations, and provide intelligent responses across various domains.',
      image: '/project-img/ai-chatbot.png',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
      category: 'ai',
      status: 'in-progress',
      githubUrl: 'https://github.com/mynkvishwakarma/Serenity-Space/tree/main/backend',
      liveUrl: null,
      year: '2024',
      team: 'Solo',
      features: [
        'Natural Language Understanding',
        'Context Management',
        'Multi-domain Support',
        'Learning Capabilities',
        'REST API'
      ],
      icon: Brain,
      fallbackColor: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Crime Investigation Department Portal',
      description: 'Developed a website to simplify reporting crimes with photo uploads.',
      fullDescription: 'A digital platform for crime reporting and investigation management. Citizens can report crimes with evidence uploads, while law enforcement can manage cases efficiently with integrated tools.',
      image: '/project-img/crime-portal.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'web',
      status: 'completed',
      githubUrl: 'https://github.com/mynkvishwakarma/Crime-Investigation-Department-CID-Project-.git',
      liveUrl: null,
      year: '2023',
      team: 'Team (2 members)',
      features: [
        'Crime Reporting System',
        'Evidence Upload',
        'Case Management',
        'Status Tracking',
        'Admin Dashboard'
      ],
      icon: Shield,
      fallbackColor: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Resume Maker Platform',
      description: 'Full-stack solution with modern Pattern resume Maker.',
      fullDescription: 'A complete e-commerce platform featuring product management, user authentication, shopping cart, and payment processing with Stripe integration.',
      image: '/project-img/resume-maker.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      category: 'web',
      status: 'completed',
      githubUrl: 'https://github.com/mynkvishwakarma/resume-platform.git',
      liveUrl: null,
      year: '2025',
      team: 'Solo',
      features: [
        'User Authentication',
        'Resume Edit',
        'Save for future uses',
        'Download for share to anywhere'
      ],
      icon: Code2,
      fallbackColor: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analysis.',
      fullDescription: 'A comprehensive data analytics platform with real-time visualization, reporting tools, and predictive analytics capabilities using modern data processing libraries.',
      image: '/project-img/data-dashboard.png',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
      category: 'data',
      status: 'in-progress',
      githubUrl: null,
      liveUrl: null,
      year: '2025',
      team: 'Solo',
      features: [
        'Real-time Visualization',
        'Interactive Charts',
        'Data Filtering',
        'Export Reports',
        'Predictive Analytics'
      ],
      icon: Database,
      fallbackColor: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories: Category[] = [
    { id: 'all', label: 'All Projects', icon: Code2 },
    { id: 'web', label: 'Web Development', icon: Code2 },
    { id: 'ai', label: 'AI/ML', icon: Brain },
    { id: 'data', label: 'Data Analytics', icon: Database }
  ];

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Function to check if image path is valid
  const isValidImagePath = (imagePath: string): boolean => {
    return !!(imagePath && imagePath.trim() !== '' && !imagePath.includes('api/placeholder'));
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, project: Project) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my portfolio of projects ranging from web development to AI/ML and data analytics. 
              Each project represents a learning journey and practical application of skills.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      filter === category.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    } shadow-sm`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group"
              >
                {/* Project Header */}
                <div className="relative h-48 overflow-hidden">
                  {/* Show image only if path is valid, otherwise show fallback */}
                  {isValidImagePath(project.image) ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => handleImageError(e, project)}
                      />
                      {/* Fallback Gradient Background - hidden by default */}
                      <div 
                        className={`hidden absolute inset-0 bg-gradient-to-r ${project.fallbackColor}`}
                      >
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <project.icon className="w-8 h-8 text-white mb-2" />
                          <h3 className="text-xl font-bold text-white line-clamp-2">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Show gradient fallback directly if no valid image path
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.fallbackColor}`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <project.icon className="w-8 h-8 text-white mb-2" />
                        <h3 className="text-xl font-bold text-white line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/module/projects/${project.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center font-medium flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      View Details
                    </Link>
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search or filter criteria to find what you&apos;re looking for.
                </p>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Interested in Collaboration?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                I&apos;m always open to discussing new projects and opportunities.
              </p>
              <Link
                href="/module/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}