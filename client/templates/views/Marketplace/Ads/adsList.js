Template.adsList.helpers({
    getPath:function(){
        return Router.current().params.catId+"/"+Router.current().params.pubId
    }
})