let multichain = require("multichain-node")({
    port: 6281,
    host: '120.0.0.1',
    user: "test",
    pass: "test"
});

let listenForConfirmations = (txid) => {
    console.log("WAITING FOR CONFIRMATIONS")

    return new Promise((resolve, reject) => {
        var interval = setInterval(() => {
            
            getConfirmations(txid)
            .then(confirmations => {
                if(confirmations > 0){
                    clearInterval(interval);
                    return resolve()
                }
            })
            .catch(err => {
                return reject(err);
            })

        }, 5000)
    })
}

let getConfirmations = (txid) => {
    return multichain.getWalletTransaction({
        txid: txid
    })
    .then(res => {
        return res.confirmations;
    })
}

function getInfo() {
    console.log("TEST: GET INFO")
    multichain.getInfo((err, res) => {
        assert(res, "Could not get info");
    })
}


let startTests = () => {
    console.log("STARTING TEST")
    getInfo();
    console.log(" ")
}

startTests()