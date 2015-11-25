paginatorContext = new ReactiveVar({
    current: 1,
    total: 0,
    perPage: 4,
    collection: Publishers,
    filter: {}
});

Template.pagination.helpers({
    isShow: function () {
        var ctx = paginatorContext.get()

        return ctx.collection != null && ctx.collection.find(ctx.filter).count() > 0
    },

    numbers: function () {
        var ctx = paginatorContext.get()
        //TODO: fix rendered bug, when category changed
        // console.log("setting numbers")
        ctx.total = ctx.collection.find(ctx.filter).count()

        var tot = Math.ceil(ctx.total / ctx.perPage);
        var res = []

        if (ctx.current > 1) {
            res.push({index: ctx.current - 1})
            res.push({index: ctx.current, clazz: "active"})
            if (ctx.current < tot)
                res.push({index: ctx.current + 1})
        } else {
            res.push({index: ctx.current, clazz: "active"})

            res.push({index: ctx.current + 1})
        }

        return res
    }

})

Template.pagination.events({
    'click .item': function (ev, obj) {
        var index = $(ev.target).attr("id")
        var ctx = paginatorContext.get()
        ctx.current = parseInt(index);
        paginatorContext.set(ctx);
    }
});
