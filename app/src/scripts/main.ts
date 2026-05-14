// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(
            (link as HTMLAnchorElement).getAttribute('href') ?? ''
        );
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// ScrollSpy
const sections = Array.from(
    document.querySelectorAll<HTMLElement>('section[id]')
);
const navLinks = document.querySelectorAll('.nav-links a');

function updateScrollSpy() {
    const scrollPos = window.scrollY + 150;
    let current = sections[0]?.id ?? '';
    for (const s of sections) {
        if (scrollPos >= s.offsetTop) current = s.id;
    }
    navLinks.forEach((a) => {
        a.classList.toggle(
            'active',
            a.getAttribute('href') === `#${current}`
        );
    });
}
window.addEventListener('scroll', updateScrollSpy, { passive: true });
updateScrollSpy();

// Scroll-in animations
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
                target.classList.add('visible');
                observer.unobserve(target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));