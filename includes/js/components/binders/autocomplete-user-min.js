Confluence.Binder.autocompleteUserOrGroup=function(b){b=b||document.body;var c=AJS.$;var a=function(e){if(!e||!e.result){throw new Error("Invalid JSON format")}c.each(e.result,function(f,g){g.key=g.username||g.name;if(g.type==="group"){g.title=g.name;g.link=[];g.thumbnailLink={href:AJS.contextPath()+"/images/icons/avatar_group_48.png"}}});var d=[];d.push(e.result);return d};c.each(["user","group","user-or-group"],function(d,e){c("input.autocomplete-"+e+'[data-autocomplete-user-or-group-bound!="true"]',b).each(function(){var j=c(this).attr("data-autocomplete-user-or-group-bound","true").attr("autocomplete","off");var h=j.attr("data-max")||10,l=j.attr("data-alignment")||"left",k=j.attr("data-dropdown-target"),g=null,i=j.attr("data-target"),f=i&&c(i);if(k){g=c(k)}else{g=c("<div></div>");j.after(g)}if(j.attr("data-resize-to-input")){g.width(j.outerWidth());g.addClass("resize-to-input")}g.addClass("aui-dd-parent autocomplete");j.quicksearch(AJS.REST.getBaseUrl()+"search/"+e+".json",function(){j.trigger("open.autocomplete-user-or-group");if(e==="user"){j.trigger("open.autocomplete-user")}},{makeParams:function(m){return{"max-results":h,query:m}},dropdownPlacement:function(m){g.append(m)},makeRestMatrixFromData:a,addDropdownData:function(m){if(!m.length){var n=j.attr("data-none-message");if(n){m.push([{name:n,className:"no-results",href:"#"}])}}return m},ajsDropDownOptions:{alignment:l,displayHandler:function(m){if(m.restObj&&m.restObj.username){return m.name+" ("+AJS.escapeHtml(m.restObj.username)+")"}return m.name},selectionHandler:function(p,o){if(o.find(".search-for").length){j.trigger("selected.autocomplete-user-or-group",{searchFor:j.val()});if(e==="user"){j.trigger("selected.autocomplete-user",{searchFor:j.val()})}return}if(o.find(".no-results").length){this.hide();p.preventDefault();return}var n=c("span:eq(0)",o).data("properties");if(f){var m=n.restObj.title;if(n.restObj.username){m+=" ("+n.restObj.username+")"}j.val(m);f.val(n.restObj.key)}else{j.val(n.restObj.key)}j.trigger("selected.autocomplete-user-or-group",{content:n.restObj});if(e==="user"){j.trigger("selected.autocomplete-user",{content:n.restObj})}this.hide();p.preventDefault()}}})})});Confluence.Binder.autocompleteUser=function(){}};