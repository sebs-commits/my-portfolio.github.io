
// the following is for the partially sticky header

window.addEventListener('scroll', function() {
    const header = document.querySelector('.nav-bar-container');
    const headerHeight = header.clientHeight;
    
    if (window.scrollY > headerHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
