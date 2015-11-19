if (Meteor.isClient) {
	
	Template.login.events({
		'click #submit-login': function (e) {
			e.preventDefault();
			console.log($('#username').val());
		}
	});
	
}