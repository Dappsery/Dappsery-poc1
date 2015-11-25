
Template._markets.helpers({
    /**
     Get the categories

     @method
     */

    categoryIcons: function () {
        return MarketPlaceCategories.find()
    },
    currentPath:function(){
      return Router.current().url.split("/")[1]
    }

});
Template._markets.rendered = function () {
    $('.ui.sidebar').sidebar('toggle')

}

Meteor.startup(function () {
    var catIds = [];
    var publishersId = []
    var publisherToCats = []

    for (var i = 0; i < categoryIcons.length; i++) {
        var catId = MarketPlaceCategories.insert({
            name: categoryIcons[i].cat,
            icon: categoryIcons[i].class,
            logo: "/images/favicons/apple-touch-icon-60x60.png",
            createdAt: new Date()
        });
        catIds.push(catId)
    }

    for (var j = 0; j < 30; j++) {
        var cid = [
            catIds[Helpers.random(0, catIds.length - 1)],
            catIds[Helpers.random(0, catIds.length - 1)],
            catIds[Helpers.random(0, catIds.length - 1)]]

        var id = Publishers.insert({
            createdAt: new Date(),
            name: "Publisher Name # " + j,
            publisherCategories: cid,
            logo: "/images/favicons/apple-touch-icon-60x60.png"
        });

        publishersId.push(id)

        publisherToCats.push({
            pubId: id,
            publisherCategories: cid
        })

    }


    for (var j = 0; j < catIds.length * publishersId.length; j++) {
        var publisher = publisherToCats[Helpers.random(0, publisherToCats.length - 1)]
        var publisherCatIds = publisher.publisherCategories;

        MarketPlaceAds.insert({
            catIds: publisherCatIds[Helpers.random(0, publisherCatIds.length - 1)],
            publisherId: publisher.pubId,

            logo: "/images/favicons/apple-touch-icon-152x152.png",
            name: "Adsname #" + j,
            impressions: j + 2,
            visitors: j + 1,
            rating: 2,
            createdAt: new Date()

        });
    }

})
