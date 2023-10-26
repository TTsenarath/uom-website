// Simple JavaScript function for the animation
window.onload = function() {
    const header = document.querySelector('header');
    header.style.opacity = 0;

    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);
};
