// Basic (local) collections
// we use {connection: null} to prevent them from syncing with our not existing Meteor server

// A test persitent collection
MarketPlaceAds = new Mongo.Collection(null);
Publishers = new Mongo.Collection(null);
MarketPlaceCategories = new Mongo.Collection(null);
AccountDB = new Mongo.Collection(null);
