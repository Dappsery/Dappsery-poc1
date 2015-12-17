Ads = function () {
    this.data = {
        createdAt: null,
        catIds: null,
        publisherId: null,
        logo: null,
        name: null,
        impressions: null,
        visitors: null,
        rating: null
    }

    this.descriptor = {
    /*    createdAt: {
            type: "date",
            i18: 'dapp.app.createdAt'
        },*/
        name: {
            type: "string",
            i18: 'dapp.app.ads_name'
        }
    }
}