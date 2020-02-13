const imageThumbs = [...document.querySelectorAll('li img')];
const currentFocus = document.querySelector('figure img');
const figCaption = document.querySelector('figure figcaption');
const bodyTag = document.querySelector('body');
const imageItems = [
    {
        'name':'Pink Flowers',
        'small-src':'images/flowers-pink-small.jpg',
        'src':'images/flowers-pink-large.jpg',
        'alt':'Picture of Pink Flowers',
        'background':'rgb(240, 16, 128)'
    },
    {
        'name':'Purple Flowers',
        'small-src':'images/flowers-purple-small.jpg',
        'src':'images/flowers-purple-large.jpg',
        'alt':'Picture of Purple Flowers',
        'background':'purple'
    },
    {
        'name':'Red Flowers',
        'small-src':'images/flowers-red-small.jpg',
        'src':'images/flowers-red-large.jpg',
        'alt':'Picture of Red Flowers',
        'background':'red'
    },
    {
        'name':'White Flowers',
        'small-src':'images/flowers-white-small.jpg',
        'src':'images/flowers-white-large.jpg',
        'alt':'Picture of White Flowers',
        'background':'white'
    },
    {
        'name':'Yellow Flowers',
        'small-src':'images/flowers-yellow-small.jpg',
        'src':'images/flowers-yellow-large.jpg',
        'alt':'Picture of Yellow Flowers',
        'background':'yellow'
    }
];

function changeImage(){
    console.log(this.getAttribute('src'));

    switch(this.getAttribute('src')){

        case("images/flowers-pink-small.jpg"):
            currentFocus.src = imageItems[0].src;
            currentFocus.alt = imageItems[0].alt;
            figCaption.textContent = imageItems[0].name;
            bodyTag.style.backgroundColor = imageItems[0].background;
            break;

        case("images/flowers-purple-small.jpg"):
            currentFocus.src = imageItems[1].src;
            currentFocus.alt = imageItems[1].alt;
            figCaption.textContent = imageItems[1].name;
            bodyTag.style.backgroundColor = imageItems[1].background;
            break;

        case("images/flowers-red-small.jpg"):
            currentFocus.src = imageItems[2].src;
            currentFocus.alt = imageItems[2].alt;
            figCaption.textContent = imageItems[2].name;
            bodyTag.style.backgroundColor = imageItems[2].background;
            break;

        case("images/flowers-white-small.jpg"):
            currentFocus.src = imageItems[3].src;
            currentFocus.alt = imageItems[3].alt;
            figCaption.textContent = imageItems[3].name;
            bodyTag.style.backgroundColor = imageItems[3].background;
            break;

        case("images/flowers-yellow-small.jpg"):
            currentFocus.src = imageItems[4].src;
            currentFocus.alt = imageItems[4].alt;
            figCaption.textContent = imageItems[4].name;
            bodyTag.style.backgroundColor = imageItems[4].background;
            break;
    }
}

imageThumbs.forEach(elem => {
    elem.addEventListener('click', changeImage)
});
