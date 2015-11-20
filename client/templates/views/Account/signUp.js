if (Meteor.isClient) {
	
	Template.signUp.events({
		'click #create-submit': function (e) {
			e.preventDefault();

			var username = $('#create-username');
			var password = $('#create-password');
			var password2 = $('#create-password2');
			var registrationForm = $('#registrationForm');
			var signUpError = $('#signUpError');
			var signUpErrorBox = $('#signUpErrorBox');
			var error = false;

			username.parent().removeClass('error');
			password.parent().removeClass('error');
			password2.parent().removeClass('error');
			signUpErrorBox.addClass('hidden');

			if (username.val() === '') {
                username.parent().addClass('error');
			    error = true;
			}

			if (password.val() === '') {
			    password.parent().addClass('error');
			    error = true;
			}

			if (password.val() !== password2.val()) {
                password.parent().addClass('error');
                password2.parent().addClass('error');
                signUpError.html('Make sure your passwords match.');
                signUpErrorBox.removeClass('hidden');
                error = true;
            }

			if (error === false) {

			    registrationForm.addClass('loading');
			    account.register(username.val(), password.val(), 'publisher', function (error) {
			        if (error === null) {
			            account.login(username.val(), password.val(), function (error) {
			                if (error !== undefined) {
			                    window.location.pathname = '/';
			                }
			            });
			        } else {
                        signUpError.html(error);
			            signUpErrorBox.removeClass('hidden');
			        }
			    });
			    registrationForm.removeClass('loading');

			}
		}
	});
	
}

Template.signUp.onRendered(function () {
    $('.disabled-type').popup({
        position: 'top left',
        title: 'Oooooooh! ... You can\'t do that.',
        content: 'Thank you for your interest in joining Dappsery as an early adopter! Currently we\'re only ' +
                 'registering Publishers at this time. While you wait for us to add other account types to ' +
                 'our system, use \'Publisher\' as your default account type. You can change it later.'
    });
});
