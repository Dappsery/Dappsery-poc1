/**
 Helper functions

 @module Helpers
 **/

/**
 The Helpers class containing helper functions

 @class Helpers
 @constructor
 **/

Helpers = {};


/**
 Reruns functions reactively, based on an interval. Use it like so:

 Helpers.rerun['10s'].tick();

 @method (rerun)
 **/

Helpers.rerun = {
    '10s': new ReactiveTimer(10)
};


/**
 Clear localStorage

 @method (getLocalStorageSize)
 **/

Helpers.getLocalStorageSize = function () {

    var size = 0;
    if (localStorage) {
        _.each(Object.keys(localStorage), function (key) {
            size += localStorage[key].length * 2 / 1024 / 1024;
        });
    }

    return size;
};


/**
 Reactive wrapper for the moment package.

 @method (moment)
 @param {String} time    a date object passed to moment function.
 @return {Object} the moment js package
 **/

Helpers.moment = function (time) {

    // react to language changes as well
    TAPi18n.getLanguage();

    if (_.isFinite(time) && moment.unix(time).isValid())
        return moment.unix(time);
    else
        return moment(time);

};


/**
 Formats a timestamp to any format given.

 Helpers.formatTime(myTime, "YYYY-MM-DD")

 @method (formatTime)
 @param {String} time         The timstamp, can be string or unix format
 @param {String} format       the format string, can also be "iso", to format to ISO string, or "fromnow"
 @return {String} The formated time
 **/

Helpers.formatTime = function (time, format) { //parameters

    // make sure not existing values are not Spacebars.kw
    if (format instanceof Spacebars.kw)
        format = null;

    if (time) {

        if (_.isString(format) && !_.isEmpty(format)) {

            if (format.toLowerCase() === 'iso')
                time = Helpers.moment(time).toISOString();
            else if (format.toLowerCase() === 'fromnow') {
                // make reactive updating
                Helpers.rerun['10s'].tick();
                time = Helpers.moment(time).fromNow();
            } else
                time = Helpers.moment(time).format(format);
        }

        return time;

    } else
        return '';
};
/**
 *
 * @param min
 * @param max
 * @returns {rand int value between}
 */
Helpers.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Helpers.getPublisherByCatId = function (catId) {
    return catId == 0 ?
        Publishers.find() :
        Publishers.find({publisherCategories: {$in: [catId]}})
}
Helpers.getAdsByPubIdAndCatId = function (pubId, catId) {
    var selector = {};

    if (catId != 0)
        selector.catIds = {$in: [catId]}
    if (pubId != 0)
        selector.publisherId = pubId


    return MarketPlaceAds.find(selector)

}
Helpers.getFilteredCollection = function (filter) {
    var ctx = paginatorContext.get()
    var skip = 0;

    skip = (ctx.current - 1) * ctx.perPage;
    if (!filter)
        filter = {}
    ctx.filter = filter
    var options = {limit: ctx.perPage, skip: skip}

    return ctx.collection.find(filter, options)
}
Helpers.resetPaginator = function () {
    paginatorContext.set({
        current: 1,
        total: 0,
        perPage: 4,
        collection: null
    })
}
PublisherHelpers = {
    helpers: {
        categoryId: function () {
            return Router.current().params.catId
        },
        cursor: function () {

            return Helpers.getFilteredCollection(Router.current().params.catId == 0 ?
            {} :
            {publisherCategories: {$in: [Router.current().params.catId]}});
        }
    },
    onCreated: function () {

        Helpers.resetPaginator()
        var ctx = paginatorContext.get()
        ctx.collection = Publishers;
        paginatorContext.set(ctx);

    }
}