/**
Template Controllers

@module Routes
*/

/**
The app routes
@pages
@class App routes
@constructor
*/

var pages = {
    "about":{"title":"about"},
    "account":{"title":"account"},
    "advertisers":{"title":"advertisers"},
    "cart":{"title":"cart"},
    "publishers":{"title":"publishers"},
    "ads":{"title":"advertisement"},
    "contact":{"title":"contact"},
    "login":{"title":"login"},
    "marketPlace":{"title":"marketPlace"},
    "signUp":{"title":"signUp"},
    "home":{"title":"home"}
};

Router.configure({
    layoutTemplate: '_contents',
    notFoundTemplate: 'layout_notFound'
});

Router.route('/', {
    layoutTemplate: '_home',
    name: pages.home.title,
    data:function () {
    	return pages.home;
    }
});


Router.route('/about', {
    name: pages.about.title,
    data:function () {
    	return pages.about;
	}
});

Router.route('/account', {
    layoutTemplate: '_accounts',
    name: pages.account.title,
    data:function () {
    	return pages.account;
	}
});

Router.route('/ads', {
    name: pages.ads.title,
    data:function () {
    	return pages.ads;
	}
});

Router.route('/advertisers', {
    name: pages.advertisers.title,
    data:function () {
    	return pages.advertisers;
	}
});

Router.route('/cart', {
    name: pages.cart.title,
    data:function () {
    	return pages.cart;
	}
});


Router.route('/contact', {
    name: pages.contact.title,
    data:function () {
    	return pages.contact;
	}
});

Router.route('/login', {
    name: pages.login.title,
    data:function () {
    	return pages.login;
	}
});

Router.route('/marketPlace', {
    layoutTemplate: '_markets',
    name: pages.marketPlace.title,
    data:function () {
    	return pages.marketPlace;
	}
});

Router.route('/signUp', {
    name: pages.signUp.title,
    data:function () {
    	return pages.signUp;
	}
});

Router.route('/publishers', {
    layoutTemplate: '_markets',
    name: pages.publishers.title,
    data:function () {
    	return pages.publishers;
	}
});
