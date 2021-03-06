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
    "advertisers": {"title": "advertisers"},
    "cart": {"title": "cart"},
    "publishers": {"title": "publishers"},
    "ads": {"title": "advertisement"},
    "contact": {"title": "contact"},
    "marketPlace": {"title": "marketPlace"},
    "home": {"title": "Dappsery Home"},
    "logout": {"title": "logout"},
    "account": {"title": "Account"},
    "publisher": {"title": "Publisher"},
    "advertiser": {"title": "Advertiser"},
    "qat": {"title": "Quality Assurance Team"},
    "settings": {"title": "Settings"},
};

Router.configure({
    layoutTemplate: '_contents',
    notFoundTemplate: 'layout_notFound'
});

Router.route('/', {
    layoutTemplate: '_home',
    name: 'home',
    title: pages.home.title
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

Router.route('/services', {
    name: 'services'
});

Router.route('/marketPlace', {
    name: 'marketPlaceLink'
});

Router.route('/marketPlace/:catId', {
    layoutTemplate: '_markets',
    template: 'marketPlace',
    name: 'marketPlace',
    parent: 'home',
    title: function () {
        return this.params.catId == 0 ? "all" :
            MarketPlaceCategories.findOne({_id: this.params.catId}).name
    },
    filterCustom: {
        all: true,
        fresh: true
    },
    model: new Publisher()
});
Router.route('/marketPlace/:catId/:pubId', {
    layoutTemplate: '_markets',
    template: 'adsList',
    name: 'adsList',
    parent: 'marketPlace',
    title: function () {
        return Publishers.findOne({_id: this.params.pubId}).name
    }, filterCustom: {
        future: "rating",
        hot: "impressions",
        fresh: true
    },
    model: new Ads()
});
Router.route('/marketPlace/:catId/:pubId/:adsId', {
    layoutTemplate: '_markets',
    template: 'adsDetail',
    name: 'adsDetail',
    parent: 'adsList',
    title: function () {
        return MarketPlaceAds.findOne({_id: this.params.adsId}).name
    },

    data: function () {
        return MarketPlaceAds.findOne({_id: this.params.adsId});
    }

});

Router.route('/publishers', {
    name: 'publishersLink'
});

Router.route('/publishers/:catId', {
    layoutTemplate: '_markets',
    template: 'publishers',
    name: 'publishers',
    parent: 'home',
    title: function () {
        if (this.params.catId == 0) {
            return "all";
        } else {
            var proposedCategory = MarketPlaceCategories.findOne({_id: this.params.catId});
            if (proposedCategory == undefined) {
                return "all";
            } else {
                return proposedCategory.name;
            }
        }
    },
    filterCustom: Router.routes['marketPlace'].options.filterCustom,
    model: Router.routes['marketPlace'].options.model
});
Router.route('/publishers/:catId/:pubId', {
    layoutTemplate: '_markets',
    template: 'publisherDetail',
    name: 'publisherDetail',
    parent: 'publishers',
    title: function () {
        return this.params.pubId == 0 ? "all" : Publishers.findOne({_id: this.params.pubId}).name
    },

    data: function () {
        return Publishers.find({_id: this.params.pubId})
    }
});

Router.route('/account', {
    layoutTemplate: '_accounts',
    name: 'account',
    title: 'account'
});

Router.route('/login', {
    layoutTemplate: '_accounts',
    name: 'login',
    data: function () {
        this.redirect('/account');
    }
});

Router.route('/register', {
    name: 'register'
});

Router.route('/logout', {
    name: 'logout',
    data: function () {
        if (Meteor.isClient) {
            account.logout();
        }
    }
});

Router.route('/qateam', {
    name: 'qateam',
    title: 'qat'
});

