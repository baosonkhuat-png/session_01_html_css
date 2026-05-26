const progressBars = document.querySelectorAll('.skill-progress');

if (progressBars.length) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            const bar = entry.target;
            const value = bar.dataset.progress;

            if (!value) {
                observerInstance.unobserve(bar);
                return;
            }

            bar.style.setProperty('--progress', `${value}%`);
            bar.classList.add('animate');
            observerInstance.unobserve(bar);
        });
    }, {
        threshold: 0.25,
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}
