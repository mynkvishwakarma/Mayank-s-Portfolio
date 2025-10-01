'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Calendar,
  Users,
  Code2,
  Brain,
  Shield,
  School,
  Heart,
  CheckCircle,
  Clock,
  Play,
  Image as ImageIcon,
  Database,
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
  placeholderImage: string;
  technologies: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl: string | null;
  liveUrl: string | null;
  year: string;
  team: string;
  duration: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  icon: LucideIcon;
  fallbackColor: string;
}

interface ProjectsData {
  [key: string]: Project;
}

// Project data with images
const projectsData: ProjectsData = {
  '1': {
    id: 1,
    title: 'AKSU Department Automation',
    description: 'Objective of this internship project to automate CSE & CS Department in AKS University Satna.',
    fullDescription: 'A comprehensive automation system for the Computer Science department at AKS University. This project involved creating an integrated platform for student management, faculty coordination, and administrative tasks to streamline department operations and improve efficiency across all departmental activities.',
    image: '/project-img/aksu-automation.png',
    placeholderImage: 'https://placehold.co/800x400/3B82F6/FFFFFF?text=AKSU+Department+Automation',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Prisma', 'Express', 'JWT'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/mynkvishwakarma/AKSU-Computer-Science.git',
    liveUrl: null,
    year: '2025',
    team: 'Solo & Mentor',
    duration: '6 months',
    features: [
      'Student Management System with profile and academic tracking',
      'Faculty Dashboard for course and student management',
      'Automated Attendance System with QR code integration',
      'Grade Management and result processing',
      'Department Notice Board with real-time updates',
      'Resource Sharing Platform for study materials'
    ],
    challenges: [
      'Integrating multiple department workflows into a single platform',
      'Ensuring data security and privacy for student information',
      'Creating an intuitive interface for non-technical users'
    ],
    learnings: [
      'Full-stack development with modern frameworks',
      'Database design and optimization',
      'User experience design for educational platforms',
      'Project management and deployment strategies'
    ],
    icon: School,
    fallbackColor: 'from-blue-500 to-cyan-500'
  },
  '2': {
    id: 2,
    title: 'Serenity Space: Mental Health Platform',
    description: 'Built using Next.js, Prisma, and MongoDB to support mental health awareness.',
    fullDescription: 'A comprehensive mental health platform designed to provide resources, support, and community for individuals seeking mental wellness. Features include mood tracking, professional resources, and community support forums.',
    image: '/project-img/mentalhealth.png',
    placeholderImage: 'https://placehold.co/800x400/8B5CF6/FFFFFF?text=Serenity+Space+Mental+Health',
    technologies: ['Next.js', 'Prisma', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/mynkvishwakarma/Serenity-Space.git',
    liveUrl: null,
    year: '2024',
    team: 'Solo',
    duration: '4 months',
    features: [
      'Mood Tracking and emotional journaling',
      'Resource Library with mental health articles',
      'Community Support Forum',
      'Professional Therapist Directory',
      'Anonymous Chat Support System'
    ],
    challenges: [
      'Ensuring user privacy and data security for sensitive information',
      'Creating a welcoming and non-stigmatizing user interface',
      'Implementing real-time chat functionality'
    ],
    learnings: [
      'Building secure authentication systems',
      'Real-time data synchronization',
      'User-centered design principles',
      'Mental health domain knowledge'
    ],
    icon: Heart,
    fallbackColor: 'from-purple-500 to-pink-500'
  },
  '3': {
    id: 3,
    title: 'AI Chat Bot',
    description: 'Designed using Machine Learning and Natural Language Processing (NLP).',
    fullDescription: 'An intelligent chatbot implementation using modern ML and NLP techniques. The bot can understand context, maintain conversations, and provide intelligent responses across various domains including customer support, education, and entertainment.',
    image: '/project-img/ai-chatbot.png',
    placeholderImage: 'https://placehold.co/800x400/10B981/FFFFFF?text=AI+Chat+Bot+with+NLP',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React', 'Socket.io'],
    category: 'ai',
    status: 'in-progress',
    githubUrl: 'https://github.com/mynkvishwakarma/Serenity-Space/tree/main/backend',
    liveUrl: null,
    year: '2024',
    team: 'Solo',
    duration: '2 months',
    features: [
      'Natural Language Understanding and Processing',
      'Context-aware conversation management',
      'Multi-domain knowledge integration',
      'Machine learning-based response generation',
      'REST API for integration with other applications'
    ],
    challenges: [
      'Training accurate NLP models with limited datasets',
      'Managing conversation context across multiple turns',
      'Optimizing response time for real-time interactions'
    ],
    learnings: [
      'Natural Language Processing techniques',
      'Machine Learning model training and optimization',
      'Real-time web socket communication',
      'AI ethics and responsible AI development'
    ],
    icon: Brain,
    fallbackColor: 'from-green-500 to-emerald-500'
  },
  '4': {
    id: 4,
    title: 'Crime Investigation Department Portal',
    description: 'Developed a website to simplify reporting crimes with photo uploads.',
    fullDescription: 'A digital platform for crime reporting and investigation management. Citizens can report crimes with evidence uploads, while law enforcement can manage cases efficiently with integrated tools for evidence management, case tracking, and inter-departmental collaboration.',
    image: '/project-img/crime-portal.png',
    placeholderImage: 'https://placehold.co/800x400/F59E0B/FFFFFF?text=Crime+Investigation+Portal',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/mynkvishwakarma/Crime-Investigation-Department-CID-Project-.git',
    liveUrl: null,
    year: '2023',
    team: 'Team (2 members)',
    duration: '3 months',
    features: [
      'Secure Crime Reporting System with evidence upload',
      'Case Management Dashboard for law enforcement',
      'Evidence Tracking and chain of custody',
      'Status Updates for reporters',
      'Admin Dashboard with analytics and reporting'
    ],
    challenges: [
      'Ensuring data security and preventing unauthorized access',
      'Handling large file uploads for evidence',
      'Creating an intuitive interface for non-technical users'
    ],
    learnings: [
      'Secure web application development',
      'File upload and storage management',
      'Database design for complex relationships',
      'Team collaboration and version control'
    ],
    icon: Shield,
    fallbackColor: 'from-orange-500 to-red-500'
  },
  '5': {
    id: 5,
    title: 'Resume Maker Platform',
    description: 'Full-stack solution with modern Pattern resume integration.',
    fullDescription: 'A comprehensive resume building platform that allows users to create professional resumes with modern templates. Features include real-time editing, multiple format exports, and cloud storage for resume management.',
    image: '/project-img/resume-maker.png',
    placeholderImage: 'https://placehold.co/800x400/F97316/FFFFFF?text=Resume+Maker+Platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'PDFKit', 'Cloud Storage'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/mynkvishwakarma/resume-platform.git',
    liveUrl: null,
    year: '2025',
    team: 'Solo',
    duration: '2 months',
    features: [
      'User Authentication and profile management',
      'Real-time Resume Editor with live preview',
      'Multiple Professional Templates',
      'Cloud Storage for resume versions',
      'PDF Export and sharing capabilities'
    ],
    challenges: [
      'Implementing real-time preview synchronization',
      'Generating high-quality PDF exports',
      'Managing user data privacy and security'
    ],
    learnings: [
      'Real-time data synchronization',
      'PDF generation and manipulation',
      'User experience design for form-heavy applications',
      'Cloud storage integration'
    ],
    icon: Code2,
    fallbackColor: 'from-yellow-500 to-orange-500'
  },
  '6': {
    id: 6,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for data visualization and analysis.',
    fullDescription: 'A comprehensive data analytics platform with real-time visualization, reporting tools, and predictive analytics capabilities. The dashboard processes large datasets and provides interactive charts, filtering options, and export functionality for business intelligence.',
    image: '/project-img/data-dashboard.png',
    placeholderImage: 'https://placehold.co/800x400/6366F1/FFFFFF?text=Data+Analytics+Dashboard',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Flask', 'React'],
    category: 'data',
    status: 'in-progress',
    githubUrl: null,
    liveUrl: null,
    year: '2025',
    team: 'Solo',
    duration: '3 months',
    features: [
      'Real-time Data Visualization with interactive charts',
      'Advanced Data Filtering and segmentation',
      'Automated Report Generation',
      'Predictive Analytics with ML models',
      'Data Export in multiple formats (CSV, Excel, PDF)'
    ],
    challenges: [
      'Processing and visualizing large datasets efficiently',
      'Creating responsive and interactive visualizations',
      'Implementing real-time data updates'
    ],
    learnings: [
      'Data processing and analysis with Python',
      'Interactive data visualization techniques',
      'Machine learning for predictive analytics',
      'Performance optimization for data-heavy applications'
    ],
    icon: Database,
    fallbackColor: 'from-indigo-500 to-purple-500'
  }
};

interface ImageErrorState {
  [key: string]: boolean;
}

export default function ProjectDetail() {
  useDisableInspect();
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState<ImageErrorState>({});
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData[projectId];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageError = (projectId: string) => {
    setImageError(prev => ({ ...prev, [projectId]: true }));
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/module/projects" className="text-blue-600 hover:text-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link 
            href="/module/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Project Image Header */}
            <div className="relative h-80 overflow-hidden">
              {!imageError[project.id] ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(project.id.toString())}
                />
              ) : (
                <img 
                  src={project.placeholderImage} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-6 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <project.icon className="w-12 h-12 text-white" />
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </h1>
                    <p className="text-white/90 text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : project.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Year</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{project.year}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Team</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{project.team}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Code2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Category</div>
                    <div className="font-semibold text-gray-800 dark:text-white capitalize">{project.category}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    View Code on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Challenges Faced</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-orange-500 font-bold mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Key Learnings</h2>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-green-500 font-bold mt-1">•</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to other projects */}
          <div className="text-center">
            <Link
              href="/module/projects"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 text-lg font-semibold"
            >
              <Play className="w-5 h-5" />
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}