var banner = document.getElementById('banner');
var line = document.getElementById('line');
var sale = document.getElementById('sale');
var savingforall = document.getElementById('savingforall');
var savebig = document.getElementById('savebig');
var buttonborder = document.getElementById('buttonborder');
var shopnow = document.getElementById('shopnow');
var castle = document.getElementById('castle');
var burnella = document.getElementById('burnella');
var btnleft = document.getElementById('btnleft');
var btnright = document.getElementById('btnright');


function startFirstAnimation(){
    line.style.transition = 'opacity 0.5s linear';
    line.style.opacity = '1';
    sale.style.transition = 'transform 1s linear';
    sale.style.transform =  'translateX(240px)';
    savingforall.style.transition = 'transform 1s linear';
    savingforall.style.transform = 'translateX(-240px)';
    console.log('hehehe');
    setTimeout(startSecondAnimation, 3000);
};

function startSecondAnimation(){
    line.style.opacity = '0';
    sale.style.transition = 'opacity 0.5s linear';
    sale.style.opacity = '0';
    savingforall.style.transition = 'opacity 0.5s linear';
    savingforall.style.opacity = '0'
    setTimeout(startThirdAnimation, 2000)
}

function startThirdAnimation(){
    savebig.style.transition = 'opacity 0.5s linear';
    savebig.style.opacity = '1';
    buttonborder.style.transition = 'opacity 0.5s linear';
    buttonborder.style.opacity = '1';
    shopnow.style.transition = 'opacity 0.5s linear';
    shopnow.style.opacity = '1';
    setTimeout(startFourthAnimation, 2000);
}

function startFourthAnimation(){
    castle.style.transition = 'opacity 0.5s linear'
    castle.style.opacity = '1';
    burnella.style.transition = 'opacity 0.5s linear'
    burnella.style.opacity = '1';
    btnright.style.transition = 'opacity 0.5s linear'
    btnleft.style.transition = 'opacity 0.5s linear';
    btnright.style.opacity = '1';
}

btnright.addEventListener('click', () => {
    castle.style.transition = 'transform 0.5s linear';
    castle.style.transform = 'translateX(-300px)';
    burnella.style.transition = 'transform 0.5s linear';
    burnella.style.transform = 'translateX(-300px)';
    btnleft.style.opacity = '1';
    btnright.style.opacity = '0';
});

btnleft.addEventListener('click', () => {
    castle.style.transition = 'transform 0.5s linear';
    castle.style.transform = 'translateX(0px)';
    burnella.style.transition = 'transform 0.5s linear';
    burnella.style.transform = 'translateX(0px)';
    btnleft.style.opacity = '0';
    btnright.style.opacity = '1';
});


/* image preload */
var images = [
    'images/bg.png',
    'images/btnleft.png',
    'images/btnright.png',
    'images/burnella.png',
    'images/buttonborder.png',
    'images/castle.png',
    'images/idsale.png',
    'images/line.png',
    'images/savebigonoutdoor.png',
    'images/savingforall.png',
    'images/shopnow.png',
];
loadedImage = 0;

function preload() {
    for (var i = 0; i < images.length; i++) {
        imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false)
    }
}

function iLoad(){
    loadedImage++;
    if (images.length == loadedImage){
        banner.style.backgroundImage = "url('images/bg.png')";
        setTimeout(startFirstAnimation, 500);
    }
}

preload();