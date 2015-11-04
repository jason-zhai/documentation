AJS.$(function() {

    var deferredDialogs = {
        userStatus: {
            resource: "confluence.userstatus:userstatus-resources",
            selector: "#create-user-status-link",
            event: "deferred.userstatus.click"
        },
        movePageDialogTools: {
            resource: "confluence.web.resources:page-move-resources",
            selector: "#action-move-page-dialog-link",
            event: "deferred.page-move.tools-menu"
        },
        movePageDialogEditor: {
            resource: "confluence.web.resources:page-move-resources",
            selector: "#rte-button-location",
            event: "deferred.page-move.editor"
        },
        moveBlogDialogTools: {
            resource: "confluence.web.resources:page-move-resources",
            selector: "#action-move-blogpost-dialog-link",
            event: "deferred.blog-move.tools-menu"
        }
    };

    var loadingIndicator = Confluence.PageLoadingIndicator($("body"));

    _.each(deferredDialogs, function(dialog) {
        $("body").on('click', dialog.selector, function(e) {
            var deferred = WRM.require('wr!' + dialog.resource, function() {
                AJS.trigger(dialog.event);
            });
            loadingIndicator.showUntilDialogVisible(deferred);

            // Send an analytics event.
            var eventName = dialog.resource + ".requested";
            AJS.Analytics ?
                AJS.Analytics.triggerPrivacyPolicySafeEvent(eventName)
                    : AJS.trigger('analyticsEvent', {name: eventName});

            e.preventDefault();
        });
    });

});