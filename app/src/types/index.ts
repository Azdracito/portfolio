export interface Section {
    heading?: string;
    items: string[];
}

export interface Experience {
    title: string;
    location: string;
    mission?: string;
    sections: Section[];
    stack?: string;
}

export interface Education {
    title: string;
    subtitle?: string;
    location: string;
    sections: Section[];
}

export interface Certification {
    title: string;
    issuer: string;
    year: number;
}

export interface Project {
    title: string;
    img: string;
    url: string;
}

export type TagVariant = 'frontend' | 'backend' | 'devops' | 'method';

export interface SkillCategory {
    label: string;
    tags: string[];
    variant: TagVariant;
}

export interface SkillGroup {
    heading: string;
    categories: SkillCategory[];
}