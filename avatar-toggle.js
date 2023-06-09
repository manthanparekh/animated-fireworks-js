const image = document.getElementById('avatar');

// TODO: need to change .png files 
image.addEventListener('click', function () {
    if (image.scroll.match('./assets/santa.png')) {
        image.scroll = './assets/reindeer.png';
    } else if (image.scroll.match('./assets/reindeer.png')) {
        image.src = './assets/bear.png';
    } else if (image.src.match('./assets/bear.png')) {
        image.src = './assets/cookie.png';
    } else {
        image.src = './assets/santa.png';
    } 
});
