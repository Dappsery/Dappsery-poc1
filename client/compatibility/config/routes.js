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

 pages = {
    "about":{"title":"about"},
    "account":{"title":"account"},
    "advertisers":{"title":"advertisers"},
    "cart":{"title":"cart"},
    "publishers":{"title":"publishers"},
    "ads":{"title":"advertisement"},
    "contact":{"title":"contact"},
    "marketPlace":{"title":"marketPlace"},
    "home":{"title":"home"},
    "logout":{"title":"logout"}
};

Router.configure({
    layoutTemplate: '_contents',
    notFoundTemplate: 'layout_notFound'
});

Router.route('/', {
    layoutTemplate: '_home',
    name: 'home'
});


Router.route('/about', {
    name: 'about'
});

Router.route('/ads', {
    name: 'ads'
});

Router.route('/advertisers', {
    name: 'advertisers'
});

Router.route('/cart', {
    name: 'cart'
});


Router.route('/contact', {
    name: 'contact'
});

Router.route('/marketPlace', {
    layoutTemplate: '_markets',
    name: 'marketPlace'
});

Router.route('/publishers', {
    layoutTemplate: '_markets',
    name: 'publishers'
});

Router.route('/account', {
    layoutTemplate: '_accounts',
    name: 'dashboard'
});

Router.route('/account/publisher', {
    layoutTemplate: '_accounts',
    name: 'accountPublisher'
});

Router.route('/account/advertiser', {
    layoutTemplate: '_accounts',
    name: 'accountAdvertiser'
});

Router.route('/account/quality-assurance-team', {
    layoutTemplate: '_accounts',
    name: 'accountQAT'
});

Router.route('/account/settings', {
    layoutTemplate: '_accounts',
    name: 'settings'
});

Router.route('/login', {
    data:function () {
    	this.redirect('/account');
	}
});

Router.route('/signUp', {
    data:function () {
    	this.redirect('/account');
	}
});

Router.route('/logout', {
    name: 'logout',
    data:function () {
    	AccountsTemplates.logout();
	}
});

