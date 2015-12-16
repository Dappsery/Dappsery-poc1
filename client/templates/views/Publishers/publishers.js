Template.publishers.helpers(PublisherHelpers.helpers)
Template.publishers.onCreated(PublisherHelpers.onCreated)
Template.publisherDetail.onCreated(Helpers.resetPaginator)

Template.publishers.rendered = function () {
    $('.ui.rating').rating({
        initialRating: 0,
        maxRating: 5
    });
}