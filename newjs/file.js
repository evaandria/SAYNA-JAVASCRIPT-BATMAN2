window.onload = () => {
    let arrow = document.getElementsByClassName('scroll');
    scroll[0].addEventlistener('click', () => {
        window.scrollTo(top, 'smooth');
    });
    scroll[1].addEventlistener('click', () => {
        window.scrollBy(0, window.innerHeight);
    });
};