//import { config } from 'requirejs';

//config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
  //  nodeRequire: require
//});

import Compress from "/node_modules/compress.js";
const compress = new Compress();
compress
  .attach("#upload", {
    size: 4,
    quality: 0.75
  })
  .then((data) => {
    console.log(data);
  });con