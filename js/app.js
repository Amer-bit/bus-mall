var imgGallary =['bag', 'banana', 'boots','breakfast', 'bubblegum',
 'chair', 'cthulhu', 'dog-duck', 'pen', 'dragon', 'pet-sweep',
 'scissors', 'shark','sweep', 'tauntaun', 'unicorn',
  'usb', 'water-can', 'wine-glass'];
   Bus_mall.imgArray = []

function Bus_mall(productName) {

    this.name = productName;
    this.imgPath = `img/${this.name}.jpg`;
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
    leftRandom = Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length)];
    console.log(leftRandom);
    console.log(imgGallary.length);
    
    centerRandom =Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length)];
    console.log(centerRandom);
    
    rightRandom = Bus_mall.imgArray[getRandomNumber(0 , imgGallary.length)];
    console.log(rightRandom);

    leftimage.setAttribute('src',leftRandom.imgPath)
    
    centerimage.setAttribute('src',centerRandom.imgPath)

    
}

randomized();
















function getRandomNumber(min, max) {                        //Helper function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}