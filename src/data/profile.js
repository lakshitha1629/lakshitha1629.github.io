import { imageUrl } from './image';
import { email, github, resume, socials } from './socials';

export const profile = {
    name: 'Lakshitha Perera',
    shortName: 'Lakshitha',
    brand: 'LP',
    role: 'Tech Lead',
    location: 'Nugegoda, Sri Lanka',
    photo: imageUrl('/profile/lakshitha.png'),
    photoAlt: 'Lakshitha Perera, Tech Lead and Full-Stack Engineer from Sri Lanka',
    avatar: imageUrl('/profile/avatar.png'),
    email,
    resume,
    socials,
    github,
    supporting: ['Full-Stack Engineering', 'Fintech', 'AI & Machine Learning', 'Technical Leadership'],
    headline: 'Tech Lead building full-stack software for fintech, SaaS, streaming and AI products.',
    seoTitle: 'Lakshitha Perera | Tech Lead & Full-Stack Engineer',
    seoDescription:
        'Lakshitha Perera is a Tech Lead and Full-Stack Engineer from Sri Lanka specializing in AI, scalable web applications, cloud systems and software engineering.',
    siteUrl: 'https://lakshitha1629.github.io/',
    ogImage: 'https://lakshitha1629.github.io/profile/lakshitha.png',
    startedYear: 2019,
    stats: [
        { value: '6+', label: 'years shipping software', icon: 'bx-briefcase' },
        { value: '110', label: 'public GitHub repositories', icon: 'bxl-github' },
        { value: '01', label: 'published research paper', icon: 'bx-file' },
    ],
    about: {
        who: 'I’m Lakshitha, an Tech Lead and full-stack software engineer based in Sri Lanka, with 6+ years of experience building enterprise and digital products across fintech, SaaS, streaming, e-commerce, and AI.',
        what: 'I build end-to-end software across C#/.NET, Angular, TypeScript, Oracle PL/SQL, Python, and REST APIs. My work spans application development, complex database systems, API integrations, technical delivery, internal tooling, and AI-powered products.',
        think: 'I focus on practical engineering that works in the real world. I enjoy turning complex requirements, imperfect data, performance challenges, and security constraints into reliable software that teams and users can depend on.',
        exploring:
            'I’m continuing to go deeper into applied AI, including computer vision, recommendation systems, intelligent automation, and creator-focused tools, while growing further in technical leadership and system design.',
        identity: [
            'full-stack',
            'fintech',
            'C# / .NET',
            'Angular',
            'Oracle PL/SQL',
            'Python',
            'AI / ML',
            'technical leadership',
        ],
    },
    services: [
        {
            title: 'Full-stack product engineering',
            description:
                'Shipping web and API work with Angular, TypeScript, React/Next.js, C#/.NET, Python and REST — from implementation through deployment.',
        },
        {
            title: 'Enterprise systems & databases',
            description:
                'Building fintech and SaaS workflows with C#/.NET, Oracle PL/SQL and SQL Server, including client-facing delivery in Scrum teams.',
        },
        {
            title: 'AI-powered products',
            description:
                'Applied machine learning on real products: computer vision, recommendation systems, and AI tools for creators — not just demos.',
        },
    ],
    contact: {
        heading: 'Let’s talk about the work.',
        body: 'If you have a product to ship, a hard engineering problem, or a team that needs someone who can move across the stack, I’m happy to hear it.',
        invite: 'Open to conversations.',
    },
};

export default profile;
