// Basic (local) collections
// we use {connection: null} to prevent them from syncing with our not existing Meteor server

// A test persitent collection
MarketPlaceAds = new Mongo.Collection(null);
MarketPlaceCategories = new Mongo.Collection(null);


Meteor.startup(function () {

    for (var i = 0; i < 20; i++)
        MarketPlaceCategories.insert({
            name: "cat " + i,
            logo: "/images/favicons/apple-touch-icon-60x60.png"
        });
    for (var i = 0; i < 50; i++) {

        MarketPlaceAds.insert({

            logo: "/images/favicons/apple-touch-icon-152x152.png",
            publisherName: "name " + i,
            impressions: i + 2,
            visitors: i + 1,
            rating: 2

        });
    }
});
