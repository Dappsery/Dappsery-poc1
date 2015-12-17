var dappseryContract = (function () {
    var abi = '[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registeredUsers","outputs":[{"name":"userType","type":"bytes32"},{"name":"name","type":"bytes32"},{"name":"userAdr","type":"address"},{"name":"uID","type":"uint256"},{"name":"token","type":"bytes32"},{"name":"webUrl","type":"bytes32"},{"name":"logoUrl","type":"bytes32"},{"name":"category","type":"bytes32"},{"name":"isFeatured","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_adr","type":"address"}],"name":"getUser","outputs":[{"name":"uname","type":"bytes32"},{"name":"uType","type":"bytes32"},{"name":"uwebUrl","type":"bytes32"},{"name":"ulogoUrl","type":"bytes32"},{"name":"ucategory","type":"bytes32"},{"name":"ufeauturedStatus","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newUserType","type":"bytes32"},{"name":"_newName","type":"bytes32"},{"name":"_newUserAdr","type":"address"},{"name":"_token","type":"bytes32"},{"name":"_webUrl","type":"bytes32"},{"name":"_logoUrl","type":"bytes32"},{"name":"_category","type":"bytes32"}],"name":"regPublisher","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"userCategories","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_adr","type":"address"},{"name":"_token","type":"bytes32"},{"name":"_userType","type":"bytes32"},{"name":"_name","type":"bytes32"},{"name":"_userAdr","type":"address"},{"name":"_webUrl","type":"bytes32"},{"name":"_logoUrl","type":"bytes32"},{"name":"_category","type":"bytes32"}],"name":"updateProfile","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"userIndex","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"listAd","outputs":[{"name":"message","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"featuredUsers","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_UId","type":"uint256"},{"indexed":false,"name":"_userType","type":"bytes32"},{"indexed":false,"name":"_date","type":"uint256"},{"indexed":false,"name":"_blockNumber","type":"uint256"}],"name":"UserIndex","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_UId","type":"uint256"},{"indexed":false,"name":"_catType","type":"bytes32"},{"indexed":false,"name":"_date","type":"uint256"}],"name":"Category","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_UId","type":"uint256"},{"indexed":false,"name":"_catType","type":"bytes32"},{"indexed":false,"name":"_date","type":"uint256"}],"name":"Featured","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_adId","type":"uint256"},{"indexed":false,"name":"_UId","type":"uint256"},{"indexed":false,"name":"_date","type":"uint256"}],"name":"AdIndex","type":"event"},{"anonymous":false,"inputs":[],"name":"PublisherIndex","type":"event"},{"anonymous":false,"inputs":[],"name":"AdvertiserIndex","type":"event"},{"anonymous":false,"inputs":[],"name":"QaIndex","type":"event"}]';
    var contractAddress = "0xbf6b04fedba1306773490cf5204d3bbcaafd3e52";
    var instance = null;

    function registerPublisher(business, username, token, webUrl, logoUrl, category, callback) {
        makeInstance();
        instance.regPublisher('publisher', business, "0x7da845c56a9e9d17d794e7a2f3c938f787bb584a", category, webUrl, logoUrl, username, token, callback);
    }

    function getUser(address, callback) {
        makeInstance();
        instance.getUser(address, callback)
    }

    /**
     * PRIVATES
     */
    function makeInstance() {
        if (instance == null) {
            var contractClass = web3.eth.contract(JSON.parse(abi));
            instance = contractClass.at(contractAddress);
            instance.allEvents(eventLog);console.log(instance);
        }
    }

    function eventLog(error, log) {
        console.log(error, log);
    }

    return {
        registerPublisher:registerPublisher,
        getUser:getUser
    };
})();