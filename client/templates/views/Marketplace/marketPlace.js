Meteor.startup(function () {

    for (var i = 0; i < 20; i++) {
        var catId = MarketPlaceCategories.insert({
            name: "cat " + i,
            logo: "/images/favicons/apple-touch-icon-60x60.png",
            createdAt: new Date()
        });
        for (var j = 0; j < 50; j++) {

            MarketPlaceAds.insert({
                catId: catId,
                logo: "/images/favicons/apple-touch-icon-152x152.png",
                publisherName: "name " + i,
                impressions: j + 2,
                visitors: j + 1,
                rating: 2,
                createdAt: new Date()

            });
        }
    }
})
;
Template.marketPlace.helpers({
    categories: function () {
        return MarketPlaceCategories.find();
    }
})



Template.adsList.rendered = function () {
    $('.rating').rating();
}

