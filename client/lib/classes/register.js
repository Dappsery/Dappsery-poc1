account = (function () {

    function registerAccount(insertObject, callback)
    {
        if (insertObject.password.length < 10) {
            callback('Your password must be at least 10 characters long and contain upper and lowercase letters, numbers and special characters.');
        } else {
            if (AccountDB.find({username:insertObject.username}).count() === 0) {
                AccountDB.insert({
                    username: insertObject.username,
                    password: web3.sha3(insertObject.password),
                    accountType: insertObject.memberType,
                    website: insertObject.website,
                    logo: insertObject.logo,
                    category: insertObject.category
                }, callback);
            } else {
                callback('The selected username is an invalid username or it\'s already in use.');
            }
        }
    }

    /* PRIVATES */

    return {
        registerAccount:registerAccount
    };

})();
