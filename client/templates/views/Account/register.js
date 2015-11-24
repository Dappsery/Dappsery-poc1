if (Meteor.isClient) {
	
	Template.register.events({
		'click #create-submit': function (e) {
			e.preventDefault();

			registerInterface.resetForm();
            registerInterface.validateForm();

			if (registerInterface.errorsExist() === false) {

			    $('#registrationForm').addClass('loading');

			    var registrationObject = {
			        username: $('#create-username').val(),
			        password: $('#create-password').val(),
			        accountType: 'publisher',
			        website: $('#create-url').val(),
			        logo: $('#create-logo').val(),
			        category: $('#category-selected').html()
			    };

			    account.registerAccount(registrationObject, function (error) {
			        if (error === null) {
			            registerInterface.showRegistrationComplete();
			        } else {
			            registerInterface.showError(error);
			        }
			    });
			    $('#registrationForm').removeClass('loading');

			}
		}
	});

	Template.register.onRendered(function () {
	    $('#category-select > .menu').html(categoryDropdown.getMenuItems());
	    $('#category-select').dropdown();
	});
	
}
