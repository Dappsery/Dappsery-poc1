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
    layoutTemplate: 'DappseryLayoutxx', //main2',
    notFoundTemplate: 'layout_notFound',
    /*yieldRegions: {
        'layout_header': {to: 'header'}
        , 'layout_aside':{to:'aside'}
        , 'layout_footer': {to: 'footer'}

    }*/
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
    template: 'home3',//pages.home.title,
    name: pages.home.title,
  //  layoutTemplate: 'main2',
    yieldRegions: {
         'header2':{to: 'header'},
         'footer2': {to: 'footer'}

    },
    data:function () {
    return pages.home;
    }
});


Router.route('/about', {
    layoutTemplate: '_contents',
    template: pages.about.title,
    name: pages.about.title,
    data:function () {
    return pages.about;}
});

Router.route('/account', {
    layoutTemplate: '_accounts',
    template: pages.account.title,
    name: pages.account.title,
    data:function () {
    return pages.account;}
});

Router.route('/ads', {
    layoutTemplate: '_contents',
    template: pages.ads.title,
    name: pages.ads.title,
    data:function () {
    return pages.ads;}
});

Router.route('/advertisers', {
    layoutTemplate: '_contents',
    template: pages.advertisers.title,
    name: pages.advertisers.title,
    data:function () {
    return pages.advertisers;}
});

Router.route('/cart', {
    layoutTemplate: '_contents',
    template: pages.cart.title,
    name: pages.cart.title,
    data:function () {
    return pages.cart;}
});


Router.route('/contact', {
    layoutTemplate: '_contents',
    template: pages.contact.title,
    name: pages.contact.title,
    data:function () {
    return pages.contact;}
});

Router.route('/login', {
    layoutTemplate: '_contents',
    template: pages.login.title,
    name: pages.login.title,
    data:function () {
    return pages.login;}
});

Router.route('/marketPlace', {
    layoutTemplate: '_markets',
    template: pages.marketPlace.title,
    name: pages.marketPlace.title,
    data:function () {
    return pages.marketPlace;}
});

Router.route('/signUp', {
    layoutTemplate: '_contents',
    template: pages.signUp.title,
    name: pages.signUp.title,
    data:function () {
    return pages.signUp;}
});

Router.route('/publishers', {
    layoutTemplate: '_markets',
    template: pages.publishers.title,
    name: pages.publishers.title,
    data:function () {
    return pages.publishers;}
});
