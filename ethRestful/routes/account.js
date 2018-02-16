var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8570'));


/* GET users listing. */
router.get('/:account', function(req, res, next) {
  var a = req.params.account;
  web3.eth.getBalance(a,function(error,result){
  	res.json({error:error,data:result});
  });
});

module.exports = router;
