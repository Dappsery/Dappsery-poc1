Template.menuLinks.helpers({
    //TODO: return array of the menu links
    firstCategoryId: function () {
        var count = MarketPlaceCategories.find().count();
        var rnd = Helpers.random(0, count - 1);
        //console.log("c:"+count+" rnd"+rnd)
        return MarketPlaceCategories.find().fetch()[rnd]._id;


    }
})