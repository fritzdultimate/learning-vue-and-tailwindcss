const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

module.exports.test = function ( ){
// Get path to image directory
// const imageDirPath = resolve(__dirname);

// Get an array of the files inside the folder
// const files = readdirSync(imageDirPath);

console.log('files');

// Loop through each file that was retrieved
// files.forEach(file => rename(
//   imageDirPath + `/${file}`,
//   imageDirPath + `/${file.toLowerCase()}`,
//   err => console.log(err)
// ));
}