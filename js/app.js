'use strict'


var imgGallary = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',
'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'pen.jpg', 'dragon.jpg', 'pet-sweep.jpg',
'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg',
'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

//array to store all product images instance
Bus_mall.imgArray = [];

var chartData = [];
var chartLabel = [];
var arrayToPreventRepeatingImgaes =[];

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


//////////////Creating my objects using imgGallary array\\\\\\\\\\\\\\\\\


for (var i = 0; i < imgGallary.length; i++) {

    new Bus_mall(imgGallary[i]);
}

//console.log(Bus_mall.imgArray);




/////////////////create randomized images and render them\\\\\\\\\\\\\\\\\\\\\\

var leftRandom, centerRandom, rightRandom;


function randomized() {
    leftRandom = Bus_mall.imgArray[getRandomNumber(0, imgGallary.length - 1)];
    // console.log(leftRandom);
    // console.log(imgGallary.length);

    centerRandom = Bus_mall.imgArray[getRandomNumber(0, imgGallary.length - 1)];
    // console.log(centerRandom);

    rightRandom = Bus_mall.imgArray[getRandomNumber(0, imgGallary.length - 1)];
    //console.log(rightRandom);

    leftProduct.src = leftRandom.imgPath;    ///this method
    centerimage.setAttribute('src', centerRandom.imgPath);   // or this one
    rightimage.setAttribute('src', rightRandom.imgPath);

    ///////////////this loop prevent repeating images and repeating itertions\\\\\\\\\\\\\\\\\\\\\\\\

    while ((leftRandom === centerRandom) || (leftRandom === rightRandom) || (rightRandom === centerRandom) || (arrayToPreventRepeatingImgaes.includes(leftRandom.name))
    || (arrayToPreventRepeatingImgaes.includes(rightRandom.name) ) || (arrayToPreventRepeatingImgaes.includes(centerRandom.name))) {
         console.log(leftRandom,rightRandom,centerRandom,arrayToPreventRepeatingImgaes.includes(rightRandom.name)); 
         /////////////OR WE CAN USE .include()////////////////       

        randomized();
        
    }
    
}
randomized();

// while loop to forbid similar images from showing



//Render new images while counting the views and clicks

var votingRound = 25

product.addEventListener('click', newimages)
var totalClicks = 0;

function newimages(event) {
    arrayToPreventRepeatingImgaes = ['randok',leftRandom.name,centerRandom.name,rightRandom.name]; 
    console.log(arrayToPreventRepeatingImgaes);
    
    if (totalClicks < votingRound) {
        if (event.target.id !== 'productimg') {
            
            if (event.target.id === 'leftimage') {
                leftRandom.clicks++;
            }

            else if (event.target.id === 'centerimage') {
                centerRandom.clicks++;
            }

            else if (event.target.id === 'rightimage') {
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
        product.removeEventListener('click', newimages);
        results();
    }
}


function results() {
    
    var ul1 = document.getElementById('resultsareshownhere')
    
    
    for (var list = 0; list < Bus_mall.imgArray.length; list++) {
        //console.log(list);
        
        
        var li = document.createElement('li');
        
        ul1.appendChild(li);

        li.textContent = `The ${Bus_mall.imgArray[list].name.split('.', 1)} image has ${Bus_mall.imgArray[list].clicks} Clicks and it has ${Bus_mall.imgArray[list].views} views `
       // console.log(li);

        chartLabel.push(Bus_mall.imgArray[list].name.split('.')[0]);
        chartData.push(Bus_mall.imgArray[list].clicks)
        
        
    }
    

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: chartLabel,
        datasets: [{
            label: '# of Votes',
            data: chartData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


}











function getRandomNumber(min, max) {                        //Helper function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}