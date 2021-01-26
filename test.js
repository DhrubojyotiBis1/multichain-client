'use strict';
  
const Bench = require("./multichain_warpper.js");
const bench = new Bench();

async function test(){

    console.log("STARTING TEST")

    await bench.getInfo()
    .then(returnVal => {
            console.log("getInfo");
        console.log(returnVal);
    })
    console.log("")
    console.log("=======================")
    console.log("")

    await bench.getPeerInfo()
    .then(returnVal => {
        console.log("getPeerInfo");
        console.log(returnVal);
    })
    console.log("")
    console.log("=======================")
    console.log("")

    await bench.getAddresses(false)
    .then(returnVal => {
        console.log("getAddresses");
        console.log(returnVal);
    })
    console.log("")
    console.log("=======================")
    console.log("")

    await bench.getBlockchainInfo()
    .then(returnVal => {
        console.log("getBlockchainInfo");
        console.log(returnVal);
    })
    console.log("")
    console.log("=======================")
    console.log("")

    await bench.grant(["addressToGrantPerssion"],["mine","send","receive","issue","admin"])
    .then(returnVal => {
        console.log("grant");
        console.log(returnVal);
    })
    console.log("")
    console.log("=======================")
    console.log("")

    await bench.issueAsset("nameOfAsset", "addressToIssueAsset", 1000, 0.01)
    .then(returnVal => {
        console.log("issueAssets");
        console.log(returnVal);
    })
    console.log("")
    console.log("=======================")
    console.log("")

    await bench.sendAsset("nameOfAsset", "addressToSendAsset", 150)
    .then(returnVal => {
        console.log("sendAsset");
        console.log(returnVal);
    })
    console.log("")
    console.log("=======================")
    console.log("")

}
        
test()