
'use strict';

const allProudct = [

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
  'piano.webp',
]
// console.log(allProudct);

const proudctDOM = [
  document.getElementById('proudctSection'),
  document.getElementById('liftProudct'), 
  document.getElementById('middelProudct'), 
  document.getElementById('rightProudct'), 
];

// console.table(proudctDOM);
// const imgPath = ['jpg', 'webp', 'gif'];
 function catalog(imgName){
    this.name = imgName;
    this.imgPath= `./img/${imgName}`
    this.seen = 0;
    this.voits=0;
    catalog.full.push(this);
 }
    catalog.full=[];

    for (let i = 0; i< allProudct.length; i++){
         new catalog(allProudct[i]);
    }

    function render(){
      console.log(catalog.full);

     const proudctInTheLift= randomNumber (0,catalog.full.length-1);
     const leftProudctCatalog=catalog.full[proudctInTheLift];
     proudctDOM[1].src = leftProudctCatalog.imgPath;
     proudctDOM[1].alt = leftProudctCatalog.imgName;
     proudctDOM[1].title = leftProudctCatalog.imgName;

     console.log(proudctInTheLift);

     const proudctInTheMiddle = randomNumber (0,catalog.full.length-1);
     const middleProudctCatalog = catalog.full[proudctInTheMiddle];
     proudctDOM[2].src = middleProudctCatalog.imgPath;
     proudctDOM[2].alt = middleProudctCatalog.imgName;
     proudctDOM[2].title = middleProudctCatalog.imgName;

     const proudctInTheRight= randomNumber (0,catalog.full.length-1);
     const rightProudctCatalog = catalog.full[proudctInTheRight];
     proudctDOM[3].src =  rightProudctCatalog.imgPath;
     proudctDOM[3].alt =  rightProudctCatalog.imgName;
     proudctDOM[3].title =  rightProudctCatalog.imgName;

    }
    render();

    proudctDOM[0].addEventListener('click', checkClick);

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
