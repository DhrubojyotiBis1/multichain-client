'use strict';

//const config = require("./config.json")

let multichain = require("multichain-node")({
    port: 6281,
    host: '120.0.0.1',
    user: "test",
    pass: "test"
});

class Bench {

    async getInfo() {
        let returnValue = await multichain.getInfo().catch(err => {return Promise.reject(err)});
        return Promise.resolve(returnValue)
    };

    async sendAssets(to)  {
        let returnValue = multichain.sendAsset({
        address: to,
        asset: "barcoin",
                    qty: 50 
        }).catch(err => {return Promise.reject(err)});
        console.log(returnValue);
        //return Promise.resolve()
    };

}

module.exports = Bench;
