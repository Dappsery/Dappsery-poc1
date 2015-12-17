Template.adsList.helpers({
    getPath: function () {
        return Router.current().params.catId + "/" + Router.current().params.pubId
    },
    cursor: function () {

        var selector = {};

        if (Router.current().params.catId != 0)
            selector.catIds = {$in: [Router.current().params.catId]}
        if (Router.current().params.pubId != 0)
            selector.publisherId = Router.current().params.pubId

        return Helpers.getFilteredCollection(selector);
    }
})

Template.adsList.onCreated(function () {
    Helpers.resetPaginator()
    var ctx = paginatorContext.get()
    ctx.collection = MarketPlaceAds;
    paginatorContext.set(ctx);

})
Template.adsDetail.onCreated(Helpers.resetPaginator)