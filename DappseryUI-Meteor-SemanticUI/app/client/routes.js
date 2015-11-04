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

// Change the URLS to use #! instead of real paths
// Iron.Location.configure({useHashPaths: true});

// Router defaults
Router.configure({
    layoutTemplate: 'DappseryLayout',
    notFoundTemplate: 'layout_notFound',
    yieldRegions: {
        'layout_header': {to: 'header'}
        , 'layout_aside':{to:'aside'}
        , 'layout_footer': {to: 'footer'}

    }
});

// ROUTES

/**
The receive route, showing the wallet overview

@method dashboard
*/

// Default route

// Route for view1
Router.route('/view1', {
    template: 'views_view1',
    name: 'view1'
});

// Route for view2
Router.route('/view2', {
    template: 'views_view2',
    name: 'view2'
});


Router.route('/', {
    template: pages.home.title,
    name: pages.home.title,
    data:function () {
    return pages.home;}
});


Router.route('/about', {
    template: pages.about.title,
    name: pages.about.title,
    data:function () {
    return pages.about;}
});

Router.route('/account', {
    template: pages.account.title,
    name: pages.account.title,
    data:function () {
    return pages.account;}
});

Router.route('/ads', {
    template: pages.ads.title,
    name: pages.ads.title,
    data:function () {
    return pages.ads;}
});

Router.route('/advertisers', {
    template: pages.advertisers.title,
    name: pages.advertisers.title,
    data:function () {
    return pages.advertisers;}
});

Router.route('/cart', {
    template: pages.cart.title,
    name: pages.cart.title,
    data:function () {
    return pages.cart;}
});


Router.route('/contact', {
    template: pages.contact.title,
    name: pages.contact.title,
    data:function () {
    return pages.contact;}
});

Router.route('/login', {
    template: pages.login.title,
    name: pages.login.title,
    data:function () {
    return pages.login;}
});

Router.route('/marketPlace', {
    template: pages.marketPlace.title,
    name: pages.marketPlace.title,
    data:function () {
    return pages.marketPlace;}
});

Router.route('/signUp', {
    template: pages.signUp.title,
    name: pages.signUp.title,
    data:function () {
    return pages.signUp;}
});

Router.route('/publishers', {
    template: pages.publishers.title,
    name: pages.publishers.title,
    data:function () {
    return pages.publishers;}
});
