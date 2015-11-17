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
    "about": {"title": "about"},
    "account": {"title": "account"},
    "advertisers": {"title": "advertisers"},
    "cart": {"title": "cart"},
    "publishers": {"title": "publishers"},
    "ads": {"title": "advertisement"},
    "contact": {"title": "contact"},
    "marketPlace": {"title": "marketPlace"},
    "home": {"title": "home"},
    "logout": {"title": "logout"}
};

Router.configure({
    layoutTemplate: '_contents',
    notFoundTemplate: 'layout_notFound'
});

Router.route('/', {
    layoutTemplate: '_home',
    name: 'home',
    title: 'dapp.app.title'
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

Router.route('/marketPlace/:catId', {
    layoutTemplate: '_markets',
    template: 'marketPlace',
    name: 'marketPlace',
    parent: 'home',
    title: function () {
        return MarketPlaceCategories.findOne({_id: this.params.catId}).name
    },

    data: function () {
        return MarketPlaceAds.find({catId: this.params.catId});
    }
});
Router.route('/marketPlace/:catId/:adsId', {
    layoutTemplate: '_markets',
    template: 'adsDetail',
    name: 'adsDetail',
    title: function () {
        return MarketPlaceAds.find({_id: this.params.adsId}).fetch()[0].publisherName
    },
    parent: 'marketPlace',
    data: function () {
        return MarketPlaceAds.find({_id: this.params.adsId}).fetch()[0];
    }
});

Router.route('/publishers', {
    layoutTemplate: '_markets',
    name: 'publishers'
});

Router.route('/account', {
    layoutTemplate: '_accounts',
    name: 'dashboard',
    breadcrum: 'Account'
});

Router.route('/account/publisher', {
    layoutTemplate: '_accounts',
    name: 'accountPublisher'
});

Router.route('/account/advertiser', {
    layoutTemplate: '_accounts',
    name: 'accountAdvertiser'
});

Router.route('/account/click-quality-team', {
    layoutTemplate: '_accounts',
    name: 'accountCQT'
});

Router.route('/account/settings', {
    layoutTemplate: '_accounts',
    name: 'settings'
});

Router.route('/login', {
    data: function () {
        this.redirect('/account');
    }
});

Router.route('/signUp', {
    data: function () {
        this.redirect('/account');
    }
});

Router.route('/logout', {
    name: 'logout',
    data: function () {
        AccountsTemplates.logout();
    }
});

