/* This script seeds the db with testData data for the Image Gallery API */

let db = require('./db/index.js');
let testData = require('./server/testJson.js');

/* seed a number of cats */
let NUM_CATS = 100;
for(let i = 0; i < NUM_CATS; i++) {
  db.createProductRecord(testData.giveMeCats('testData' + i) ,(err, result) => {
    if(err) { 
      console.log('ERROR there are likely duplicate entries'); 
    } else {
      console.log('creating product testData' + i);
    }
  })
}

/* seed some animals */
db.createProductRecord(testData.giveMeCats('cats') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product cats');
  }
})

db.createProductRecord(testData.giveMeDogs('dogs') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product dogs');
  }
})

/* seed actual products */
db.createProductRecord(testData.giveMeFlashlight('flashlight') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product flashlight');
  }
})

db.createProductRecord(testData.giveMeHeadphones('headphones') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product headphones');
  }
})

db.createProductRecord(testData.giveMeSeki('seki-kit') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product seki-kit');
  }
})

db.createProductRecord(testData.giveMeKeyboard('keyboard') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product keyboard');
  }
})

db.createProductRecord(testData.giveMeWatches('watch') ,(err, result) => {
  if(err) { 
    console.log('ERROR there are likely duplicate entries'); 
  } else {
    console.log('creating product watch');
  }
})

/* A hack, change to Promise.all please */
setTimeout(process.exit, 1000)