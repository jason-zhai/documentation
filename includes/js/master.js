AJS.toInit(function ($) {
    /**
     * @deprecated Since 5.0 Modern browsers already have placeholders. Everything else gets its placeholder via placeholder.js
     */
    AJS.applySearchPlaceholders = function (scope) {
        AJS.log("AJS.applySearchPlaceholders is deprecated. Use AJS.Confluence.Binder.placeholder instead");
        AJS.Confluence.Binder.placeholder();
    };

    // Moved out of macros.vm displayGlobalMessages
    $("#messageContainer .confluence-messages").each(function () {
        var message = this;
        if (!getCookie(message.id)) {
            $(message).show();
            $(".message-close-button", message).click(function () {
                $(message).slideUp();
                setCookie(message.id, true);
            });
        }
    });
});

/**
 * @deprecated Since 4.0. Use the Confluence namespace instead.
 */
AJS.General =  {
    /**
     * @deprecated Use Confluence.getContextPath instead.
     */
    getContextPath : Confluence.getContextPath,
    /**
     * @deprecated Use Confluence.getBaseUrl instead.
     */
    getBaseUrl : Confluence.getBaseUrl
};

(function() {

// Stops the same plugin having 18n loaded twice.
var loadedPlugins = {};

AJS.I18n = {
    keys: {},

    /**
     * Get the I18n keys for the current user. This should be called immediately on script load.
     *
     * Note: requests are cached with last modified headers by the REST service
     */
    get: function(pluginKey, successCallback, errorCallback) {
        var loaded = true,
            url = Confluence.getContextPath() + "/rest/prototype/1/i18n",
            data = {
                "locale": AJS.params.userLocale // request should be cached against the user's locale
            };
        // load multiple plugins
        if (AJS.$.isArray(pluginKey)) {
            for (var key in pluginKey) {
                if (!loadedPlugins[key])
                    loaded = false;
            }
            data.pluginKeys = pluginKey;
        }
        else { // load one plugin
            loaded = loadedPlugins[pluginKey];
            url += "/" + pluginKey;
        }

        if (loaded) {
            if (typeof successCallback == "function") {
                successCallback(AJS.I18n.keys);
            }
            return;
        }

        AJS.$.ajax( {
            url: url,
            data: data,
            dataType: "json",
            success: function(data) {
                AJS.I18n.load(data);
                loadedPlugins[pluginKey] = true;
                if (typeof successCallback == "function") {
                    successCallback(data);
                }
            },
            error: function(request, textStatus) {
                AJS.log("Error loading I18n for " + pluginKey + ":" + textStatus);
                if (typeof errorCallback == "function") {
                    errorCallback(textStatus);
                }
            }
        });

    },
    load: function(data) {
        AJS.$.extend(AJS.I18n.keys, data);
    },
    /**
     * Returns the i18n string for the provided key. This method should only be called in the callback of
     * AJS.I18n.load() to ensure that the translations are loaded.
     *
     * First looks in AJS.params with the given key prefixed with "i18n.". If not found, it will try to
     * look it up in the prefetched calls to AJS.I18n.load(). The original key is returned if translations
     * could not be found.
     *
     * @param i18nKey an i18n key. Should be the same as entered in an i18n .properties file.
     * @param args either an array of strings or a string, optionally followed by more string parameters
     */
    getText: function (i18nKey, args) {
        var text = AJS.params["i18n." + i18nKey] || AJS.I18n.keys[i18nKey] || i18nKey;
        if (!args) {
            return text;
        }

        if (arguments.length == 2 && args instanceof Array) {
            // User has passed an array as the second method argument
            args.unshift(text);
        } else {
            // User has passed varargs
            args = Array.prototype.slice.call(arguments, 0);
            args[0] = text;
        }
        return AJS.format.apply(AJS, args);
    }
};
})();

(function() {
    var rnotwhite = /\S/,
        trimLeft = /^[\s\uFEFF]+/,
        trimRight = /[\s\uFEFF]+$/;
    if ( rnotwhite.test( "\xA0" ) ) {
        trimLeft = /^[\s\uFEFF\xA0]+/;
        trimRight = /[\s\uFEFF\xA0]+$/;
    }

    // All of this trim left/right stuff can go away when we upgrade jQuery to anything other than the busted version of 1.6.4 that we are currently using
    AJS.trim = AJS.trim || function(str) {
        if(!str)
            return "";
        return str.replace( trimLeft, "" ).replace( trimRight, "" );
    }
})();

/**
 * Makes the current element selectable with effects by adding 'hover' and 'selected' class names.
 *
 * This is typically used for table row elements which can be selected.
 *
 * @param container the parent container which contains all selectable elements
 * @param onSelect the function to be invoked when the element is clicked on.
 * It should take two parameters, the element that was clicked on followed by the properties.
 * @param properties the properties to be stored against the element and passed into the onSelect function.
 */
jQuery.fn.selectableEffects = function(container, onSelect, properties) {
    var $ = jQuery, el = $(this);
    if (properties) {
        el.data("properties", properties);
    }
    el.click(function (e) {
        var $this = $(this);
        if (onSelect) {
            onSelect(this, $this.data("properties"));
        }

        container.find(".selected").removeClass("selected");
        $this.addClass("selected");
        return AJS.stopEvent(e);
    });
    el.hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
};

/**
 * Shortens the set of elements by replacing the last character of each with ellipsis
 * until the condition returns true. Typical usage:
 *
 *   $("#some-list li").shortenUntil(function () { return $("#some-list").width() < 500; });
 *
 * @param condition shortening of elements will happen until this function returns true
 */
jQuery.fn.shortenUntil = function (condition) {
    var $ = jQuery;
    var current = 0;
    while (!condition() && current < this.length) {
        var currentText = $(this[current]).text();
        if (currentText == "\u2026") {
            current++;
            continue;
        }

        $(this[current]).text(currentText.replace(/[^\u2026]\u2026?$/, "\u2026"));
    }
    return this;
};
