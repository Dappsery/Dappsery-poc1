Template._markets.helpers({
    /**
     Get the categories

     @method
     */

    categoryIcons: function () {
        return MarketPlaceCategories.find()
    },
    currentPath: function () {
        var pathArray = Router.current().url.split("/");
        return pathArray[1] == "" ? pathArray[3] : pathArray[1];
    }

});

Meteor.startup(function () {
    var catIds = [];
    var publishersId = []
    var publisherToCats = []

    for (var i = 0; i < categoryIcons.length; i++) {
        var cat = new Category();
        cat.data.createdAt = Helpers.random(100500, Date.parse(new Date()))
        cat.data.name = categoryIcons[i].cat
        cat.data.icon = categoryIcons[i].class
        cat.data.logo = "/images/favicons/apple-touch-icon-60x60.png"

        var catId = MarketPlaceCategories.insert(cat.data);
        catIds.push(catId)
    }

    for (var j = 0; j < 30; j++) {
        var cid = [
            catIds[Helpers.random(0, catIds.length - 1)],
            catIds[Helpers.random(0, catIds.length - 1)],
            catIds[Helpers.random(0, catIds.length - 1)]]

        var pub = new Publisher()
        pub.data.createdAt = Helpers.random(100500, Date.parse(new Date()))
        pub.data.name = "Publisher Name # " + j
        pub.data.publisherCategories = cid
        pub.data.logo = "/images/favicons/apple-touch-icon-60x60.png"

        var id = Publishers.insert(pub.data);

        publishersId.push(id)

        publisherToCats.push({
            pubId: id,
            publisherCategories: cid
        })

    }


    for (var j = 0; j < catIds.length * publishersId.length; j++) {
        var publisher = publisherToCats[Helpers.random(0, publisherToCats.length - 1)]
        var publisherCatIds = publisher.publisherCategories;


        var ads = new Ads()
        ads.data.createdAt = Helpers.random(100500, Date.parse(new Date()))
        ads.data.catIds = publisherCatIds[Helpers.random(0, publisherCatIds.length - 1)]
        ads.data.publisherId = publisher.pubId
        ads.data.logo = "/images/favicons/apple-touch-icon-152x152.png"
        ads.data.name = "Adsname #" + j
        ads.data.impressions = j + 2
        ads.data.visitors = j + 1
        ads.data.rating = Helpers.random(0, 5)
        MarketPlaceAds.insert(ads.data);
    }

})
