'use strict';
  
const Bench = require("./multichain_warpper.js");
const bench = new Bench();

async function test(){

console.log("blockchain: ")
    console.log(" ")
    await bench.getInfo();
   //:await bench.sendAssets("1aiznfgqUwcaZdTzV9GRtz2DbE16F8os3QMHXT") 
    console.log(" ")
}

test()