Category = function () {
    this.data = {
        createdAt: null,
        name: null,
        icon: null,
        logo: null
    }

    this.descriptor = {
      /*  createdAt: {
            type: "date",
            i18: 'dapp.app.createdAt'
        },*/
        name: {
            type: "string",
            i18: 'dapp.app.cat_name'
        }
    }
}