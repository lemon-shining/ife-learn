!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=f.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t={},n=e.createElement,r=e.createDocumentFragment,o=r();e.createElement=function(e){f.shivMethods||n(e);var i;return i=t[e]?t[e].cloneNode():v.test(e)?(t[e]=n(e)).cloneNode():n(e),i.canHaveChildren&&!p.test(e)?o.appendChild(i):i},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t[e]=n(e),o.createElement(e),'c("'+e+'")'})+");return n}")(f,o)}function o(e){var t;return e.documentShived?e:(f.shivCSS&&!u&&(t=!!n(e,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),m||(t=!r(e)),t&&(e.documentShived=t),e)}function a(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+i().join("|")+")$","i"),a=[];r--;)t=n[r],o.test(t.nodeName)&&a.push(t.applyElement(l(t)));return a}function l(e){for(var t,n=e.attributes,i=n.length,r=e.ownerDocument.createElement(y+":"+e.nodeName);i--;)t=n[i],t.specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function c(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+y+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[r]=t.join("}");return n.join("{")}function s(e){for(var t=e.length;t--;)e[t].removeNode()}function d(e){var t,i,r=e.namespaces,o=e.parentWindow;return!E||e.printShived?e:(void 0===r[y]&&r.add(y),o.attachEvent("onbeforeprint",function(){for(var r,o,l,s=e.styleSheets,d=[],u=s.length,m=Array(u);u--;)m[u]=s[u];for(;l=m.pop();)if(!l.disabled&&g.test(l.media)){for(r=l.imports,u=0,o=r.length;o>u;u++)m.push(r[u]);try{d.push(l.cssText)}catch(h){}}d=c(d.reverse().join("")),i=a(e),t=n(e,d)}),o.attachEvent("onafterprint",function(){s(i),t.removeNode(!0)}),e.printShived=!0,e)}var u,m,h=e.html5||{},p=/^<|^(?:button|form|map|select|textarea|object|iframe)$/i,v=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;!function(){var n=t.createElement("a");n.innerHTML="<xyz></xyz>",u="hidden"in n,u&&"function"==typeof injectElementWithStyles&&injectElementWithStyles("#modernizr{}",function(t){t.hidden=!0,u="none"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).display}),m=1==n.childNodes.length||function(){try{t.createElement("a")}catch(e){return!0}var n=t.createDocumentFragment();return void 0===n.cloneNode||void 0===n.createDocumentFragment||void 0===n.createElement}()}();var f={elements:h.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:h.shivCSS!==!1,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:o};e.html5=f,o(t);var g=/^$|\b(?:all|print)\b/,y="html5shiv",E=!m&&function(){var n=t.documentElement;return void 0!==t.namespaces&&void 0!==t.parentWindow&&void 0!==n.applyElement&&void 0!==n.removeNode&&void 0!==e.attachEvent}();f.type+=" print",f.shivPrint=d,d(t)}(this,document);