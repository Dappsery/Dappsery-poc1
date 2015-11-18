

//TODO:make run it on content change
Template.marketPlace.rendered = function () {
    $('.rating').rating();
}
Template.marketPlace.helpers({
    categoryId: function () {
        return Router.current().params.catId
    }
})



