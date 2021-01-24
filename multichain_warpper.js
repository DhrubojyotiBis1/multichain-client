'use strict';

//const config = require("./config.json")

let multichain = require("multichain-node")({
    port: 6282,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "somepass"
});

class Bench {
    async sendAssets(to)  {
        let returnValue = multichain.send({
            address: to,
            amount: {
                "barcoin": 50
            }
        }).catch(err => {return Promise.reject(err)});
        console.log(returnValue);
        //return Promise.resolve()
    };

}

module.exports = Bench;
