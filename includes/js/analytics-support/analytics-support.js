/**
 * Provides utility functions for publishing analytics in Confluence, including support for adding
 * and removing the 'src' parameter from URLs once an equivalent analytics event has been published.
 *
 * NOTE - there are plugins that access these utility functions on the global AJS.Confluence variable
 * at the moment, once this is no longer true this code should be refactored to stop exposing functionality
 * globally.
 */
define('confluence-analytics-support', ['jquery'], function($) {
    AJS.Confluence.Analytics = AJS.Confluence.Analytics || {};

    var parseUriPattern = /([^\?]+)[\?]?([^#]*)[#]?(.*)/;
    var urlKeys = ['source', 'urlPath', 'queryParams', 'anchor'];
    var hasAnalyticsHandler;

    function parseUrlString(url) {
        var urlComponents = {};
        var parsedUrl = parseUriPattern.exec(url);

        if (parsedUrl) {
            for (var i = 0; i < urlKeys.length; i++) {
                urlComponents[urlKeys[i]] = parsedUrl[i];
            }
            urlComponents.queryParams = parseQueryString(urlComponents.queryParams);
        }

        return urlComponents;
    }

    function buildUrlString(urlComponents) {
        if ($.isEmptyObject(urlComponents)) {
            return "";
        } else {
            return (!urlComponents.urlPath ? "" : urlComponents.urlPath) +
                ($.isEmptyObject(urlComponents.queryParams) ? "" : "?" + buildQueryString(urlComponents.queryParams)) +
                (!urlComponents.anchor ? "" : "#" + urlComponents.anchor);
        }
    }

    function parseQueryString(queryString) {
        var queryParams = {};

        if (queryString) {
            var parsedQueryString = queryString.split('&');

            for (var i = 0; i < parsedQueryString.length; i++) {
                var parsedParamString = parsedQueryString[i].split('=');

                if (!queryParams[parsedParamString[0]]) {
                    queryParams[parsedParamString[0]] = [];
                }
                // Don't use parsedParamString[1] to retrieve the parameter value in case of query strings such as "src=something=something"
                // The '=' in the value will cause the string to be split
                queryParams[parsedParamString[0]].push(parsedQueryString[i].substring(parsedParamString[0].length+1));
            }
        }

        return queryParams;
    }

    /**
     * @param queryParams     Parameters from which to build the query string. These parameters should already be
     *                        URL encoded as buildQueryString does not add additional encoding
     */
    function buildQueryString(queryParams) {
        var queryString = '';

        for (var param in queryParams) {
            for (var i = 0; i < queryParams[param].length; i++) {
                queryString += '&' + param;
                if (queryParams[param][i]) {
                    queryString += '=' + queryParams[param][i]
                }
            }
        }

        return queryString.substring(1);
    }

    function srcAppendedUrl(urlString, analyticsSource) {
        var parsedUrl = parseUrlString(urlString);

        if (!$.isEmptyObject(parsedUrl)) {
            parsedUrl.queryParams.src = [analyticsSource];
        }
        return buildUrlString(parsedUrl);
    }

    function analyticsHandlerExists() {
        if ("undefined" === typeof hasAnalyticsHandler) {
            var eventsData = $._data(window, 'events');
            hasAnalyticsHandler = eventsData && eventsData.analytics && eventsData.analytics.length > 0;
        }
        return hasAnalyticsHandler;
    }

    function replaceStateAfterCleaningUpAnalyticsParameters() {
        var cleanUrl = AJS.Confluence.Analytics.srcRemovedUrl(document.URL);
        if (document.URL !== cleanUrl) {
            window.history.replaceState(null, '', cleanUrl);
        }
    }

    /**
     * Updates the href of the array of links to include a src parameter. The value of the src parameter is specified in analyticsSource
     * @param {jQuery} links
     * @param {string} analyticsSource
     */
    AJS.Confluence.Analytics.setAnalyticsSource = function(links, analyticsSource) {
        if (analyticsHandlerExists()) {
            links.attr('href', function(i, href) {
                return srcAppendedUrl(href, encodeURIComponent(analyticsSource));
            });
        }
    };

    AJS.Confluence.Analytics.srcRemovedUrl = function(urlString) {
        var parsedUrl = parseUrlString(urlString);
        delete parsedUrl.queryParams.src;
        return buildUrlString(parsedUrl);
    };

    /**
     * Returns values of the src parameter from the specified URL as an array.
     * @param urlString String that represents a URL to parse.
     * @returns {src|*|string|Array} Array containing all 'src' parameter values.
     */
    AJS.Confluence.Analytics.srcParamValues = function(urlString) {
        var params = parseUrlString(urlString).queryParams;
        return params && params.src ? params.src : [];
    };

    /**
     * Publishes a client-side analytics event. The event being published must adhere to our privacy policy, and also
     * needs to be added to a plugin or product whitelist as per the instructions here:
     * https://extranet.atlassian.com/display/AA/The+Developer%27s+Guide+to+Atlassian+Analytics
     * @param name Name of the analytics event
     * @param data Additional attributes
     */
    AJS.Confluence.Analytics.publish = function(name, data) {
        AJS.trigger('analytics', { name: name, data: data || {} });
    };

    AJS.toInit(function($) {
        var values = AJS.Confluence.Analytics.srcParamValues(document.URL);
        for (var i = 0; i < values.length; i++) {
            AJS.Confluence.Analytics.publish('confluence.viewpage.src.' + values[i]);
        }

        // Check if browser supports HTML5 replaceState()
        if (window.history && window.history.replaceState) {
            replaceStateAfterCleaningUpAnalyticsParameters();
        }
    });

    return AJS.Confluence.Analytics;
});

// Require module immediately for backwards compatibility (consumers that load this file
// using a web resource dependency only, and not almond)
require('confluence-analytics-support');