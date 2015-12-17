Publisher = function () {
    this.data = {
        createdAt: null,
        name: null,
        publisherCategories: null,
        logo: null
    }
    this.descriptor = {

      /*  createdAt: {
            type: "date",
            i18: 'dapp.app.createdAt'
        },*/
        name: {
            type: "string",
            i18: 'dapp.app.pub_name'
        }
    }
}