categoryIcons = [
    {
        "cat": "Dapps",
        "class": "Adn"
    },
    {
        "cat": "All Things Apple",
        "class": "Apple icon"
    },
    {
        "cat": "Automotive",
        "class": "Car icon"
    },
    {
        "cat": "Beauty & Fashion",
        "class": "Female icon"
    },
    {
        "cat": "Business & Finance",
        "class": "Money icon"
    },
    {
        "cat": "Cryptocurrency",
        "class": "Bitcoin icon"
    },
    {
        "cat": "Education",
        "class": "Student icon"
    },
    {
        "cat": "Entertainment",
        "class": "Ticket icon"
    },
    {
        "cat": "Family & Parenting",
        "class": "Users icon"
    },
    {
        "cat": "Food & Drink",
        "class": "Food icon"
    },
    {
        "cat": "Gaming",
        "class": "Game icon"
    },
    {
        "cat": "Government & Politics",
        "class": "Legal icon"
    },
    {
        "cat": "Health & Fitness",
        "class": "Child icon"
    },
    {
        "cat": "Home & Architecture",
        "class": "home icon"
    },
    {
        "cat": "Pets",
        "class": "Qq icon"
    },
    {
        "cat": "Podcasts",
        "class": "Signal icon"
    },
    {
        "cat": "Sports",
        "class": "Soccer icon"
    },
    {
        "cat": "Technology",
        "class": "Qrcode icon"
    },
    {
        "cat": "Travel",
        "class": "Plane icon"
    },
    {
        "cat": "Virtualization",
        "class": "Database icon"
    },
    {
        "cat": "Visual Arts & Design",
        "class": "Pie Chart icon"
    },
    {
        "cat": "Web Design & Development",
        "class": "Github icon"
    },
    {
        "cat": "Weddings",
        "class": "Users icon"
    }];

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
