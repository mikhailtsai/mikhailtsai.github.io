/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[14],{579:function(xa,ta,h){h.r(ta);var ra=h(0),na=h(323);xa=h(569);var oa=h(121);h=h(492);var ja={},ka=function(fa){function x(y,r){var n=fa.call(this,y,r)||this;n.url=y;n.range=r;n.status=na.a.NOT_STARTED;return n}Object(ra.c)(x,fa);x.prototype.start=function(y){var r=this;"undefined"===typeof ja[this.range.start]&&(ja[this.range.start]={cY:function(n){var f=atob(n),a,b=f.length;n=new Uint8Array(b);for(a=0;a<b;++a)n[a]=f.charCodeAt(a);
f=n.length;a="";for(var e=0;e<f;)b=n.subarray(e,e+1024),e+=1024,a+=String.fromCharCode.apply(null,b);r.cY(a,y)},vNa:function(){r.status=na.a.ERROR;y({code:r.status})}},window.external.notify(this.url),this.status=na.a.STARTED);r.ZJ()};return x}(xa.ByteRangeRequest);xa=function(fa){function x(y,r,n,f){y=fa.call(this,y,n,f)||this;y.tE=ka;return y}Object(ra.c)(x,fa);x.prototype.KB=function(y,r){return y+"?"+r.start+"&"+(r.stop?r.stop:"")};return x}(oa.a);Object(h.a)(xa);Object(h.b)(xa);ta["default"]=
xa}}]);}).call(this || window)