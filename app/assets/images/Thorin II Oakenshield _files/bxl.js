try{
window.advBidxc = window.advBidxc || {};
window.advBidxc.isLoaded = true;
window.advBidxc.configSettings = {"provider":{"56":true,"59":true,"159":true,"175":true,"109":true,"80":true,"97":true,"178":true,"157":true,"99":true,"10000":true,"70":true},"info":{"cid":"8CUDYP2MO","iType":"BXL","servname":"c8-web-18","sver":"2019051409_601"},"features":{"enGdpr":1},"timeout":[],"cookieUrl":"https:\/\/hbx.media.net\/checksync.php?","_gdpr":"0"};
!function(){"use strict";function e(e){return"[object Array]"===Object.prototype.toString.call(e)}function n(e){return void 0!==e&&""!==e&&null!==e}function o(e){return"function"==typeof e}function t(t,r,i){return o(r)&&(i=r,r=[]),!!(n(t)&&e(r)&&o(i))&&void(u[t]=u[t]||{deps:r,callback:i})}function r(e,n){var t,i=[];for(var d in e)if(e.hasOwnProperty(d)){if(t=e[d],"object"==typeof t||"undefined"==typeof t){i.push(t);continue}if(void 0!==f[t])i.push(f[t]);else{if(c[t]===!0)throw new Error("Cyclic dependency for: "+t);if(!u[t]||!u[t].deps)throw new Error("Module not defined: "+t);c[t]=!0,f[t]=r(u[t].deps,u[t].callback),c[t]=!1,i.push(f[t])}}return o(n)?n.apply(this,i):i}var i,f={},u={},c={};i="undefined"!=typeof global&&"object"==typeof module?global:window,i._mR=i._mR||r,i._mD=i._mD||t}();_mD("mnrp",[window,document,{}],function(e,n){"use strict";function t(e){u=e}function r(e){p=e}function o(e){m=e}function i(e){"undefined"==typeof e.logLevel&&(e={logLevel:3,errorVal:e}),e.logLevel>=3&&d[e.logLevel-1].push(e)}function l(){var t,r=0;for(t=0;t<h;t++)r+=d[t].length;if(0!==r){var o,i,l,s,f=new Image,c="https:"===n.location.protocol?"https://hbx-lg.media.net/nerrping.php":"http://hbx-lg.media.net/nerrping.php",g="",y=0;for(t=h-1;t>=0;t--){for(r=d[t].length,o=0;o<r;){if(s=1===t?d[t][o]:{logLevel:d[t][o].logLevel,errorVal:{name:d[t][o].errorVal.name,type:u,svr:p,servname:m,message:d[t][o].errorVal.message,line:d[t][o].errorVal.lineNumber,description:d[t][o].errorVal.description,stack:d[t][o].errorVal.stack}},l=a(s),!(l.length+g.length<=1200)&&g.length){y=1;break}0!==g.length&&(g+=","),g+=l,d[t].shift(),r--}if(y)break}g=encodeURIComponent("["+g+"]"),i=c+"?d="+g+"&userAgent="+v+"&requrl="+encodeURIComponent(e.location.href)+"&img=logo.gif",f.src=i}}function a(e){if("object"==typeof JSON&&"function"==typeof JSON.stringify)return JSON.stringify(e)}function s(e,n,t){this.name=e,this.message=n,this.logLevel=t}function f(){var e,n,t=Array.prototype.slice.call(arguments),r=[],o=t.length,l=null,a=null;"object"==typeof t[o-1]&&t[o-1].constructor===s&&(e=t[o-1],o--),"function"==typeof t[0]?(n=t.shift(),o--):(l=t.shift(),n=t.shift(),o-=2),r=t.slice(0,o);try{return n.apply(l,r)}catch(f){return e&&(f.name=e.name+" ("+f.name+")",f.message=e.message+" ("+f.message+")",a=e.logLevel),i({logLevel:a||3,errorVal:f}),new s}}function c(n,t){var r;if("function"==typeof n)return r=function(){f(n)},e.setTimeout(r,t)}var g,u="",p="",m="",h=3,v=encodeURIComponent(navigator.userAgent),d=[];for(g=0;g<h;g++)d[g]=[];var y=function(){l(),c(y,2500)};return e.addEventListener?e.addEventListener("load",y,!1):e.attachEvent("onload",y),{execSafe:f,pushError:i,setType:t,setCodeVersion:r,setServerName:o,setTimeout:c}});_mD("ckc",function(){"use strict";return{GET:{}}});_mD("cc",function(){"use strict";return{PROVIDER_IDS:{},AUTO_REFRESH:{},FEATURE:{},HBINFO:{},ID:{},FAILOVER:{},LOGS:{},SERVICE:{},NATIVE:{},NG_PREFIRE:{}}});_mD("res",function(){"use strict";return{Event:{},Clock:{},EventType:{},Macro:{},Url:{},Bidder:{},CSync:{},LOGS:{},FEEDBACK:{},TemplateParams:{}}});_mD("gsp",["_","res"],function(n,e){"use strict";function t(e){I={},m=a(e),n.XZ(m)&&(d(),I.versionBit===V&&(c(),f()))}function r(){var e=!0;return n.a(D.purposes,function(t){n.e(I.purposes,t)||(e=!1)}),n.e(I.allowedVendors,D.mnetVendorId)&&e}function a(e){var t=o(e);return n.XZ(t)?s(t):null}function o(n){try{return atob(n.replace(/-/g,"+").replace(/_/g,"/"))}catch(e){return null}}function s(e){var t="";return n.a(e,function(r,a){var o=e.charCodeAt(a).toString(2),s=(8-o.length)%8;o.length<0||(t+=n.wc("",s),t+=o)}),t}function u(n){return h[n]}function i(n,e){var t=m.slice(0,n);return m=m.slice(n,m.length),e?t:parseInt(t,2)}function d(){n.a(h.metaData,function(n,e){I[e]=i(n)})}function c(){var e=[],t=i(u("purposes"),!0);n.a(t,function(n,t){"1"===n&&e.push(parseInt(t)+1)}),I.purposes=e}function f(){var n=i(u("maxVendorId")),e=i(u("encodingType"));return 1===e?void l(n):void v(n)}function l(e){for(var t=i(u("defaultConsent")),r=i(u("numEntries")),a=[],o={},s=1;s<=e;s++)o[s]=t;for(var d=1;d<=r;d++){var c=i(u("singleOrRange"));1===c?g(o):p(o)}n.a(o,function(n,e){0!==n&&a.push(e)}),I.allowedVendors=a}function p(n){var e=i(u("singleVendorId"));n[e]^=1}function g(n){var e=i(u("startVendorId")),t=i(u("endVendorId"));for(e;e<=t;e++)n[e]^=1}function v(e){var t=i(e,!0),r=[];n.a(t,function(n,e){"1"===n&&r.push(parseInt(e)+1)}),I.allowedVendors=r}var m,V=1,I={},D={},h={};return h.metaData={},h.metaData.versionBit=6,h.metaData.createdBit=36,h.metaData.lastUpdated=36,h.metaData.consentManagerId=12,h.metaData.cpmVersion=12,h.metaData.consentScreen=6,h.metaData.consentLanguage=12,h.metaData.vendorListVersion=12,h.purposes=24,h.maxVendorId=16,h.encodingType=1,h.defaultConsent=1,h.numEntries=12,h.singleOrRange=1,h.singleVendorId=16,h.startVendorId=16,h.endVendorId=16,D.mnetVendorId="142",D.purposes=[1,2],{parseString:t,isMediaNetVendorAllowed:r}});_mD("_",[document,window,"mnrp"],function(t,e,n){"use strict";function r(t,e,n){var r="evt_"+(e||"gbl");T[r]=T[r]||{},T[r][t]=T[r][t]||[],T[r][t].push(n)}function o(t,e){if(O(t)){w(e)||(e=function(t,e){return!!t});var n,r=0,o=t.length;if(E(t)){for(;r<o;r++)if(n=e.call(t[r],t[r],r),O(n))return n}else for(r in t)if(t.hasOwnProperty(r)&&(n=e.call(t[r],t[r],r),O(n)))return n}}function i(t,e){function n(t){return"object"!=typeof t||t.isUrlEntity!==!1}var r,o,i="",a=!!e,c=a?e:t;for(r in c)if(c.hasOwnProperty(r)&&(a&&(r=e[r]),S(t[r])&&n(t[r]))){if(E(t[r])){for(var u in t[r])i+=y(r+"[]",t[r][u]);continue}o="object"==typeof t[r]?t[r].value:t[r],i+=y(r,o)}return i}function a(t,e,n,r){try{var o=D(t),i=k.getInstance().hasDOMLoaded();if(o||!r&&i)return void n.call(null,o||!1);setTimeout(h(a,[t,e,n,r]),e)}catch(c){setTimeout(h(a,[t,e,n,r]),e)}}function c(t,e){return!!E(t)&&(o(t,function(t){if(t===e)return!0})||!1)}function u(e){return e?void(this.frame=e.document.createElement("iframe")):void(this.frame=t.createElement("iframe"))}function l(t,e,n,r,o){var i;if(n=n||D("@body:0"),!n)return a("@body:0",100,h(l,[t,e,null,r,o]),!1),null;if(i=(new u).set("marginWidth",0).set("marginHeight",0).set("scrolling","no").set("frameBorder",0).set("height",0).set("width",0).set("id",t).overrideStyle("display:none !important;").done(),r)for(var c in r)i[c]=r[c];return n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),e&&N(i,e),w(o)&&(i.onload=o),i}function s(t,e){if(O(t)){var n=0,r=t.length;if(E(t))for(;n<r;n++)e.call(t[n],t[n],n,r);else for(n in t)t.hasOwnProperty(n)&&e.call(t[n],t[n],n,0)}}function f(t){return S(t)?encodeURIComponent(t):""}function d(e,n,r){if(w(t.getElementsByClassName))return e.getElementsByClassName(n);r=r||"*";var o,i,a=new RegExp("(^|\\s)"+n+"(\\s|$)"),c=e||t,u="*"===r&&c.all?c.all:c.getElementsByTagName(r),l=[],s=u.length;for(i=0;i<s;i++)o=u[i],a.test(o.className)&&l.push(o);return l}function p(t){try{var e=t.contentWindow||t.contentDocument,n=e&&(e.document||e)||!1;return[n,e,null]}catch(r){return[!1,null,"Access Denied"]}}function v(t){if(w(Object.keys))return Object.keys(t);var e=[];return s(t,function(t,n){e.push(n)}),e}function h(t,e,n){return n=n||null,e=e||[],function(){var r=e.slice(0);arguments.length>0&&Array.prototype.push.apply(r,Array.prototype.slice.call(arguments)),t.apply(n,r)}}function m(t,e){var r=t;return"function"==typeof t?h(n.execSafe,[e||null,t]):r}function y(t,e){return S(t)?"&"+t+"="+e:""}function g(){var t=!1;try{"object"==typeof e.top&&"object"==typeof e&&(t=e.top!=e)}catch(n){t=!0}return t}function E(t){return"[object Array]"===Object.prototype.toString.call(t)}function b(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function w(t){return"function"==typeof t}function O(t){switch(typeof t){case"string":return void 0!==t&&""!==t&&null!==t;case"object":return null!==t;case"number":case"boolean":return!0;default:return!1}}function S(t){return O(t)}function j(n,r){if(/complete|loaded/.test(t.readyState))return void n();if(r||x.addEvent(e,"load",n),!r&&t.addEventListener)return void x.addEvent(t,"DOMContentLoaded",n);var o=t.documentElement;if(o&&o.doScroll)try{o.doScroll("left"),n()}catch(i){setTimeout(h(j,[n,!0]),50)}}function B(e,n,o){var i;if(S(e)){if("http"!==e.substr(0,4)){var a="https:"===t.location.protocol;e=(a?"https:":"http:")+e}i="_mN_advBid_"+o,r("prvReq",o,n);var c='<!DOCTYPE html><html><head><script type="text/javascript">function makeCall(){var scriptElement = document.createElement(\'script\'), tag = document.getElementsByTagName("script")[0], status = false; scriptElement.type = \'text/javascript\'; scriptElement.async = true; scriptElement.onload = scriptElement.onreadystatechange = function () { if (!status && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { status = true; window.parent._mR([\'_\'], function(util){util.WZ("prvReq", "'+o+'", false, window);});}};scriptElement.src = "'+e+'"; tag.parentNode.insertBefore(scriptElement, tag);}<\/script></head><body onload="makeCall()"></body></html>',u=l(i,c);return p(u)[1]}}function _(t,e,n){for(n=n||"0",t+="";t.length<e;)t+=n;return t}function D(e){try{var n,r=e.charAt(0),o=e.substr(1).split(":"),i=o[0],a=S(o[1])&&parseInt(o[1],10);switch(r){case"@":n=t.getElementsByTagName(i);break;case"#":n=t.getElementById(i);break;case"$":n=t.getElementsByName(i);break;case".":n=d(t,i);break;default:n=t.getElementById(e)}return a===!1?n:n[a]}catch(c){return null}}function L(t){var e={};this.input=function(t,n){return e[t]=n,this},this.get=function(t){return O(e[t])?e[t]:""},this.loadFrom=function(t){return t&&(e=t),this},this.freeze=function(){return e},this.deleteProperty=function(t){delete e[t]},t&&(e=t)}function C(t,e,r,o){o=o||("object"==typeof r?r:{}),r="boolean"==typeof r&&r;var i="evt_"+(e||"gbl");if(void 0!==T[i]){var a,c,u=T[i][t]||[],l={src:e};for(T.evt_gbl&&T.evt_gbl.gblEvt&&n.execSafe(T.evt_gbl.gblEvt[0],l,o),c=0,a=u.length;c<a;c++)w(u[c])&&n.execSafe(u[c],l,o);!r&&u.length>0&&(T[i][t]=[])}}function N(e,r){if(e){var o,i=p(e);try{if(null!==i[2])throw i[2];o=i[0],o&&(o.open(),o.write(r),o.close())}catch(a){var c="javascript:var d=document.open();d.domain='"+t.domain+"';";e.src=c+"void(0);";try{var u=e.contentWindow.document;u.write(r),u.close()}catch(l){e.src=c+'d.write("'+r.replace(/"/g,'\\"')+'");d.close();',n.pushError(l)}}}}var T={},k=function(){function e(){function e(){var t;for(o=!0;i.length>0;)t=i.shift(),t.call(null);i=[]}function r(){n.execSafe(e)}var i=[];this.onDOMLoad=function(t){return i.push(t),1!==i.length||o?void(o&&r()):void j(r)},this.hasDOMLoaded=function(){return o},this.isDOMInteractive=function(){return o||/interactive/.test(t.readyState)}}var r=null,o=!1;return{getInstance:function(){return null===r&&(r=new e),r}}}(),x={addEvent:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n),t=null},removeEvent:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n):t.detachEvent&&t.detachEvent("on"+e,n),t=null}};return u.prototype.set=function(t,e){return this.frame[t]=e,this},u.prototype.setStyle=function(t){var e;for(e in t)t.hasOwnProperty(e)&&(this.frame.style[e]=t[e]);return this},u.prototype.overrideStyle=function(t){return this.frame.style.cssText=t,this},u.prototype.done=function(){return this.frame},{DOMLoadObserver:k,eventLib:x,l:r,W:o,J:i,G:a,e:c,U:u,F:l,a:s,y:f,D:d,j:p,N:v,H:h,Wa:m,wZ:y,inFrame:g(),Qe:E,i:b,gb:w,XZ:O,ZT:S,lW:B,wc:_,TE:D,A:L,WZ:C,Jn:N}});_mD("em",[document,window,window.advBidxc.configSettings,"cc","_","gsp"],function(n,r,t,e,u,o){"use strict";function i(){return G("enCkOl")}function c(){return t&&t.cookieUrl}function f(){return v("cid")}function a(){return D("csdelay")}function d(){return A?s()?"1":"0":"2"}function p(){return V}function s(){return T}function l(){return v("iType")}function g(){return t&&t.provider}function h(){var r="https:"==n.location.protocol;return r?"https":"http"}function v(n){return t&&t.info&&t.info[n]}function m(){var n=r.location.href||"";try{r.top.location.href&&(n=r.top.location.href)}catch(t){}return n}function Z(){return m()}function w(){var t,e=u.ZT(n.referrer)?n.referrer:"",o=u.inIframe;if(!o)return e;try{return t=r.parent.document.referrer,u.ZT(t)?t:""}catch(i){}}function y(){return v("sver")}function b(){return v("servname")}function D(n){return t&&t.timeout&&t.timeout[n]}function G(n){return u.XZ(n)&&u.XZ(t.features)&&1===t.features[n]}function P(){return Z().indexOf("force_gdpr=1")!==-1}function k(){return G("enGdpr")}function C(){G("fgdprcon")}function S(){return!!k()&&(t&&"1"===t._gdpr)}function _(){var n=!1;return!!P()||(k()&&(n=X||S()),n)}function x(n){return R()||(X=n),!0}function M(n){return V=n,A=!0,o.parseString(n),o.isMediaNetVendorAllowed()?(T=!0,!0):(T=!1,!0)}function O(n){return u.XZ(V)||(A=!0,T=n),!0}function R(){return v("dispubgdpr")}var T,V,X,A=!1;return{doCookieSyncOnload:i,getCheckSyncUrl:c,V:f,G:a,Y:d,u:p,Qn:s,e:l,getProviderMap:g,wb:h,cV:w,pN:y,Zt:b,Zz:C,gc:S,xm:_,setGDPRApplicable:x,setGDPRConsent:M,MH:O,shouldDisablePublisherGDPR:R}});_mD("ckm",[document,window,"ckc","res","_","em"],function(n,t,i,r,c,u){"use strict";function e(){g||setTimeout(function(){m&&l(),g=!1},100),g=!0}function f(n,t,i){var r=n.call(t,i);return e(),r}function o(n,t){return c.Wa(c.H(f,[n,t]))}function a(t,i,r,u){var e={};c.ZT(i)&&(e.src=i),c.F(t,r,n.body,e,u)}function p(n){var t=(new c.A).input("vsSync",1).input("cs",1).input("hb",1).input("cv",37).input("ndec",1).input("cid",u.V()).input("prvid",c.y(n.join(","))).input("refUrl",c.y(u.cV()));return"https"===h&&t.input("https",1),u.gc()&&(t.input("gdpr",1),t.input("gdprconsent",u.Y())),t.freeze()}function s(n){if(n.length>0){var t=p(n),i=k.iframeSrc+c.J(t);a(k.iframeId,i,null)}}function v(n){var t=[];0!==n.length&&(c.a(n,function(n){t.push(n)}),s(t))}function d(){var n=u.getProviderMap();if(c.XZ(n)&&!c.i(n))return c.N(n)}function l(){m=!0;var n=d();(c.XZ(n)||c.Qe(n))&&v(n)}var m,g=!1,h=u.wb(),y=u.getCheckSyncUrl(),k={iframeId:"_mN_cksync_0",iframeSrc:y};return{init:l,getCallback:o}});_mD("init",[window,"_","em","ckm"],function(i,t,e,n){"use strict";function d(){var d=e.G();return e.doCookieSyncOnload()?void t.eventLib.addEvent(i,"load",n.init):t.XZ(d)&&d>0?void setTimeout(n.init,d):void n.init()}function c(){e.Zz()&&i.advBidxc.consentExists(!0),d()}return i.advBidxc.setGDPRApplicable=n.getCallback(e.setGDPRApplicable,i.advBidxc),i.advBidxc.setGDPRConsent=n.getCallback(e.setGDPRConsent,i.advBidxc),i.advBidxc.consentExists=n.getCallback(e.MH,i.advBidxc),{init:c}}),window._mR(["mnrp","em","init"],function(i,t,e){"use strict";i.setType(t.e()),i.setCodeVersion(t.pN()),i.setServerName(t.Zt()),e.init()});} catch (err) {
    window.advBidxc.error = err;
    window.advBidxc.catchConstants = {"name":"BidexchageLite","type":"BXL","svr":"2019051409_601","servname":"c8-web-18","message":"BidexchageLite encountered an error","path":"\/nerrping.php","customerId":"8CUDYP2MO","hostName":"https:\/\/hbx-lg.media.net","get":{"userAgent":"userAgent","requrl":"requrl","cid":"cid","img":"img","d":"d"}};!function(e,r){"use strict";r=r||{},r.get=r.get||{},e=e||{};var a={},o="",t=encodeURIComponent(window.navigator.userAgent);o=e.stack?e.stack:e.s?e.s:e.stacktrace?e.stacktrace:"No StackTrace";var n="";for(var s in e)e.hasOwnProperty&&e.hasOwnProperty(s)&&(n+=s+" : '"+e[s]+"',");a.logLevel=3,a.errorVal={},a.errorVal.name=r.name,a.errorVal.type=r.type,a.errorVal.svr=r.svr,a.errorVal.servname=r.servname,a.errorVal.message=r.message,a.errorVal.stack=o,a.errorVal.objTrace=n;var c="";c="object"==typeof JSON&&"undefined"!=typeof JSON.stringify?JSON.stringify(a):a.errorVal.name+"@#@"+a.errorVal.type+"@#@"+o+"@#@"+n,c=encodeURIComponent("["+c+"]");var g=r.hostName+r.path+"?"+r.get.userAgent+"="+t+"&"+r.get.requrl+"="+encodeURIComponent(window.location.href)+"&"+r.get.cid+"="+r.customerId+"&"+r.get.img+"=logo.gif&"+r.get.d+"="+c,i=new Image;i.src=g}(window.advBidxc.error,window.advBidxc.catchConstants);};