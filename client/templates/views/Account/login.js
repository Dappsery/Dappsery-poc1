if (Meteor.isClient) {
	
	Template.login.events({
		'click #submit-login': function (e) {
			e.preventDefault();
		}
	});
	
}