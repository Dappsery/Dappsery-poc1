categoryDropdown = (function () {
    function getMenuItems()
    {
        var menuItems = '';
        var totalItems = categoryIcons.length;
        for (var i = 0; i < totalItems; i++) {
            menuItems += '<div class="item">' + categoryIcons[i].cat + '</div>';
        }

        return menuItems;
    }

    return {
        getMenuItems:getMenuItems
    };
})();