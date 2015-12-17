/**
//abi interface
[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registeredUsers","outputs":[{"name":"userType","type":"bytes32"},{"name":"pubName","type":"bytes32"},{"name":"userAdr","type":"address"},{"name":"category","type":"bytes32"},{"name":"websiteUrl","type":"bytes32"},{"name":"logoUrl","type":"bytes32"},{"name":"uID","type":"uint256"},{"name":"token","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"newUserType","type":"bytes32"},{"name":"newPubName","type":"bytes32"},{"name":"newUserAdr","type":"address"},{"name":"newCategory","type":"bytes32"},{"name":"newWebUrl","type":"bytes32"},{"name":"newLogoUrl","type":"bytes32"},{"name":"newID","type":"uint256"},{"name":"newToken","type":"bytes32"}],"name":"regPublisher","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"token","type":"bytes32"},{"name":"addr","type":"address"}],"name":"login","outputs":[{"name":"user","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_userNum","type":"uint256"},{"indexed":true,"name":"_userAddr","type":"address"},{"indexed":true,"name":"_userType","type":"bytes32"}],"name":"RegisterAlert","type":"event"}]






//byte code
6060604052610255806100126000396000f3606060405260e060020a60003504630e50cee581146100315780633b8149a4146100855780638f02487714610173575b005b6101ef6004356001602081905260009182526040909120600781015460028201548254938301546003840154600485015460058601546006909601549295600160a060020a03949094169491939092909188565b61022060043560243560443560643560843560a43560c43560e435600160a060020a03868116600081815260016020526040812060020154909283928a929091161461023d5760409091206002810180548c835560018381018d905573ffffffffffffffffffffffffffffffffffffffff19909116909317815560038201899055600482018890556005820187905560068201869055606085815260208120600784015584549093018085558254915492938b93600160a060020a031691907fd33f5a1df2d7dde321790ad6c833dc93db4f988df259bdd5a4a11d2f9c6915af908790a4600192505061023f565b61022a600435602435600160a060020a038116600090815260016020908152604082206007015460608581529190912084918491141561024c576001600050600085600160a060020a0316815260200190815260200160002060005060020160009054906101000a9004600160a060020a03169250505061024f565b606097885260809690965260a09490945260c09290925260e052610100908152610120919091526101409190915290f35b6060908152602090f35b600160a060020a03166060908152602090f35b505b5098975050505050505050565b50505b9291505056



//Deploy in web3

var dappserytestContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registeredUsers","outputs":[{"name":"userType","type":"bytes32"},{"name":"pubName","type":"bytes32"},{"name":"userAdr","type":"address"},{"name":"category","type":"bytes32"},{"name":"websiteUrl","type":"bytes32"},{"name":"logoUrl","type":"bytes32"},{"name":"uID","type":"uint256"},{"name":"token","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"newUserType","type":"bytes32"},{"name":"newPubName","type":"bytes32"},{"name":"newUserAdr","type":"address"},{"name":"newCategory","type":"bytes32"},{"name":"newWebUrl","type":"bytes32"},{"name":"newLogoUrl","type":"bytes32"},{"name":"newID","type":"uint256"},{"name":"newToken","type":"bytes32"}],"name":"regPublisher","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"token","type":"bytes32"},{"name":"addr","type":"address"}],"name":"login","outputs":[{"name":"user","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_userNum","type":"uint256"},{"indexed":true,"name":"_userAddr","type":"address"},{"indexed":true,"name":"_userType","type":"bytes32"}],"name":"RegisterAlert","type":"event"}]);
var dappserytest = dappserytestContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '6060604052610255806100126000396000f3606060405260e060020a60003504630e50cee581146100315780633b8149a4146100855780638f02487714610173575b005b6101ef6004356001602081905260009182526040909120600781015460028201548254938301546003840154600485015460058601546006909601549295600160a060020a03949094169491939092909188565b61022060043560243560443560643560843560a43560c43560e435600160a060020a03868116600081815260016020526040812060020154909283928a929091161461023d5760409091206002810180548c835560018381018d905573ffffffffffffffffffffffffffffffffffffffff19909116909317815560038201899055600482018890556005820187905560068201869055606085815260208120600784015584549093018085558254915492938b93600160a060020a031691907fd33f5a1df2d7dde321790ad6c833dc93db4f988df259bdd5a4a11d2f9c6915af908790a4600192505061023f565b61022a600435602435600160a060020a038116600090815260016020908152604082206007015460608581529190912084918491141561024c576001600050600085600160a060020a0316815260200190815260200160002060005060020160009054906101000a9004600160a060020a03169250505061024f565b606097885260809690965260a09490945260c09290925260e052610100908152610120919091526101409190915290f35b6060908152602090f35b600160a060020a03166060908152602090f35b505b5098975050505050505050565b50505b9291505056', 
     gas: 3000000
   }, function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 });



//Use filtering, batching and calls to 

*/
/* ie filters depending on the addresses you get on your private testnet, use filter options to get the indexed contract */
/*
var options = {from:'', to:'', address:'', topics:['_userNum', '_userAddr', '_userType']};


 web3.eth.filter(options, function(error, result){
  if (!error)
    console.log(result);
     var firstUserAddress = result.address;
     firstUserid = result._userNum;
});

/// then hypotetically speacking, you can iterate over list of uid in a for loop while making filter calls then actuall contract "calls" to get user object details...Still rough but working on it....
*/