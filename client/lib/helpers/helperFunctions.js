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

    var mergedFilter = Helpers.merge_options(ctx.filter, filter);

    return ctx.collection.find(mergedFilter, {limit: ctx.perPage, skip: skip, sort: ctx.sort})
}
Helpers.resetPaginator = function () {
    paginatorContext.reset();
}
PublisherHelpers = {
    helpers: {
        categoryId: function () {
            return Router.current().params.catId
        },
        cursor: function () {
            var catId = Router.current().params.catId;
            return Helpers.getFilteredCollection(catId == 0 ? {} : {publisherCategories: {$in: [catId]}});
        }
    },
    onCreated: function () {

        Helpers.resetPaginator()
        var ctx = paginatorContext.get()
        ctx.collection = Publishers;
        paginatorContext.set(ctx);

    }
}
Helpers.merge_options=function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}