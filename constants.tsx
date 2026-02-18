
import { Project, Skill, Experience } from './types';

export interface ProjectDetail extends Project {
  longDescription: string;
  challenges: string[];
  outcomes: string[];
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: '1',
    title: 'MultiConnect Bank',
    description: 'A cutting-edge neo-banking app built using Kotlin Multiplatform (KMP) for 100% shared business logic.',
    longDescription: 'MultiConnect Bank was a pioneering project using KMP to share all data handling, network, and encryption logic between iOS and Android. The UI was crafted using Compose Multiplatform to ensure a truly unified user experience across platforms.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    tags: ['KMP', 'CMP', 'Kotlin', 'Ktor', 'SqlDelight'],
    link: 'https://github.com/aksohag/multiconnect',
    role: 'Lead KMP Developer',
    challenges: ['Implementing platform-specific biometric auth in shared code.', 'Optimizing Ktor performance for heavy API traffic.', 'Shared navigation state management.'],
    outcomes: ['Reduced development time by 40% using shared logic.', 'Zero logic-related bugs during cross-platform launch.', '4.9/5 stars on Play Store and App Store.']
  },
  {
    id: '2',
    title: 'Sylhet Pulse',
    description: 'A community health and information app for the Sylhet region, featuring real-time local updates.',
    longDescription: 'Sylhet Pulse uses Compose Multiplatform to deliver a pixel-perfect, fluid interface. It serves the local community with real-time news, emergency services, and health alerts using a highly efficient Firebase integration.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    tags: ['CMP', 'Firebase', 'Kotlin Coroutines', 'MVI'],
    link: 'https://github.com/aksohag/sylhetpulse',
    role: 'Mobile Architect',
    challenges: ['Optimizing local data caching for low-connectivity areas.', 'Real-time notification synchronization.', 'Complex custom UI components in CMP.'],
    outcomes: ['Adopted by 50k+ local residents.', 'Fastest loading regional app in Bangladesh.', 'Highly accessible design for elderly users.']
  },
  {
    id: '3',
    title: 'Voyage Share',
    description: 'A social travel planning app using CMP to target iOS, Android, and Desktop from one project.',
    longDescription: 'Voyage Share is a testament to the power of Compose Multiplatform. It allows users to plan trips on their phone and continue seamlessly on their laptop, all using a single shared codebase for the entire UI and logic layer.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
    tags: ['KMP', 'CMP', 'Kotlin', 'Voyager'],
    link: 'https://github.com/aksohag/voyage',
    role: 'Fullstack Mobile Developer',
    challenges: ['Adaptive UI design for mobile vs desktop.', 'Synchronizing local database state across devices.', 'Handling deep-linking in shared code.'],
    outcomes: ['First KMP app to reach 100k downloads in its niche.', 'Featured in Kotlin Multiplatform Weekly.', 'Minimal maintenance overhead.']
  },
  {
    id: '4',
    title: 'EcoLog KMP',
    description: 'Environmental monitoring tool for corporate sustainability tracking.',
    longDescription: 'Built for enterprise use, EcoLog KMP leverages Kotlin Multiplatform to ensure that critical carbon calculation logic is identical across all platforms, from mobile to internal web dashboards.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=1200&auto=format&fit=crop',
    tags: ['Kotlin', 'KMP', 'GraphQL', 'Decompose'],
    link: 'https://github.com/aksohag/ecolog',
    role: 'Lead Architect',
    challenges: ['Ensuring 100% logic parity between platforms.', 'Complex GraphQL data structures.', 'Modular architecture for large-scale enterprise use.'],
    outcomes: ['Reduced audit errors by 25%.', 'Faster feature rollout by 50%.', 'High praise for consistent UI behavior.']
  }
];

export const SKILLS: Skill[] = [
  { name: 'KMP', icon: 'fa-solid fa-layer-group', color: 'text-purple-400' },
  { name: 'CMP', icon: 'fa-solid fa-gem', color: 'text-pink-400' },
  { name: 'Kotlin', icon: 'fa-brands fa-android', color: 'text-orange-400' },
  { name: 'Jetpack Compose', icon: 'fa-solid fa-code', color: 'text-blue-500' },
  { name: 'SwiftUI', icon: 'fa-brands fa-apple', color: 'text-orange-600' },
  { name: 'Firebase', icon: 'fa-solid fa-fire', color: 'text-yellow-500' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'TechFlow Global',
    role: 'Senior KMP Engineer',
    period: '2021 - Present',
    description: 'Architecting multi-platform solutions using KMP and CMP. Mentoring teams on cross-platform best practices.'
  },
  {
    company: 'Dhaka Code Studio',
    role: 'Mobile Lead',
    period: '2019 - 2021',
    description: 'Led the transition from native-only to KMP-shared development for high-profile clients.'
  },
  {
    company: 'Sylhet IT Hub',
    role: 'Android Developer',
    period: '2017 - 2019',
    description: 'Developed native Android apps and started exploring the early stages of Kotlin Multiplatform.'
  }
];

export const DEVELOPER_BIO = `
AK Sohag is a world-class Mobile Developer from Sylhet, Bangladesh. 
He is a specialist in Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP), 
passionate about building unified apps that don't sacrifice native quality. 
With a deep love for the Kotlin ecosystem, he helps businesses deliver 
multi-platform experiences faster and more efficiently.
`;
