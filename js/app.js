'use strict';


const allProducts = [];


function Product(name) {
  this.name = name;
  this.path = `img/${name}`;
  this.timesClicked = 0;
  this.timesDisplayed = 0; 
}


const UiController = {};


UiController.NUMBER_OF_PRODUCTS_TO_DISPLAY = 3;


UiController.ulEl = document.getElementById('product-images');
UiController.spanEl = document.getElementById('votes');
UiController.graphOfProductVoteCounts = document.getElementById('graph-content');
UiController.previousProductsShown = [];
UiController.currentProductsShown = [];
UiController.productsVoteCounts = [];
UiController.MAX_VOTES = 25;
UiController.productNames = [
  'ball.jpg',
'basketball.gif',
'chessA.jpeg',
'chessb.jpg',
'football.jpg',
'g-class.webp',
'handball.jpg',
'iphone_11.gif',
'iphone.jpg',
'new-product.jpg',
'pianoA.jpg',
'realmadrid.jpg',
'rulex-az-stowe.jpg',
'rulexblack.jpg',
'shose.jpg',
'sun-class.jpg',
'sunclass.jpg',
'Versace-dylanblue.jpg',
'Versace-eros.jpg',
'piano.webp',];


UiController.getUniqueRandomNumbers = function() {
  const randomNumer;
  UiController.previousProductsShown = UiController.currentProductsShown;
  UiController.currentProductsShown = [];


  while (UiController.currentProductsShown.length < UiController.NUMBER_OF_PRODUCTS_TO_DISPLAY) {
    randomNumer = getRandomNumber();
    if (UiController.currentProductsShown.indexOf(randomNumer) === -1 &&
    UiController.previousProductsShown.indexOf(randomNumer) === -1) {
      UiController.currentProductsShown.push(randomNumer);
    }
  }
};


UiController.renderProducts = function() {
  UiController.getUniqueRandomNumbers();
  UiController.ulEl.innerHTML = '';

  const LI = 'li';
  const FIGURE = 'figure';
  const IMG = 'img';
  const FIGCAPTION = 'figcaption';

  for (const i = 0; i < UiController.NUMBER_OF_PRODUCTS_TO_DISPLAY; i++) {
    const ilEl = document.createElement(LI);
    const figureEl = document.createElement(FIGURE);
    const imgEl = document.createElement(IMG);
    imgEl.src = allProducts[UiController.currentProductsShown[i]].path;
    imgEl.alt = allProducts[UiController.currentProductsShown[i]].name;
    const figCaptionEl = document.createElement(FIGCAPTION);
    figCaptionEl.textContent = allProducts[UiController.currentProductsShown[i]].name;

    UiController.ulEl.appendChild(ilEl);
    ilEl.appendChild(figureEl);
    figureEl.appendChild(imgEl);
    figureEl.appendChild(figCaptionEl);

    allProducts[UiController.currentProductsShown[i]].timesDisplayed++;
  }
};


UiController.clickedOn = function(event) {
  const elementClickedOn = event.target.textContent;
  if (!elementClickedOn) {
    elementClickedOn = event.target.alt;
  }

  
  const objectToUpdate = allProducts.filter(function(object) {
    return object.name === elementClickedOn;
  });

  objectToUpdate[0].timesClicked++;

  UiController.updateTimesClickedToLocalStorage();
  UiController.checkIfFinishedVoting();
};


UiController.gatherProductsVoteCounts = function() {
  UiController.productsVoteCounts = [];
  allProducts.forEach(function(product) {
    UiController.productsVoteCounts.push(product.timesClicked);
  });
};


UiController.changeElementStyles = function() {
  const instructionPEl = document.getElementById('instructions-to-user');
  const resultsPEl = document.getElementById('results-graph-label');

  UiController.graphOfProductVoteCounts.style.display = 'block';
  instructionPEl.style.display = 'none';
  resultsPEl.style.display = 'block';
};


UiController.updateTimesClickedToLocalStorage = function() {
  UiController.gatherProductsVoteCounts();
  localStorage.setItem('voteCounts', JSON.stringify(UiController.productsVoteCounts));
};


UiController.updateVoteCountsWithLocalStorage = function() {
  const storedProductVoteCounts =  JSON.parse(localStorage.getItem('voteCounts'));
  if (storedProductVoteCounts !== null && storedProductVoteCounts.length > 0) {
    for (const i = 0; i < allProducts.length; i++) {
      allProducts[i].timesClicked = storedProductVoteCounts[i];
    }
  }
};



UiController.checkIfFinishedVoting = function() {
  const totalUserClicks = UiController.productsVoteCounts.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });

  if (totalUserClicks === UiController.MAX_VOTES) {
    UiController.ulEl.removeEventListener('click', UiController.clickedOn);
    UiController.ulEl.innerHTML = '';
    
    UiController.changeElementStyles();
    drawGraphOfProductsVoteCounts();
    UiController.productsVoteCounts = [];
    localStorage.setItem('voteCounts', JSON.stringify(UiController.productsVoteCounts));
  } else {
    UiController.renderProducts();
  }
};


const getRandomNumber = function() {
  return Math.floor(Math.random() * UiController.productNames.length);
};


(function() {
  
  UiController.productNames.forEach(function(product) {
    allProducts.push(new Product(product));
  });

  UiController.spanEl.textContent = UiController.MAX_VOTES;

  
  UiController.ulEl.addEventListener('click', UiController.clickedOn);

  UiController.renderProducts();
  UiController.updateVoteCountsWithLocalStorage();
})();


const drawGraphOfProductsVoteCounts = function() {
  const TWO_D = '2d';
  const red = 'rgba(255, 99, 132, 0.2)';
  const blue = 'rgba(54, 162, 235, 0.2)';
  const yellow = 'rgba(255, 206, 86, 0.2)';
  const green = 'rgba(75, 192, 192, 0.2)';
  const purple = 'rgba(153, 102, 255, 0.2)';
  const redBorder = 'rgba(255, 99, 132, 1)';
  const blueBorder = 'rgba(54, 162, 235, 1)';
  const yellowBorder = 'rgba(255, 206, 86, 1)';
  const greenBorder = 'rgba(75, 192, 192, 1)';
  const purpleBorder = 'rgba(153, 102, 255, 1)';

  const context = UiController.graphOfProductVoteCounts.getContext(TWO_D);

  new Chart(context, { 
    type: 'bar',
    data: {
      labels: UiController.productNames,
      responsive: true,
      datasets: [{
        label: 'Number of Votes',
        data: UiController.productsVoteCounts,
        backgroundColor: [
          red,
          blue,
          yellow,
          green,
          purple,
          red,
          blue,
          yellow,
          green,
          purple,
          red,
          blue,
          yellow,
          green,
          purple,
          red,
          blue,
          yellow,
          green,
          purple,
        ],
        borderColor: [
          redBorder,
          blueBorder,
          yellowBorder,
          greenBorder,
          purpleBorder,
          redBorder,
          blueBorder,
          yellowBorder,
          greenBorder,
          purpleBorder,
          redBorder,
          blueBorder,
          yellowBorder,
          greenBorder,
          purpleBorder,
          redBorder,
          blueBorder,
          yellowBorder,
          greenBorder,
          purpleBorder,
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            beginAtZero:true
          }
        }]
      }
    }
  });
};