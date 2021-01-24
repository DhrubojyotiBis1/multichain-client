'use strict';

const Bench = require("./multichain_warpper.js");
const bench = new Bench();

async function test(){

    console.log("blockchain: ")
    console.log(" ")
    await bench.sendAssets('sdhgjdsksfs') 
    console.log(" ")
}

test()