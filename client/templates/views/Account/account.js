Template.dashboard.onCreated(function () {
    var ctx = {
        ctx: [],
        index: 0
    };
    ctx.ctx[0] = {
        breadcrumb: {
            breadcrumbs: [],
            last: {
                _id: 0,
                title: "marketplace.title"
            }
        }
    }
console.log(ctx);
    PLATE_CONTEXT.set(ctx)

});