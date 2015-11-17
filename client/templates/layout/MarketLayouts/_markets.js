categoryIcons = [{
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
    }

});
Template._markets.rendered = function () {
    $('.ui.sidebar').sidebar('toggle')
}

Meteor.startup(function () {

    for (var i = 0; i < categoryIcons.length; i++) {
        var catId = MarketPlaceCategories.insert({
            name: categoryIcons[i].cat,
            icon: categoryIcons[i].class,
            logo: "/images/favicons/apple-touch-icon-60x60.png",
            createdAt: new Date()
        });
        for (var j = 0; j < 50; j++) {

            MarketPlaceAds.insert({
                catId: catId,
                logo: "/images/favicons/apple-touch-icon-152x152.png",
                publisherName: categoryIcons[i].cat+" name " + i,
                impressions: j + 2,
                visitors: j + 1,
                rating: 2,
                createdAt: new Date()

            });
        }
    }
})
