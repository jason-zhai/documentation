define('confluence/setup/utils', [
    'jquery'
],
function(
    $
) {

    function getMeta(key) {
        function asBooleanOrString(value) {
            var lc = value ? value.toLowerCase() : "";

            if (lc == "true")  return true;
            if (lc == "false") return false;

            return value;
        }

        var metaEl = $("meta[name='ajs-" + key + "']");
        var value = metaEl.attr("content");
        return asBooleanOrString(value);
    }

    return {
        getMeta: getMeta
    }
});