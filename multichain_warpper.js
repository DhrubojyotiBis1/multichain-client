'use strict';
  
//const config = require("./config.json")

let multichain = require("multichain-node")({
    port: 6280, //port number at which node is Listening for API request
    host: '127.0.0.1',
    user: "USER", //should be set at the time of starting node by --rpcuser=USER
    pass: "PASSWORD" //should be set at the time of starting node by --rpcpassword=PASSWORD
});

class Bench {

    async getInfo(){
        let returnValue =  await multichain.getInfo().catch(err => {return Promise.reject(err)});
        return Promise.resolve(returnValue)
    }

    async getPeerInfo(){
        let returnValue = await multichain.getPeerInfo().catch(err => {return Promise.reject(err)});
        return Promise.resolve(returnValue)
    }

    async getAddresses(withDetail){
        let returnValue = await multichain.getAddresses(
            {verbose: withDetail}
        ).catch(err => {return Promise.reject(err)});
        return Promise.resolve(returnValue)
    }

    async getBlockchainInfo(){
        let returnValue = await multichain.getBlockchainInfo().catch(err =>{return Promise.reject(err)});
        return Promise.resolve(returnValue)
    }

    async grant(addresses, permissions){
        let permissionsString = permissions.join();
        let addressesString = addresses.join();
        let returnValue = await multichain.grant({
            addresses:addressesString,
            permissions: permissionsString
        }).catch(err =>{return Promise.reject(err)});
        return Promise.resolve(returnValue)
    }

    async issueAsset(name, address, quantity, unit){
        let returnValue = await multichain.issue({
            address: address,
            asset: {
            name: name,
            open: true
            },
            qty: quantity,
            units: unit
        }).catch(err =>{return Promise.reject(err)});
        return Promise.resolve(returnValue)
    }

    async sendAsset(name, address, qty){
        let returnValue = await multichain.sendAsset({
            address: address,
            asset: name,
            qty: qty
        }).catch(err =>{return Promise.reject(err)});
        return Promise.resolve(returnValue)
    }

}

module.exports = Bench;
