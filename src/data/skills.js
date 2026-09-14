export const skillLevels = ['Experienced', 'Working Knowledge', 'Used in Projects'];

export const skillMountains = [
    {
        id: 'foundation',
        label: 'Foundation',
        elevation: 1,
        items: [
            { name: 'HTML', level: 'Experienced' },
            { name: 'CSS / SCSS', level: 'Experienced' },
            { name: 'JavaScript', level: 'Experienced' },
            { name: 'Programming fundamentals', level: 'Experienced' },
        ],
    },
    {
        id: 'application',
        label: 'Application',
        elevation: 2,
        items: [
            { name: 'Vue.js', level: 'Experienced' },
            { name: 'Angular', level: 'Experienced' },
            { name: 'TypeScript', level: 'Experienced' },
            { name: 'React', level: 'Working Knowledge' },
            { name: 'Next.js', level: 'Working Knowledge' },
            { name: 'Nuxt.js', level: 'Working Knowledge' },
            { name: 'Android / React Native', level: 'Used in Projects' },
        ],
    },
    {
        id: 'backend',
        label: 'Backend',
        elevation: 3,
        items: [
            { name: '.NET / C#', level: 'Experienced' },
            { name: 'PHP', level: 'Experienced' },
            { name: 'Laravel', level: 'Experienced' },
            { name: 'Python', level: 'Experienced' },
            { name: 'REST APIs', level: 'Experienced' },
            { name: 'Node.js', level: 'Working Knowledge' },
            { name: 'SQL Server / MySQL', level: 'Experienced' },
            { name: 'Oracle PL/SQL', level: 'Experienced' },
        ],
    },
    {
        id: 'data-ai',
        label: 'Data & AI',
        elevation: 4,
        items: [
            { name: 'Machine Learning', level: 'Used in Projects' },
            { name: 'Computer Vision', level: 'Used in Projects' },
            { name: 'Recommendation systems', level: 'Used in Projects' },
            { name: 'OpenCV', level: 'Used in Projects' },
            { name: 'scikit-learn / pandas', level: 'Used in Projects' },
            { name: 'TensorFlow', level: 'Used in Projects' },
        ],
    },
    {
        id: 'infrastructure',
        label: 'Infrastructure',
        elevation: 5,
        items: [
            { name: 'Azure', level: 'Used in Projects' },
            { name: 'CI/CD', level: 'Working Knowledge' },
            { name: 'Git', level: 'Experienced' },
            { name: 'Docker', level: 'Working Knowledge' },
            { name: 'Linux', level: 'Working Knowledge' },
            { name: 'Firebase', level: 'Used in Projects' },
        ],
    },
];

export const skillGroups = [
    { label: 'Frontend', items: ['Angular', 'React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript'] },
    { label: 'Backend & APIs', items: ['C# / .NET', 'Python', 'Flask', 'Node.js', 'Laravel', 'REST APIs'] },
    { label: 'AI & data', items: ['scikit-learn', 'TensorFlow', 'OpenCV', 'pandas', 'NumPy', 'Jupyter'] },
    { label: 'Cloud & delivery', items: ['Azure', 'Docker', 'Git', 'CI/CD', 'Linux', 'DigitalOcean'] },
    { label: 'Databases', items: ['Oracle PL/SQL', 'SQL Server', 'MySQL', 'MongoDB', 'Firebase'] },
];

export default skillMountains;
