Template.breadcrumb.helpers({
    breadcrumbsContext: function (data, ev) {
        var index = PLATE_CONTEXT.get().index;
        return PLATE_CONTEXT.get().ctx[index].breadcrumb;
    }
})
Template.breadcrumb.events({
    "click a.section": function (event) {
        var context = PLATE_CONTEXT.get();
        $.each($(event.target).parent().find(".section").not(".active"), function (index, value) {
            if (event.target == value) {
                context.index =index;
                PLATE_CONTEXT.set(context);
            }
        })
        event.preventDefault()
    }

})