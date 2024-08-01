document.addEventListener('DOMContentLoaded', () => {
    // Cache the buttons
    const seeMoreBtns = document.querySelectorAll('[data-target]');

    seeMoreBtns.forEach(btn => {
        // Cache the target element
        const targetSelector = btn.getAttribute('data-target');
        const description = document.querySelector(targetSelector);

        // Event handler function
        const handleClick = () => {
            const isExpanded = description.classList.toggle('expanded');
            description.classList.toggle('truncated', !isExpanded);
            btn.textContent = isExpanded ? 'voir moins' : '...voir plus';
        };

        // Attach the click event handler
        btn.addEventListener('click', handleClick);
    });
});
