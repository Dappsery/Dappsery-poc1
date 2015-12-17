//TODO:make run it on content change
Template.marketPlace.rendered = function () {
    $('.rating').rating();
}
Template.marketPlace.onCreated(PublisherHelpers.onCreated)
Template.marketPlace.helpers(PublisherHelpers.helpers)