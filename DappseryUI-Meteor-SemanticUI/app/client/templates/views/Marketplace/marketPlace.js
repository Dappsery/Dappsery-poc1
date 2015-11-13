Template.marketPlace.onCreated(function () {
    var ctx = {
        ctx: [],
        index: 0
    };
    ctx.ctx[0] = {
        breadcrumb: {
            breadcrumbs: [],
            last: {
                _id: 0,
                title: "marketplace.title"
            }
        },
        activeCollection: MarketPlaceCategories,
        activeTemplate: Template.categories.viewName.split(".")[1]
    }
    ctx.ctx[1] = {
        activeCollection: MarketPlaceAds,
        activeTemplate: Template.adsList.viewName.split(".")[1]
    }
    ctx.ctx[2] = {
        activeCollection: null,
        activeTemplate: Template.adDetail.viewName.split(".")[1]
    }

    PLATE_CONTEXT.set(ctx)

});
Template.categories.helpers({
    categories: function () {
        return MarketPlaceCategories.find();
    }
})
Template.marketPlace.helpers({
    templateName: function () {
        var index = PLATE_CONTEXT.get().index;

        return PLATE_CONTEXT.get().ctx[index].activeTemplate;
    }
})


Template.categories.events({
    'click .crumbable': function (event, template) {
        var catId = $(event.target).attr("id");
        var clickedCat = MarketPlaceCategories.find({_id: catId}).fetch()[0];
        Helpers.setBreadCrumbDeep(catId, clickedCat.name);
    }
})


Template.adsList.helpers({
    ads: function () {
        return MarketPlaceAds.find();
    }
})

Template.adsList.rendered = function () {
    $('.rating').rating();
}
Template.adsList.events({
    'click .rating': function (ev, data) {
        var parent = $(ev.target).parent();
        var adId = parent.attr("id").split("_")[1];
        var ad = MarketPlaceAds.find({_id: adId}).fetch()[0];

        var voteRating = parent.find(".active").length;
        var avrRate = (ad.rating + voteRating) / parseFloat(parent.attr("data-max-rating"));

        if (voteRating >= ad.rating)
            ad.rating += avrRate;
        else ad.rating -= avrRate;


        MarketPlaceAds.update(ad._id, ad);

    },
    'click .crumbable': function (event, template) {
        var adId = $(event.target).attr("id");
        var clickedAd = MarketPlaceAds.find({_id: adId}).fetch()[0];

        Helpers.setBreadCrumbDeep(adId, clickedAd.publisherName);
    }


})

