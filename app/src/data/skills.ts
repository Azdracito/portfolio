import type { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
    {
        heading: 'Frontend',
        categories: [
            {
                label: 'Frameworks',
                variant: 'frontend',
                tags: ['Vue.js', 'React', 'Angular', 'Nuxt.js', 'Next.js'],
            },
            {
                label: 'UI / UX',
                variant: 'frontend',
                tags: [
                    'Tailwind CSS',
                    'Bootstrap',
                    'Material-UI',
                    'Responsive Design',
                    'PWA',
                ],
            },
            {
                label: 'Outils',
                variant: 'frontend',
                tags: ['Vite', 'Webpack', 'TypeScript', 'Jest', 'Cypress'],
            },
        ],
    },
    {
        heading: 'Backend',
        categories: [
            {
                label: 'Langages',
                variant: 'backend',
                tags: ['PHP', 'Node.js', 'Python', 'Java'],
            },
            {
                label: 'Frameworks',
                variant: 'backend',
                tags: ['Symfony', 'Laravel', 'NestJS', 'Express.js'],
            },
            {
                label: 'API',
                variant: 'backend',
                tags: ['REST', 'GraphQL', 'WebSocket', 'WebRTC'],
            },
            {
                label: 'Databases',
                variant: 'backend',
                tags: [
                    'MySQL',
                    'PostgreSQL',
                    'MongoDB',
                    'Redis',
                    'Elasticsearch',
                ],
            },
        ],
    },
    {
        heading: 'DevOps',
        categories: [
            {
                label: 'Conteneurs',
                variant: 'devops',
                tags: ['Docker', 'Kubernetes'],
            },
            {
                label: 'CI / CD',
                variant: 'devops',
                tags: ['GitLab CI', 'GitHub Actions', 'Jenkins'],
            },
            {
                label: 'Monitoring',
                variant: 'devops',
                tags: ['Sentry', 'SonarQube', 'New Relic'],
            },
        ],
    },
    {
        heading: 'Méthodologies',
        categories: [
            {
                label: 'Pratiques',
                variant: 'method',
                tags: ['Agile / Scrum', 'TDD', 'Clean Architecture', 'DDD'],
            },
        ],
    },
];