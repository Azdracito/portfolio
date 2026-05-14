import type { Section } from '../types';

export function sectionsHtml(sections: Section[], mission?: string): string {
    const missionPart = mission
        ? `<p style="margin-top:.75rem">${mission}</p>`
        : '';
    const sectionsPart = sections
        .map((sec) => {
            const heading = sec.heading
                ? `<p><strong>${sec.heading}</strong></p>`
                : '';
            const items = sec.items.map((i) => `<li>${i}</li>`).join('');
            return `<div style="margin-top:.75rem">${heading}<ul>${items}</ul></div>`;
        })
        .join('');
    return missionPart + sectionsPart;
}