
'use strict';


const allProudct = [
  'ball', 'jpg',
  'basketball', 'gif',
  'chessA', 'jpeg',
  'chessb', 'jpg',
  'football', 'jpg',
  'g-class', 'webp',
  'handball', 'jpg',
  'iphone_11', 'gif',
  'iphone', 'jpg',
  'new-product', 'jpg',
  'pianoA', 'jpg',
  'realmadrid', 'jpg',
  'rulex-az-stowe', 'jpg',
  'rulexblack', 'jpg',
  'shose', 'jpg',
  'sun-class', 'jpg',
  'sunclass', 'jpg',
  'Versace-dylanblue', 'jpg',
  'Versace-eros', 'jpg',
  'piano', 'webp',
]
// console.log(allProudct);

const proudctDOM = [
  document.getElementById('proudctSection'),
  document.getElementById('liftProudct'), 
  document.getElementById('middelProudct'), 
  document.getElementById('rightProudct'), 
];

// console.table(proudctDOM);
const imgPath = ['jpg', 'webp', 'gif'];
 function catalog(imgName,imgPath){
    this.name = imgName;
    this.imgPath= `/img/${imgName}${imgPath}`
    this.seen = 0;
    this.voits=0;
    catalog.full.push(this);
 }
    catalog.full=[];

    for (let i = 0; i< allProudct.length; i++){
         new catalog(allProudct[i]);
    }

    function render(){

     const proudctInTheLift= randomNumber (0,catalog.full.length-1);
     const leftProudctCatalog=catalog.full[proudctInTheLift];
     liftProudct.src = leftProudctCatalog.imgPath;
     liftProudct.alt = leftProudctCatalog.imgName;
     liftProudct.title = leftProudctCatalog.imgName;

    //  console.log(liftProudct);

     const proudctInTheMiddle = randomNumber (0,catalog.full.length-1);
     const middleProudctCatalog = catalog.full[proudctInTheMiddle];
     middelProudct.src = middleProudctCatalog.imgPath;
     middelProudct.alt = middleProudctCatalog.imgName;
     middelProudct.title = middleProudctCatalog.imgName;

     const proudctInTheLift= randomNumber (0,catalog.full.length-1);
     const leftProudctCatalog = catalog.full[proudctInTheLift];
     rightProudct.src = leftProudctCatalog.imgPath;
     rightProudct.alt = leftProudctCatalog.imgName;
     rightProudctt.title = leftProudctCatalog.imgName;

    }
    render();

    proudctSection.addEventListener('click', checkClick);

    function checkClick(event){
      if (event.target.id === 'liftProudct' ||event.target.id === 'middelProudct' || event.target.id === 'rightProudct'){
      // if (event.target.id !== 'proudctSection'){
        for (let i = 0; i < catalog.full.length; i++);
        if (catalog.full[i] === event.target.title );{
          catalog.full[i].seen++
          catalog.full[i].voits++
        }
      }

      render();
    }


    function randomNumber(min, max) {
      
     return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render();





  
    
    
// let Catalog = function (photoName, photoExtent) {
//   this.name = photoName; 
//   this.imgPath = `/img` + photoName + '.' + photoExtent; 
//   // this.valid = true; 
//   this.timesShowings = 0; 
//   this.timesClicked = 0; 
// }




// Catalog.prototype.convertToImgTag = function () { 
//   return '<img id="' + this.name + '" src="' + this.imgPath + '" >' 
// } 




// const previousPhoto = [1, 2, 3]; 
// const currentPhoto = [4, 5, 6]; 

// const newImages = function () { 
//   for (let x = 0; x < proudctDOM.length; x++){ 
//     proudctATList(previousPhoto[j]).valid = true; 
//     previousPhoto[x] = currentPhoto[j]; 
//     while (proudctATList(currentPhoto[j]).valid === false) { 
//     currentPhoto[x] = randomList(); 
//     }
//     proudctATList(currentPhoto[x]).valid = false; 
//   } 
// } 


// let proudctATList = function (list) { 
//   return allProudc[list]; 
// } 

// const proudctUpToDate = function () { 
//   for (let y = 0; y < proudctDOM.length; y++) { 
//     proudctDOM[y].innerHTML = ''; 
//     proudctDOM[y].innerHTML = proudctATList(currentPhoto[y]).convertToImgTag(); 
//   } 
// } 

// const updateSeen = function () {
//   for (let i = 0; i < 3; i++) { 
//     proudctATList(currentPhoto[i]).timesShowings++; 
//     proudctATList(currentPhoto[i]).valid = false; 
//   } 
// } 



// let refresh = function () { 
//   updateSeen(); 
//   newImages();
//   randomList();
// } 

// console.log(refresh);

