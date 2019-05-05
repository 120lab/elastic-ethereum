var Web3 = require('web3');
web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://40.127.193.147:8546'));

var filter = web3.eth.filter({fromBlock: 4324578, toBlock: 4324578, address: '0x7db549025C204845542430DD5b4A7eF24423629E'});

filter.watch(function(error, result) {

 console.log(result);

});



