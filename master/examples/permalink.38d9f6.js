!function(e){function t(t){for(var o,i,s=t[0],l=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],n[i]&&d.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(t);d.length;)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={11:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;a.push([346,0]),r()}({319:function(e,t,r){"use strict";r.r(t);r(472);var o=r(1),n=r(49),a={LINE_STRING:"LineString",POINT:"Point",POLYGON:"Polygon"},i=r(84),s=r(2),l=r(24),u=r(107),c=r(10),p=r(81),d=r(302),g=r(20),h=r(58),y=r(123),f=r(135),_=r(134),v=r(44),m=r(45),S=r(106),C=r(47),w=r(46),P=r(19),L=r(143),b=function e(t){d.a.call(this);var r=void 0!==t?t:{};this.accuracy_=void 0!==r.accuracy?r.accuracy:e.ACCURACY_,this.encodeStyles_=void 0===r.encodeStyles||r.encodeStyles,this.propertiesFunction_=void 0!==r.properties?r.properties:e.defaultPropertiesFunction_,this.setStyle_=void 0===r.setStyle||r.setStyle,this.prevX_=0,this.prevY_=0,e.LegacyProperties_=void 0!==r.propertiesType&&r.propertiesType};s.d(b,d.a),b.StyleTypes_={LineString:a.LINE_STRING,Point:a.POINT,Polygon:a.POLYGON,MultiLineString:a.LINE_STRING,MultiPoint:a.POINT,MultiPolygon:a.POLYGON},b.LegacyProperties_={},b.prototype.readFeature,b.prototype.readFeatures,b.prototype.readGeometry,b.prototype.writeFeature,b.prototype.writeFeatures,b.prototype.writeGeometry,b.CHAR64_=".-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz",b.ACCURACY_=.1,b.defaultPropertiesFunction_=function(e){return e.getProperties()},b.encodeSignedNumber_=function(e){var t=e<<1;return e<0&&(t=~t),b.encodeNumber_(t)},b.encodeNumber_=function(e){for(var t="";e>=32;)t+=b.CHAR64_.charAt(32|31&e),e>>=5;return t+=b.CHAR64_.charAt(e)},b.encodeStyles_=function(e,t,r){var n=b.StyleTypes_[t];o.a.assert(void 0!==n);for(var i=0;i<e.length;++i){var s=e[i],l=s.getFill(),u=s.getImage(),c=s.getStroke(),p=s.getText();n==a.POLYGON?null!==l&&b.encodeStylePolygon_(l,c,r):n==a.LINE_STRING?null!==c&&b.encodeStyleLine_(c,r):n==a.POINT&&null!==u&&b.encodeStylePoint_(u,r),null!==p&&b.encodeStyleText_(p,r)}},b.encodeStyleLine_=function(e,t){b.encodeStyleStroke_(e,t)},b.encodeStylePoint_=function(e,t){if(e instanceof S.a){var r=e.getRadius();t.length>0&&t.push("'"),t.push(encodeURIComponent("pointRadius*"+r));var o=e.getFill();null!==o&&b.encodeStyleFill_(o,t);var n=e.getStroke();null!==n&&b.encodeStyleStroke_(n,t)}},b.encodeStylePolygon_=function(e,t,r){b.encodeStyleFill_(e,r),null!==t&&b.encodeStyleStroke_(t,r)},b.encodeStyleFill_=function(e,t,r){var n=void 0!==r?r:"fillColor",a=e.getColor();if(null!==a){o.a.assert(Array.isArray(a),"only supporting fill colors");var s=u.a(a);o.a.assert(Array.isArray(s),"fill color must be an array");var l=i.a.rgbArrayToHex(s);t.length>0&&t.push("'"),t.push(encodeURIComponent(n+"*"+l))}},b.encodeStyleStroke_=function(e,t){var r=e.getColor();if(null!==r){o.a.assert(Array.isArray(r));var n=u.a(r);o.a.assert(Array.isArray(n),"only supporting stroke colors");var a=i.a.rgbArrayToHex(n);t.length>0&&t.push("'"),t.push(encodeURIComponent("strokeColor*"+a))}var s=e.getWidth();void 0!==s&&(t.length>0&&t.push("'"),t.push(encodeURIComponent("strokeWidth*"+s)))},b.encodeStyleText_=function(e,t){var r=e.getFont();if(void 0!==r){var o=r.split(" ");o.length>=3&&(t.length>0&&t.push("'"),t.push(encodeURIComponent("fontSize*"+o[1])))}var n=e.getFill();null!==n&&b.encodeStyleFill_(n,t,"fontColor")},b.readLineStringGeometry_=function(e){o.a.assert("l("===e.substring(0,2)),o.a.assert(")"==e[e.length-1]),e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e),r=new h.a(null);return r.setFlatCoordinates(g.a.XY,t),r},b.readMultiLineStringGeometry_=function(e){o.a.assert("L("===e.substring(0,2)),o.a.assert(")"==e[e.length-1]);for(var t=[],r=[],n=(e=e.substring(2,e.length-1)).split("'"),a=0,i=n.length;a<i;++a)t=this.decodeCoordinates_(n[a],t),r[a]=t.length;var s=new y.a(null);return s.setFlatCoordinates(g.a.XY,t,r),s},b.readPointGeometry_=function(e){o.a.assert("p("===e.substring(0,2)),o.a.assert(")"==e[e.length-1]),e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e);o.a.assert(2===t.length);var r=new v.a(null);return r.setFlatCoordinates(g.a.XY,t),r},b.readMultiPointGeometry_=function(e){o.a.assert("P("===e.substring(0,2)),o.a.assert(")"==e[e.length-1]),e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e),r=new f.a(null);return r.setFlatCoordinates(g.a.XY,t),r},b.readPolygonGeometry_=function(e){o.a.assert("a("===e.substring(0,2)),o.a.assert(")"==e[e.length-1]);for(var t=[],r=[],n=(e=e.substring(2,e.length-1)).split("'"),a=0,i=n.length;a<i;++a){var s=(t=this.decodeCoordinates_(n[a],t)).length;0===a?(t[s++]=t[0],t[s++]=t[1]):(t[s++]=t[r[a-1]],t[s++]=t[r[a-1]+1]),r[a]=s}var l=new m.b(null);return l.setFlatCoordinates(g.a.XY,t,r),l},b.readMultiPolygonGeometry_=function(e){o.a.assert("A("===e.substring(0,2)),o.a.assert(")"==e[e.length-1]);for(var t=[],r=[],n=(e=e.substring(2,e.length-1)).split(")("),a=0,i=n.length;a<i;++a)for(var s=n[a].split("'"),l=r[a]=[],u=0,c=s.length;u<c;++u){var p=(t=this.decodeCoordinates_(s[u],t)).length;0===u?(t[p++]=t[0],t[p++]=t[1]):(t[p++]=t[l[u-1]],t[p++]=t[l[u-1]+1]),l[u]=p}var d=new _.a(null);return d.setFlatCoordinates(g.a.XY,t,r),d},b.setStyleInFeature_=function(e,t){if(""!=e){var r=b.getStyleProperties_(e,t),o=r.fillColor,n=r.fontSize,a=r.fontColor,i=r.pointRadius,s=r.strokeColor,l=r.strokeWidth,u=null;void 0!==o&&(u=new C.a({color:o}));var c=null;void 0!==s&&void 0!==l&&(c=new w.a({color:s,width:l}));var p=null;void 0!==i&&(p=new S.a({radius:i,fill:u,stroke:c}),u=c=null);var d=null;void 0!==n&&void 0!==a&&(d=new L.a({font:n+" sans-serif",fill:new C.a({color:a})}));var g=new P.c({fill:u,image:p,stroke:c,text:d});t.setStyle(g)}},b.setStyleProperties_=function(e,t){var r=b.getStyleProperties_(e,t),o=t.getGeometry();if(o instanceof v.a?r.isLabel||r[n.a.IS_TEXT]?(delete r.strokeColor,delete r.fillColor):(delete r.fontColor,delete r.fontSize):(delete r.fontColor,o instanceof h.a&&(delete r.fillColor,delete r.fillOpacity)),r.fontSize){var a=parseFloat(r.fontSize);-1!==r.fontSize.indexOf("px")&&(a=Math.round(a/1.333333)),r.fontSize=a}var i={};for(var s in r){var l=r[s];b.LegacyProperties_[s]?i[b.LegacyProperties_[s]]=l:i[s]=l}t.setProperties(i)},b.castValue_=function(e,t){var r=[n.a.ANGLE,n.a.OPACITY,n.a.SIZE,n.a.STROKE,"pointRadius","strokeWidth"],o=[n.a.IS_CIRCLE,n.a.IS_RECTANGLE,n.a.IS_TEXT,n.a.SHOW_MEASURE,n.a.SHOW_LABEL,"isCircle","isRectangle","isLabel","showMeasure","showLabel"];return c.f(r,e)?+t:c.f(o,e)?"true"===t:t},b.getStyleProperties_=function(e,t){for(var r=e.split("'"),n={},a=0;a<r.length;++a){var i=decodeURIComponent(r[a]).split("*");o.a.assert(2===i.length);var s=i[0],l=i[1];n[s]=b.castValue_(s,l)}return n},b.writeLineStringGeometry_=function(e){o.a.assertInstanceof(e,h.a);var t=e.getFlatCoordinates(),r=e.getStride(),n=t.length;return"l("+this.encodeCoordinates_(t,r,0,n)+")"},b.writeMultiLineStringGeometry_=function(e){o.a.assertInstanceof(e,y.a);for(var t=e.getEnds(),r=t.length,n=e.getFlatCoordinates(),a=e.getStride(),i=0,s=["L("],l=0;l<r;++l){var u=t[l],c=this.encodeCoordinates_(n,a,i,u);0!==l&&s.push("'"),s.push(c),i=u}return s.push(")"),s.join("")},b.writePointGeometry_=function(e){o.a.assertInstanceof(e,v.a);var t=e.getFlatCoordinates(),r=e.getStride(),n=t.length;return"p("+this.encodeCoordinates_(t,r,0,n)+")"},b.writeMultiPointGeometry_=function(e){o.a.assertInstanceof(e,f.a);var t=e.getFlatCoordinates(),r=e.getStride(),n=t.length;return"P("+this.encodeCoordinates_(t,r,0,n)+")"},b.encodeRings_=function(e,t,r,o,n){for(var a=o.length,i=0;i<a;++i){var s=o[i]-t,l=this.encodeCoordinates_(e,t,r,s);0!==i&&n.push("'"),n.push(l),r=o[i]}return r},b.writePolygonGeometry_=function(e){o.a.assertInstanceof(e,m.b);var t=e.getFlatCoordinates(),r=e.getStride(),n=e.getEnds(),a=["a("];return b.encodeRings_.call(this,t,r,0,n,a),a.push(")"),a.join("")},b.writeMultiPolygonGeometry_=function(e){o.a.assertInstanceof(e,_.a);for(var t=e.getFlatCoordinates(),r=e.getStride(),n=e.getEndss(),a=n.length,i=0,s=["A"],l=0;l<a;++l){var u=n[l];s.push("("),i=b.encodeRings_.call(this,t,r,i,u,s),s.push(")")}return s.join("")},b.GEOMETRY_READERS_={P:b.readMultiPointGeometry_,L:b.readMultiLineStringGeometry_,A:b.readMultiPolygonGeometry_,l:b.readLineStringGeometry_,p:b.readPointGeometry_,a:b.readPolygonGeometry_},b.GEOMETRY_WRITERS_={MultiLineString:b.writeMultiLineStringGeometry_,MultiPoint:b.writeMultiPointGeometry_,MultiPolygon:b.writeMultiPolygonGeometry_,LineString:b.writeLineStringGeometry_,Point:b.writePointGeometry_,Polygon:b.writePolygonGeometry_},b.prototype.decodeCoordinates_=function(e,t){for(var r=e.length,o=0,n=void 0!==t?t:[],a=n.length;o<r;){var i=void 0,s=0,l=0;do{l|=(31&(i=b.CHAR64_.indexOf(e.charAt(o++))))<<s,s+=5}while(i>=32);var u=1&l?~(l>>1):l>>1;this.prevX_+=u,s=0,l=0;do{l|=(31&(i=b.CHAR64_.indexOf(e.charAt(o++))))<<s,s+=5}while(i>=32);var c=1&l?~(l>>1):l>>1;this.prevY_+=c,n[a++]=this.prevX_*this.accuracy_,n[a++]=this.prevY_*this.accuracy_}return n},b.prototype.encodeCoordinates_=function(e,t,r,o){for(var n="",a=r;a<o;a+=t){var i=e[a],s=e[a+1];i=Math.floor(i/this.accuracy_),s=Math.floor(s/this.accuracy_);var l=i-this.prevX_,u=s-this.prevY_;this.prevX_=i,this.prevY_=s,n+=b.encodeSignedNumber_(l)+b.encodeSignedNumber_(u)}return n},b.prototype.readFeatureFromText=function(e,t){o.a.assert(e.length>2),o.a.assert("("===e[1]),o.a.assert(")"===e[e.length-1]);var r=e.indexOf("~"),n=r>=0?e.substring(0,r)+")":e,a=this.readGeometryFromText(n,t),i=new l.a(a);if(r>=0){var s=e.substring(r+1,e.length-1),u=(r=s.indexOf("~"))>=0?s.substring(0,r):s;if(""!=u)for(var c=u.split("'"),p=0;p<c.length;++p){var d=decodeURIComponent(c[p]).split("*");o.a.assert(2===d.length);var g=d[0],h=d[1];!this.setStyle_&&b.LegacyProperties_[g]&&(g=b.LegacyProperties_[g]),i.set(g,b.castValue_(g,h))}if(r>=0){var y=s.substring(r+1);this.setStyle_?b.setStyleInFeature_(y,i):b.setStyleProperties_(y,i)}}return i},b.prototype.readFeaturesFromText=function(e,t){o.a.assert("F"===e[0]);var r=[];for(e=e.substring(1);e.length>0;){var n=e.indexOf(")");o.a.assert(n>=0);var a=this.readFeatureFromText(e.substring(0,n+1),t);r.push(a),e=e.substring(n+1)}return r},b.prototype.readGeometryFromText=function(e,t){var r=b.GEOMETRY_READERS_[e[0]];return o.a.assert(void 0!==r),this.prevX_=0,this.prevY_=0,r.call(this,e)},b.prototype.writeFeatureText=function(e,t){var r=[],n="",a=e.getGeometry();a&&(n=this.writeGeometryText(a,t)),n.length>0&&(o.a.assert(")"===n[n.length-1]),n=n.substring(0,n.length-1),r.push(n));var i=[],s=this.propertiesFunction_(e);for(var l in s){var u=s[l];if(void 0!==u&&null!==u&&l!==e.getGeometryName()){0!==i.length&&i.push("'");var c=encodeURIComponent(l.replace(/[()'*]/g,"_")+"*"+u.toString().replace(/[()'*]/g,"_"));i.push(c)}}if(i.length>0&&(r.push("~"),Array.prototype.push.apply(r,i)),this.encodeStyles_){var p=e.getStyleFunction();if(void 0!==p){var d=p.call(e,0);if(null!==d){var g=[];d=Array.isArray(d)?d:[d],b.encodeStyles_(d,a.getType(),g),g.length>0&&(r.push("~"),Array.prototype.push.apply(r,g))}}}return r.push(")"),r.join("")},b.prototype.writeFeaturesText=function(e,t){var r=[];if(e.length>0){r.push("F");for(var o=0,n=e.length;o<n;++o)r.push(this.writeFeatureText(e[o],t))}return r.join("")},b.prototype.writeGeometryText=function(e,t){var r=b.GEOMETRY_WRITERS_[e.getType()];o.a.assert(void 0!==r);var n=p.b(e,!0,t);return this.prevX_=0,this.prevY_=0,r.call(this,n)};var F=b,G=r(17),M=r(117),A=r(76),R=r(232),T=r(43),I=r(100),x=r(36),E=r(63),O=r(57),N=r(52),Y={};Y.module=angular.module("app",["gettext",G.a.name,M.a.name,R.a.name]),Y.mapComponent={controller:"AppMapController as ctrl",bindings:{map:"=appMap"},template:"<div ngeo-map=ctrl.map></div>"},Y.module.component("appMap",Y.mapComponent),Y.MapComponentController=function(e,t){this.map,this.ngeoLocation_=e,this.ngeoDebounce_=t},Y.MapComponentController.$inject=["ngeoLocation","ngeoDebounce"],Y.module.controller("AppMapController",Y.MapComponentController),Y.MapComponentController.prototype.$onInit=function(){var e=this,t=this.map.getView(),r=this.ngeoLocation_.getParam("z");r=void 0!==r?+r:4;var o=this.ngeoLocation_.getParam("x"),n=this.ngeoLocation_.getParam("y"),a=void 0!==o&&void 0!==n?[+o,+n]:[0,0];t.setCenter(a),t.setZoom(r),this.ngeoLocation_.updateParams({z:r,x:Math.round(a[0]),y:Math.round(a[1])}),t.on("propertychange",this.ngeoDebounce_(function(r){var o=t.getCenter(),n={z:t.getZoom(),x:Math.round(o[0]),y:Math.round(o[1])};e.ngeoLocation_.updateParams(n)},300,!0))},Y.drawComponent={controller:"AppDrawController as ctrl",bindings:{map:"=appDrawMap",layer:"=appDrawLayer"},template:'<label>Enable drawing:<input type="checkbox" ng-model="ctrl.interaction.active" /></label><br><button ng-click="ctrl.clearLayer()">Clear layer</button>'},Y.module.component("appDraw",Y.drawComponent),Y.DrawComponentController=function(e,t){this.map,this.layer,this.ngeoLocation_=t,this.scope_=e,this.featureSeq_=0,this.interaction},Y.DrawComponentController.$inject=["$scope","ngeoLocation"],Y.DrawComponentController.prototype.$onInit=function(){var e=this,t=this.layer.getSource();this.interaction=new I.a({type:"LineString",source:t}),this.interaction.setActive(!1),this.map.addInteraction(this.interaction),A.a.interaction(this.interaction),this.interaction.on("drawend",function(e){e.feature.set("id",++this.featureSeq_)},this);var r=new F;t.on("addfeature",function(o){o.feature.setStyle(new P.c({stroke:new w.a({color:[255,0,0,1],width:2})}));var n=t.getFeatures(),a=r.writeFeatures(n);e.scope_.$applyAsync(function(){e.ngeoLocation_.updateParams({features:a})})});var o=this.ngeoLocation_.getParam("features");if(void 0!==o){var n=r.readFeatures(o);this.featureSeq_=n.length,t.addFeatures(n)}},Y.DrawComponentController.prototype.clearLayer=function(){this.layer.getSource().clear(!0),this.featureSeq_=0,this.ngeoLocation_.deleteParam("features")},Y.module.controller("AppDrawController",Y.DrawComponentController),Y.MainController=function(){this.map=new T.a({layers:[new x.a({source:new O.b})]});var e=new N.a;this.vectorLayer=new E.a({source:e}),this.vectorLayer.setMap(this.map)},Y.module.controller("MainController",Y.MainController);t.default=Y},346:function(e,t,r){r(40),r(39),e.exports=r(319)},472:function(e,t){}});
//# sourceMappingURL=permalink.38d9f6.js.map