import type { Education } from '../types';

export const educations: Education[] = [
    {
        title: 'Mastère Expert en Ingénierie Informatique',
        subtitle: 'Spécialisation Architecture Logicielle',
        location: '2022 – 2024 · ESGI, Grenoble (38)',
        sections: [
            {
                items: [
                    'Développement avancé : Clean Code, programmation fonctionnelle (Scala), Reactive Programming Android',
                    'Architectures : Micro-services, Clean Architecture, systèmes distribués',
                    'DevOps : Orchestration de conteneurs, intégration continue',
                    'Conception et méthodes : Domain Driven Design (DDD), Behaviour Driven Development (BDD)',
                    'Infrastructure : Cloud, sécurité logicielle, cryptographie',
                    'Data & IA : Machine Learning, apprentissage par renforcement, frameworks Deep Learning',
                    'Ergonomie et interfaces : IHM logicielle, ergonomie utilisateur',
                    'Projets spécifiques : IoT, Green IT & informatique responsable',
                    "Compétences transverses : Management d'équipe, droit informatique",
                ],
            },
        ],
    },
    {
        title: "Bachelor Concepteur Développeur d'Applications",
        location: '2021 – 2022 · Simplon, Grenoble (38)',
        sections: [
            {
                heading: 'Développer une application sécurisée :',
                items: [
                    'Installer et configurer son environnement de travail en fonction du projet',
                    'Développer des interfaces utilisateur et des composants métier',
                    "Contribuer à la gestion d'un projet informatique",
                ],
            },
            {
                heading: 'Concevoir et développer une application en couches :',
                items: [
                    'Analyser les besoins et maquetter une application',
                    "Définir l'architecture logicielle d'une application",
                    'Concevoir et mettre en place une base de données relationnelle',
                    "Développer des composants d'accès aux données SQL et NoSQL",
                ],
            },
            {
                heading: 'Préparer le déploiement :',
                items: [
                    'Préparer et exécuter les plans de tests',
                    'Documenter et déployer une application',
                    'Contribuer à la mise en production dans une démarche DevOps',
                ],
            },
        ],
    },
    {
        title: 'Développeur Web et Web Mobile',
        location: '2020 – 2021 · Simplon, Grenoble (38)',
        sections: [
            {
                heading: 'Front-end :',
                items: [
                    'Maquetter et réaliser des interfaces utilisateur statiques et dynamiques',
                    'Développer la partie dynamique des interfaces utilisateur web ou web mobile',
                ],
            },
            {
                heading: 'Back-end :',
                items: [
                    'Mettre en place une base de données relationnelle',
                    'Développer des composants métier côté serveur',
                    "Documenter le déploiement d'une application dynamique",
                ],
            },
        ],
    },
];