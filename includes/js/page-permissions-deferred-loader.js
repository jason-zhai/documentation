AJS.$(function() {

    var loadingIndicator = Confluence.PageLoadingIndicator($("body")),
        resourceKey = "confluence.web.resources:page-permissions-editor";

    var loadPagePermissionResources = function(e) {
        var deferred = WRM.require('wr!' + resourceKey, function() {
            AJS.trigger("deferred.page.permissions");
        });
        loadingIndicator.showUntilDialogVisible(deferred, AJS.I18n.getText("page.restrictions.loading.error"));

        e.preventDefault();
    };

    // has to be 'on' cause of quick edit
    AJS.$("body").on("click", "#rte-button-restrictions,#action-page-permissions-link", loadPagePermissionResources);

    // another way to open the page permissions
    AJS.bind('system-content-metadata.open-restrictions-dialog', loadPagePermissionResources);
});