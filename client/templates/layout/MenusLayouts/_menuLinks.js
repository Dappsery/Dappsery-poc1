Template.menuLinks.helpers({
    randomCategoryId: function () {
        var count = MarketPlaceCategories.find().count();
        var rnd = Helpers.random(0, count - 1);
        return MarketPlaceCategories.find().fetch()[rnd]._id;
    }
});

Template.menuLinks.rendered = function () {
    $('#site-menu a').click(function (ev) {
        $(ev.target).siblings(".active").toggleClass("active")
        $(ev.target).toggleClass("active")
    });
};

Template.footer.helpers({
    randomCategoryId: function () {
        var count = MarketPlaceCategories.find().count();
        var rnd = Helpers.random(0, count - 1);
        return MarketPlaceCategories.find().fetch()[rnd]._id;
    }
});