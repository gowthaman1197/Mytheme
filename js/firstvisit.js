!function(e){"use strict";e.fn.firstVisitPopup=function(t){var i,o=e("body"),n=e(this),c=function(e,t){var i=new Date,o="expires=";i.setTime(i.getTime()+31536e6),o+=i.toGMTString(),document.cookie=e+"="+t+"; "+o+"; path=/"},p=function(e){var t=document.cookie.split(";"),i=0,o="";for(i=0;i<t.length;i++){for(o=t[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e+"="))return o.substring(e.length+1,o.length)}return!1},f=function(){i.show(),n.show()},r=function(){i.hide(),n.hide(),c("fvpp"+t.cookieName,"true")};o.append('<div id="fvpp-blackout"></div>'),n.append('<a id="fvpp-close">&#10006;</a>'),i=e("#fvpp-blackout"),p("fvpp"+t.cookieName)?r():f(),e(t.showAgainSelector).on("click",f),o.on("click","#fvpp-blackout, #fvpp-close",r)}}(jQuery);
