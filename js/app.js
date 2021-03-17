
'use strict';

const proudctDOM = [
  document.getElementById('Proudct On The Lift'), 
  document.getElementById('Proudct On The Middle'), 
  document.getElementById('Proudct On The Right') 
];
const reset = document.getElementById('reset-button'); 


let  counter = 25; 

let proudctNames = []; 
let proudctSeen = []; 
let proudctSelected = []; 

let Catalog = function (photoName, photoExtent) {
  this.name = photoName; 
  this.imgPath = './img/' + photoName + '.' + photoExtent; 
  this.valid = true; 
  this.timesShowings = 0; 
  this.timesClicked = 0; 
}

const allProudct = []; 
allProudct.push(
  new Catalog('bag', 'jpg'), 
  new Catalog('banana', 'jpg'), 
  new Catalog('bathroom', 'jpg'), 
  new Catalog('boots', 'jpg'), 
  new Catalog('breakfast', 'jpg'), 
  new Catalog('bubblegum', 'jpg'), 
  new Catalog('chair', 'jpg'), 
  new Catalog('cthulhu', 'jpg'), 
  new Catalog('dog-duck', 'jpg'), 
  new Catalog('dragon', 'jpg'), 
  new Catalog('pen', 'jpg'), 
  new Catalog('pet-sweep', 'jpg'), 
  new Catalog('scissors', 'jpg'), 
  new Catalog('shark', 'jpg'), 
  new Catalog('sweep', 'png'), 
  new Catalog('tauntaun', 'jpg'), 
  new Catalog('unicorn', 'jpg'), 
  new Catalog('usb', 'gif'), 
  new Catalog('water-can', 'jpg'), 
  new Catalog('wine-glass', 'jpg') 
);

Catalog.prototype.convertToImgTag = function () { 
  return '<img id="' + this.name + '" src="' + this.imgPath + '" >' 
} 



const randomList = function () { 
  return Math.floor(Math.random() * allProudct.length); 
}

const previousPhoto = [1, 2, 3]; 
const currentPhoto = [4, 5, 6]; 

const newImages = function () { 
  for (let x = 0; x < proudctDOM.length; x++){ 
    proudctATList(previousPhoto[j]).valid = true; 
    previousPhoto[x] = currentPhoto[j]; 
    while (proudctATList(currentPhoto[j]).valid === false) { 
    currentPhoto[x] = randomList(); 
    }
    proudctATList(currentPhoto[x]).valid = false; 
  } 
} 


let proudctATList = function (list) { 
  return allProudc[list]; 
} 

const proudctUpToDate = function () { 
  for (let y = 0; y < proudctDOM.length; y++) { 
    proudctDOM[y].innerHTML = ''; 
    proudctDOM[y].innerHTML = proudctATList(currentPhoto[y]).convertToImgTag(); 
  } 
} 

const updateSeen = function () {
  for (let i = 0; i < 3; i++) { 
    proudctATList(currentPhoto[i]).timesShowings++; 
    proudctATList(currentPhoto[i]).valid = false; 
  } 
} 



let refresh = function () { 
  updateSeen(); 
  newImages();
  randomList();
} 

console.log(refresh);

//lab12 Chart

function renderChart() {
  let canvasEl = document.createElement('canvas');
  canvasEl.setAttribute = ('id', 'productChart');
  chartContainer.style.width = '500px';
  chartContainer.style.height = '500px';
  chartContainer.appendChild(canvasEl);

  let buttonEl = document.createElement('a');
  buttonEl.textContent = 'Chart';
  buttonEl.setAttribute('class', 'btn');
  buttonEl.href = '#chartContainer';
  buttonLinks.appendChild(buttonEl);

  let ctx = canvasEl.getContext('2d');
  let votes = [];
  let names = [];
  for(let i = 0; i < Catalog.allProudct; i++) {
    votes[i] = Catalog.allProudct[i].timesClicked;
    names[i] = Catalog.allProudct[i].name;
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        data: votes,
        label: 'Votes',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Votes Per Product',
        fontSize: 50
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  });
}

