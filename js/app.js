var imgGallary =['bag', 'banana', 'boots','breakfast', 'bubblegum',
 'chair', 'cthulhu', 'dog-duck', 'pen', 'dragon', 'pet-sweep',
 'scissors', 'shark','sweep', 'tauntaun', 'unicorn',
  'usb', 'water-can', 'wine-glass',
   'wireframe'];

function Bus_mall(productName, imgPath, click, views) {

    this.imgGallary = productName;
    this.imgPath = `img/${this.imgGallary}.jpg`;
    this.clicks = 0;
    this.views = 0;
    Bus_mall.imgGallary.push(this);
}






//GRAPPED IMAGES FROM HTML FILE//
var product = document.querySelector('#productimg');
var leftProduct = document.querySelector('#leftimage');
var centerProduct = document.querySelector('#centerimage');
var rightProduct = document.querySelector('#rightimage');


leftimage.src = `img/${imgGallary[0]}.jpg`;
leftimage.alt = imgGallary[0];
leftimage.title = imgGallary[0];







// product.addEventListener('click', function (event) {
//     var generateRandom = 
    
// })





// var productImages = new Bus_mall{}





















function getRandomNumber(min, max) {                        //Helper function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}