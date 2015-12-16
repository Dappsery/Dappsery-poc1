Template.publishers.helpers({
    categoryId: function () {
        return Router.current().params.catId
    }
});

Template.publishers.rendered = function () {
    $('.ui.rating').rating({
        initialRating: 0,
        maxRating: 5
    });
}