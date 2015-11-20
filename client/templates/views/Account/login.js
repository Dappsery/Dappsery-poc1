if (Meteor.isClient) {
	
	Template.login.events({
		'click #submit-login': function (e) {
			e.preventDefault();

			var username = $('#login-username');
			var loginErrorBox = $('#loginErrorBox');
			var loginError = $('#loginError');

            loginErrorBox.addClass('hidden');
			username.parent().removeClass('error');

			if (username.val() === '') {

			    username.parent().addClass('error');

			} else {

			    account.getUsersMatchingUsername(username.val(), function (error, usersArray) {

                    // @TODO: Can't find a stored user? Odd...
			        console.log(error, usersArray);

			        if (error !== null) {

                        loginError.html(error);
                        loginErrorBox.removeClass('hidden');

			        } else if (typeof usersArray !== 'array') {

			            console.log(usersArray);
			            loginError.html('An internal error has occurred.');
                        loginErrorBox.removeClass('hidden');

			        } else {

			            console.log(usersArray);

			        }

			    });

			}
		}
	});
	
}