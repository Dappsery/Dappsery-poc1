var accountBreadcrum = (function (window) {
	
	function getBreadcrumbCode()
	{
		var pathArray = getPathArray();
		var totalPathSegments = pathArray.length;
		var breadcrumbCode = '';

		for (var i = 0; i < totalPathSegments; i++) {
			
			var segment = pathArray[i];

			if (segment === '') {
				continue;
			}

			var breadcrumText = getBreadcrumText(segment);

			if (i === totalPathSegments-1) {
				breadcrumbCode += '<div class="active section">' + breadcrumText + '</div>';
			} else {
			
				breadcrumbCode += '<a class="section" href="' + segment + '">' + breadcrumText + '</a>';
				breadcrumbCode += getDivider();

			}

		}

		return breadcrumbCode;
	}
	
	/* PRIVATES */

	function getPathArray()
	{
		return getPath().split('/');
	}

	function getBreadcrumText()
	{
		var pathRoute = Router.routes._byPath[getPath()];
		if (pathRoute === undefined) {
			return 'Undefined';
		}

		return pathRoute.options.breadcrum;
	}

	function getPath()
	{
		return document.location.pathname;
	}

	function getDivider()
	{
		return '<div class="divider"> / </div>';
	}
	
	return {
		getBreadcrumbCode: getBreadcrumbCode
	};
	
})(window);

