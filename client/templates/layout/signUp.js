if (Meteor.isClient) {
	
	Template.signUp.events({
		'click #create-submit': function (e) {
			e.preventDefault();
			console.log($('#create-username').val());
		}
	});
	
}