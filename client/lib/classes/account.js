account = (function () {

    function register (username, password, accountType, callback) {
        if (password.length < 10) {
            callback('Your password must be at least 10 characters long and contain upper and lowercase letters, numbers and special characters.');
        } else {
            if (AccountDB.find({username:username}).count() === 0) {
                AccountDB.insert({
                    username: username,
                    password: web3.sha3(password),
                    accountType: accountType
                }, callback);
            } else {
                callback('The selected username is an invalid username or it\'s already in use.');
            }
        }
    }

    function login (username, password, callback) {
        console.log('login');
        callback();
    }

    function isLoggedIn() {
        return false;
    }

    function logout()
    {
        Meteor.logout();
    }

    return {
        register:register,
        login:login,
        isLoggedIn:isLoggedIn,
        logout:logout
    };

})();
