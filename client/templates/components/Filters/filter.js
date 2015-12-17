Template.filter.events({


    'click .toggle': function (ev, obj) {
        //   console.log("active")
        var isActive = $(ev.target).toggleClass("active").hasClass('active');
        var opts = Router.current().route.options.filterCustom
        var ctx = paginatorContext.get()
        switch ($(ev.target).attr("id")) {
            default:
                //  "filter_all"
                if (isActive)
                    $($("#categories a")[0]).trigger("click")
                break;
            case "filter_hot" :
                if (opts.hot ? true : false) {

                    if (isActive) {
                        ctx.sort[opts['hot']] = -1
                    } else {
                        ctx.sort = {}
                    }
                    paginatorContext.set(ctx)
                }

                break;
            case "filter_fresh":
                if (opts.fresh ? true : false) {
                    if (isActive) {
                        ctx.sort = {createdAt: -1}
                    } else {
                        ctx.sort = {}
                    }
                    paginatorContext.set(ctx)
                }
                break;
            case "filter_futured":
                if (opts.future ? true : false) {
                    if (isActive) {
                        ctx.sort[opts['future']] = -1
                    } else {
                        ctx.sort = {}
                    }
                }


                break;

        }


    }

})
Template.filter.helpers({
    context: function () {
        var opts = Router.current().route.options.filterCustom
        return {
            isShow: opts ? true : false,
            isHot: opts.hot ? true : false,
            isAll: opts.all ? true : false,
            isFresh: opts.fresh ? true : false,
            isFuture: opts.future ? true : false
        }
    }
})
Template.filter_search.helpers({
    descriptor: function () {

        var des = Router.current().route.options.model.descriptor
        var res = []
        for (var item in des) {
            res.push(item)
        }

        return res;
    }
})
Template.filter_search.events({
    'click #search': function (ev) {
        ev.preventDefault()
        var field = $("#filter-field-selected").val();
        var des = Router.current().route.options.model.descriptor
        var ctx = paginatorContext.get()
        switch (des[field].type) {
            default://string
                ctx.filter[field] = '/.*' + $("#filter-field-search-text").val() + '.*/'
                paginatorContext.set(ctx);
                break
        }
    }
})
Template.filter.rendered = function () {
    if (Router.current().params.catId == 0) {
        $("#filter_all").addClass("active")
    }
}