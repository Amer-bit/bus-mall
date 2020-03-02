'use strict'


var imgGallary =['bag.jpg', 'banana.jpg', 'boots.jpg','breakfast.jpg', 'bubblegum.jpg',
 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'pen.jpg', 'dragon.jpg', 'pet-sweep.jpg',
 'scissors.jpg', 'shark.jpg','sweep.png', 'tauntaun.jpg', 'unicorn.jpg',
  'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
   Bus_mall.imgArray = []

function Bus_mall(productName) {

    this.name = productName;
    this.imgPath = `img/${this.name}`;
    this.clicks = 0;
    this.views = 0;
    Bus_mall.imgArray.push(this);
}






//GRAPPED IMAGES FROM HTML FILE//
var product = document.querySelector('#productimg');
var leftProduct = document.querySelector('#leftimage');
var centerProduct = document.querySelector('#centerimage');
var rightProduct = document.querySelector('#rightimage');

//testing
leftimage.src = `img/${imgGallary[0]}.jpg`;
leftimage.alt = imgGallary[0];
leftimage.title = imgGallary[0];

//



for (var i = 0; i < imgGallary.length ; i++){
    
     new Bus_mall(imgGallary[i])
    
}

console.log(Bus_mall.imgArray);

//create randomized images and render them

function randomized (){
    var leftRandom , centerRandom , rightRandom;
    leftRandom = Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length-1)];
    console.log(leftRandom);
    console.log(imgGallary.length);
    
    centerRandom =Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length)-1];
    console.log(centerRandom);
    
    rightRandom = Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length)-1];
    console.log(rightRandom);

    leftProduct.src=leftRandom.imgPath;
    
    centerimage.setAttribute('src',centerRandom.imgPath);

    rightimage.setAttribute('src' , rightRandom.imgPath);
    
}

randomized();


//Render new images while counting the views and clicks


product.addEventListener('click',newimages)
var totalClicks = 0;

function newimages(event){
    if (totalClicks < 5){
        if (event.target.id !== 'productimg'){

            if (event.target.id === 'leftimage'){}
            
            else if (event.target.id === 'centerimage'){}
            
        else if  (event.target.id === 'rightimage'){}

        randomized();
        totalClicks++

        }
    
    } else {
        console.log('more than 5 clicks');
        removeEventListener('click' , newimages);
    }
}



function results(){
    var rusult = document.getElementById('#results');
    var ul = document.createElement('ul');
    results.appendChild(ul);
    for(var list = 0; list < Bus_mall.imgArray.length; list++){

    }
}











function getRandomNumber(min, max) {                        //Helper function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}