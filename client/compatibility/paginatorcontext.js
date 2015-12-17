var paginatorContext = (function () {
    var instance = null;
    function get() {

        if (instance == null) {
            makeInstance();
        }

        return instance.get();
    }

    function set(context) {
        if (instance == null) {
            makeInstance();
        } else {
            instance.set(context);
        }
    }

    function reset() {
        makeInstance();
    }

    function makeInstance() {
        instance = new ReactiveVar({
           current: 1,
           total: 0,
           perPage: 100,
           collection: Publishers,
           filter: {},
           sort:{}
       });
    }

    return {
        get:get,
        set:set,
        reset:reset
    };
})();