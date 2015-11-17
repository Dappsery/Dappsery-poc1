
Template.marketPlace.helpers({
    getAds: function () {
        return MarketPlaceAds.find({catId:Router.current().params.catId});
    }
})


//does not working
Template.marketPlace.rendered = function () {
    $('.rating').rating();
}

