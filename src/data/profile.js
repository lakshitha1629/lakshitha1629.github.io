import { email, github, resume, socials } from './socials';

export const profile = {
    name: 'Lakshitha Perera',
    shortName: 'Lakshitha',
    brand: 'LP',
    role: 'Associate Tech Lead',
    location: 'Nugegoda, Sri Lanka',
    photo: '/profile/lakshitha.png',
    photoAlt: 'Lakshitha Perera',
    avatar: '/profile/avatar.png',
    email,
    resume,
    socials,
    github,
    supporting: ['Full-Stack Engineering', 'Fintech', 'AI & Machine Learning', 'Technical Leadership'],
    headline: 'Associate Tech Lead building full-stack software for fintech, SaaS, streaming and AI products.',
    seoTitle: 'Lakshitha Perera | Associate Tech Lead & Full-Stack Engineer',
    seoDescription:
        'Associate Tech Lead and full-stack software engineer with 6+ years shipping enterprise applications across fintech, SaaS, streaming, e-commerce and AI/ML.',
    siteUrl: 'https://lakshitha1629.github.io/',
    ogImage: 'https://i.ibb.co/hKSpySf/image.jpg',
    startedYear: 2019,
    stats: [
        { value: '6+', label: 'years shipping software' },
        { value: '110', label: 'public GitHub repositories' },
        { value: '01', label: 'published research paper' },
    ],
    about: {
        who: 'I’m Lakshitha, an Associate Tech Lead and full-stack software engineer based in Nugegoda, Sri Lanka. I’ve spent 6+ years delivering enterprise applications across fintech, SaaS, streaming, e-commerce and AI/ML — currently at DirectFN, after product work with teams in Australia and earlier startups here at home.',
        what: 'I work across the stack with C#/.NET, Angular and TypeScript, Oracle PL/SQL, Python and REST APIs. That includes client-facing delivery, complex database work, Scrum, and internal tooling that helps teams ship more reliably. I’ve also led AI-powered creator products, streaming platforms and computer-vision builds.',
        think: 'I look for practical solutions under real constraints: production systems, messy data, security, and clients who need the work to land. I stay close to the details, write when something is worth sharing, and care more about useful software than collecting tools.',
        exploring:
            'I keep going deeper into applied AI — computer vision, recommendation systems and creator tooling — while growing as a technical lead on enterprise products.',
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
