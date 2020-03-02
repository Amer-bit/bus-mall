'use strict'


var imgGallary = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg','breakfast.jpg', 'bubblegum.jpg',
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






////////////////GRABBED IMAGES FROM HTML FILE/////////////////////

var product = document.querySelector('#productimg');
var leftProduct = document.querySelector('#leftimage');
var centerProduct = document.querySelector('#centerimage');
var rightProduct = document.querySelector('#rightimage');

/////////////////////testing//////////////////////////////

// leftimage.src = `img/${imgGallary[0]}`;
// leftimage.alt = imgGallary[0];
// leftimage.title = imgGallary[0];


//////////////Creating my objects using imgGallary array\\\\\\\\\


for (var i = 0; i < imgGallary.length ; i++){

     new Bus_mall(imgGallary[i])    
}

//console.log(Bus_mall.imgArray);




///////////create randomized images and render them

var leftRandom , centerRandom , rightRandom;


function randomized (){
    leftRandom = Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length-1)];
    // console.log(leftRandom);
    // console.log(imgGallary.length);
    
    centerRandom =Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length-1)];
   // console.log(centerRandom);
    
    rightRandom = Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length-1)];
    //console.log(rightRandom);

    leftProduct.src=leftRandom.imgPath;    ///this method
    centerimage.setAttribute('src',centerRandom.imgPath);   // or this one
    rightimage.setAttribute('src' , rightRandom.imgPath);


    while ((leftRandom === centerRandom) || (leftRandom === rightRandom) || (rightRandom === centerRandom)){
       // console.log(leftRandom,rightRandom,centerRandom);
        
        randomized();
    
        }
        
}
randomized();

// while loop to forbid similar images from showing



//Render new images while counting the views and clicks

var votingRound = 25

product.addEventListener('click',newimages)
var totalClicks = 0;

function newimages(event){
    if (totalClicks < votingRound){
        if (event.target.id !== 'productimg'){

            if (event.target.id === 'leftimage'){
                leftRandom.clicks++;
            }
            
            else if (event.target.id === 'centerimage'){
                centerRandom.click++;
            }
            
            else if  (event.target.id === 'rightimage'){
                rightRandom.clicks++;
                console.log(rightRandom.clicks++);
                
            }
            
            leftRandom.views++;
            centerRandom.views++;
            rightRandom.views++;
            totalClicks++
            randomized();

        }
    
    } else {
        //console.log(Bus_mall.imgArray.length);
        console.log('more than 5 clicks');
        product.removeEventListener('click' , newimages);
        results();
    }
}




function results(){

     var ul1 = document.getElementById('resultsareshownhere')
    
    for(var list = 0; list < Bus_mall.imgArray.length; list++){
      //  console.log(list);
        
        var li = document.createElement('li');
        ul1.appendChild(li);
        li.textContent = `The ${Bus_mall.imgArray[list].name.split('.',1)} image has ${Bus_mall.imgArray[list].clicks} Clicks and it has ${Bus_mall.imgArray[list].views} views `
       // console.log(li);
        
    }
}











function getRandomNumber(min, max) {                        //Helper function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}