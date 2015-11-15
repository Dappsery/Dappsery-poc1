// See https://github.com/meteor-useraccounts/core/blob/master/Guide.md#options
AccountsTemplates.configure({
	homeRoutePath: '/account',
	showValidating: true,
	texts: {
        errors: {
            loginForbidden: "Invalid login.",
            mustBeLoggedIn: "You must be logged in to do that."
        },
		inputIcons: {
        	isValidating: "fa fa-spinner fa-spin",
        	hasSuccess: "fa fa-check",
        	hasError: "fa fa-times",
    	}
    }
});

AccountsTemplates.configureRoute('ensureSignedIn', {
    template: 'authWrapper',
    layoutTemplate: '_signin',
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'accountPublisher', 'accountAdvertiser', 'accountCQT', 'settings']
});

//Set up login services
Meteor.startup(function() {
  // Add Facebook configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add GitHub configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add Google configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add Linkedin configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */
});
