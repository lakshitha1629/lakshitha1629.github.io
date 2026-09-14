import { publications } from './publications';
import { projects } from './projects';

export const SITE_ORIGIN = 'https://lakshitha1629.github.io';
export const OG_IMAGE = `${SITE_ORIGIN}/profile/lakshitha.png`;
export const DEFAULT_TITLE = 'Lakshitha Perera | Associate Tech Lead & Full-Stack Engineer';
export const DEFAULT_DESCRIPTION =
    'Lakshitha Perera is an Associate Tech Lead and Full-Stack Engineer from Sri Lanka specializing in AI, scalable web applications, cloud systems and software engineering.';
export const PERSON_ID = `${SITE_ORIGIN}/#lakshitha-perera`;
export const PROFILE_ID = `${SITE_ORIGIN}/#profile`;

export const SAME_AS = [
    'https://www.linkedin.com/in/lakshitha1629/',
    'https://github.com/lakshitha1629',
    'https://medium.com/@lakshitha1629',
    'https://twitter.com/lakshitha1629',
];

export function canonicalUrl(path) {
    if (!path || path === '/') return `${SITE_ORIGIN}/`;
    return `${SITE_ORIGIN}${path}`;
}

export function personEntity() {
    return {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Lakshitha Perera',
        url: `${SITE_ORIGIN}/`,
        image: OG_IMAGE,
        jobTitle: 'Associate Tech Lead',
        description: 'Associate Tech Lead, Full-Stack Engineer and AI Developer from Sri Lanka.',
        email: 'mailto:lakshitha1629@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nugegoda',
            addressCountry: 'LK',
        },
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Uva Wellassa University of Sri Lanka',
        },
        worksFor: {
            '@type': 'Organization',
            name: 'DirectFN',
            url: 'https://www.directfn.com/',
        },
        knowsAbout: [
            'Full-Stack Engineering',
            'Artificial Intelligence',
            'Cloud Systems',
            'Software Engineering',
            'Fintech',
        ],
        sameAs: SAME_AS,
    };
}

export function profilePageJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': PROFILE_ID,
        url: `${SITE_ORIGIN}/`,
        name: 'Lakshitha Perera',
        mainEntity: personEntity(),
    };
}

export const sectionPages = {
    Home: {
        path: '/',
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        h1: 'Lakshitha Perera',
        ogType: 'profile',
    },
    About: {
        path: '/about',
        title: 'About Lakshitha Perera | Associate Tech Lead & Full-Stack Engineer',
        description:
            'About Lakshitha Perera — Associate Tech Lead, Full-Stack Engineer and AI Developer from Sri Lanka, working on fintech, SaaS, streaming and applied AI.',
        h1: 'About Lakshitha Perera',
        ogType: 'profile',
    },
    Experience: {
        path: '/experience',
        title: 'Experience | Lakshitha Perera, Associate Tech Lead',
        description:
            'Work experience of Lakshitha Perera: Associate Tech Lead at DirectFN, previously Full Stack Developer at ProjectXSpace, Software Engineer at BevyLabs, and intern at Mobitel.',
        h1: 'Experience — Lakshitha Perera',
        ogType: 'profile',
    },
    Project: {
        path: '/projects',
        title: 'Projects | Lakshitha Perera — AI, Full-Stack and Cloud',
        description:
            'Selected software projects by Lakshitha Perera, including ToolGenie, AYOZAT Stream, ZATLIVE, RightsMint and applied AI systems.',
        h1: 'Projects by Lakshitha Perera',
        ogType: 'website',
    },
    Skills: {
        path: '/skills',
        title: 'Skills | Lakshitha Perera — Full-Stack, AI and Cloud',
        description:
            'Technical skills of Lakshitha Perera: C#/.NET, Angular, Python, Oracle PL/SQL, AI/ML, cloud systems and software engineering.',
        h1: 'Skills — Lakshitha Perera',
        ogType: 'website',
    },
    Education: {
        path: '/education',
        title: 'Education | Lakshitha Perera — Uva Wellassa University',
        description:
            'Lakshitha Perera studied Industrial Information Technology at Uva Wellassa University of Sri Lanka, with competitions and community leadership alongside the degree.',
        h1: 'Education — Lakshitha Perera',
        ogType: 'profile',
    },
    Publications: {
        path: '/publications',
        title: 'Publications | Lakshitha Perera',
        description:
            'Research and educational work by Lakshitha Perera, including PhishNet deep-learning research and the Python Sinhala learning resource.',
        h1: 'Publications by Lakshitha Perera',
        ogType: 'website',
    },
    Contact: {
        path: '/contact',
        title: 'Contact Lakshitha Perera | Associate Tech Lead',
        description:
            'Contact Lakshitha Perera — Associate Tech Lead and Full-Stack Engineer based in Sri Lanka. Open to conversations about software engineering, AI and product work.',
        h1: 'Contact Lakshitha Perera',
        ogType: 'profile',
    },
};

export function projectSeo(project) {
    const path = `/projects/${project.id}`;
    const description = `${project.solution} Built by Lakshitha Perera, Associate Tech Lead and Full-Stack Engineer from Sri Lanka.`;
    return {
        path,
        title: `${project.title} | Lakshitha Perera`,
        description,
        h1: project.title,
        ogType: 'article',
        jsonLd: {
            '@context': 'https://schema.org',
            '@graph': [
                profilePageJsonLd(),
                {
                    '@type': 'CreativeWork',
                    '@id': `${canonicalUrl(path)}#work`,
                    name: project.title,
                    description: project.solution,
                    url: canonicalUrl(path),
                    image: project.image && project.image.startsWith('http') ? project.image : project.image ? `${SITE_ORIGIN}${project.image}` : OG_IMAGE,
                    author: { '@id': PERSON_ID },
                    creator: { '@id': PERSON_ID },
                },
            ],
        },
    };
}

export function publicationSeo(publication) {
    const path = `/publications/${publication.id}`;
    return {
        path,
        title: `${publication.title} | Lakshitha Perera`,
        description: publication.description,
        h1: publication.title,
        ogType: 'article',
        jsonLd: {
            '@context': 'https://schema.org',
            '@graph': [
                profilePageJsonLd(),
                {
                    '@type': 'CreativeWork',
                    '@id': `${canonicalUrl(path)}#publication`,
                    name: publication.title,
                    description: publication.description,
                    datePublished: publication.year,
                    url: publication.url || canonicalUrl(path),
                    author: { '@id': PERSON_ID },
                    creator: { '@id': PERSON_ID },
                },
            ],
        },
    };
}

export function resolveSeo(route) {
    if (!route) return pagePayload(sectionPages.Home);
    if (route.name === 'ProjectDetail') {
        const project = projects.find((item) => item.id === route.params.id);
        if (project) return pagePayload(projectSeo(project));
    }
    if (route.name === 'PublicationDetail') {
        const publication = publications.find((item) => item.id === route.params.id);
        if (publication) return pagePayload(publicationSeo(publication));
    }
    const section = sectionPages[route.name] || sectionPages.Home;
    return pagePayload(section);
}

export function pagePayload(page) {
    const url = canonicalUrl(page.path);
    return {
        ...page,
        url,
        image: OG_IMAGE,
        jsonLd: page.jsonLd || profilePageJsonLd(),
    };
}

export default {
    SITE_ORIGIN,
    DEFAULT_TITLE,
    DEFAULT_DESCRIPTION,
    sectionPages,
    resolveSeo,
};
