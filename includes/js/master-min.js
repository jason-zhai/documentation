AJS.toInit(function(a){AJS.applySearchPlaceholders=function(b){AJS.log("AJS.applySearchPlaceholders is deprecated. Use AJS.Confluence.Binder.placeholder instead");AJS.Confluence.Binder.placeholder()};a("#messageContainer .confluence-messages").each(function(){var b=this;if(!getCookie(b.id)){a(b).show();a(".message-close-button",b).click(function(){a(b).slideUp();setCookie(b.id,true)})}})});AJS.General={getContextPath:Confluence.getContextPath,getBaseUrl:Confluence.getBaseUrl};(function(){var a={};AJS.I18n={keys:{},get:function(g,b,c){var e=true,d=Confluence.getContextPath()+"/rest/prototype/1/i18n",h={locale:AJS.params.userLocale};if(AJS.$.isArray(g)){for(var f in g){if(!a[f]){e=false}}h.pluginKeys=g}else{e=a[g];d+="/"+g}if(e){if(typeof b=="function"){b(AJS.I18n.keys)}return}AJS.$.ajax({url:d,data:h,dataType:"json",success:function(i){AJS.I18n.load(i);a[g]=true;if(typeof b=="function"){b(i)}},error:function(i,j){AJS.log("Error loading I18n for "+g+":"+j);if(typeof c=="function"){c(j)}}})},load:function(b){AJS.$.extend(AJS.I18n.keys,b)},getText:function(b,c){var d=AJS.params["i18n."+b]||AJS.I18n.keys[b]||b;if(!c){return d}if(arguments.length==2&&c instanceof Array){c.unshift(d)}else{c=Array.prototype.slice.call(arguments,0);c[0]=d}return AJS.format.apply(AJS,c)}}})();(function(){var b=/\S/,c=/^[\s\uFEFF]+/,a=/[\s\uFEFF]+$/;if(b.test("\xA0")){c=/^[\s\uFEFF\xA0]+/;a=/[\s\uFEFF\xA0]+$/}AJS.trim=AJS.trim||function(d){if(!d){return""}return d.replace(c,"").replace(a,"")}})();jQuery.fn.selectableEffects=function(a,b,c){var e=jQuery,d=e(this);if(c){d.data("properties",c)}d.click(function(g){var f=e(this);if(b){b(this,f.data("properties"))}a.find(".selected").removeClass("selected");f.addClass("selected");return AJS.stopEvent(g)});d.hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")})};jQuery.fn.shortenUntil=function(d){var b=jQuery;var c=0;while(!d()&&c<this.length){var a=b(this[c]).text();if(a=="\u2026"){c++;continue}b(this[c]).text(a.replace(/[^\u2026]\u2026?$/,"\u2026"))}return this};