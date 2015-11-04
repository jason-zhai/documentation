Confluence.PageLoadingIndicator = function($section) {
    function getBlanket() {
        return $(".confluence-page-loading-blanket", $section);
    }

    function getIndicator() {
        return $(".confluence-loading-indicator", $section);
    }

    return {
        show: function () {
            if (getBlanket().length === 0) {
                $($section).append(Confluence.Templates.pageLoadingIndicator());
            }

            getBlanket().show();
            getIndicator().spin({lines: 12, length: 8, width: 4, radius: 10, trail: 60, speed: 1.5, color: "#F0F0F0"});
        },

        hide: function() {
            getIndicator().stop();
            getBlanket().hide();
        },

        /**
         * Shows the spinner until the deferred is resolved or rejected.
         *
         * @param deferred a jquery deferred object
         * @param errorMessage optional error message to display
         */
        showUntilResolved: function(deferred, errorMessage) {
            this.show();
            deferred.always(_.bind(this.hide, this));

            errorMessage && deferred.fail(function() {
                AJS.messages.error(".confluence-page-loading-errors", {
                    body: errorMessage
                });
            });
        },

        /**
         * This method specifically waits for a dialog to be visible before hiding the spinner.
         *
         * @param deferred a jquery deferred object
         * @param errorMessage optional error message to display
         */
        showUntilDialogVisible: function(deferred, errorMessage) {
            var pageLoadingIndicator = this,
                errorMessage = errorMessage || AJS.I18n.getText("dialog.deferred.error.loading");

            var visibleDialog = $('.aui-dialog:visible');
            if (!visibleDialog.length)
                pageLoadingIndicator.show();

            deferred.fail(function() {
                pageLoadingIndicator.hide();
                AJS.messages.error(".confluence-page-loading-errors", {
                    body: errorMessage
                });
            });

            AJS.bind("show.dialog", function() {
                pageLoadingIndicator.hide();
            });
        },

        destroy: function() {
            $section.remove(".confluence-page-loading-blanket");
        }
    };
};
