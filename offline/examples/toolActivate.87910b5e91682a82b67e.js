webpackJsonp([10],{5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(6);const a=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[a.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",n=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:n,wrapX:t.wrapX})};Object(i.inherits)(a,r.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=a},551:function(e,t,o){o(9),e.exports=o(552)},552:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(553),o(11);var i=T(o(1)),r=T(o(18)),a=T(o(99)),n=T(o(105)),l=T(o(106)),s=T(o(124)),c=T(o(30)),u=T(o(12)),d=T(o(19)),f=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e}(o(0)),T(o(79))),p=T(o(70)),h=T(o(15)),w=T(o(5)),m=T(o(61)),v=T(o(42)),g=T(o(43)),y=T(o(25));function T(e){return e&&e.__esModule?e:{default:e}}var P={};P.module=angular.module("app",[i.default.module.name,r.default.name,a.default.name,s.default.module.name]),P.MainController=function(e,t){var o=this;this.map=new u.default({layers:[new h.default({source:new w.default})],view:new d.default({center:[1444682,5979706],zoom:4})});var i=this.map;e.init(i);var r=new c.default,a=e.getFeatureOverlay();a.setFeatures(r),a.setStyle(new y.default({fill:new v.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.default({color:"#ffcc33",width:2}),image:new m.default({radius:7,fill:new v.default({color:"#ffcc33"})})})),this.mapClickIsEnabled=!0;var s=document.getElementById("popup-content");this.map.on("singleclick",function(e){if(o.mapClickIsEnabled){var t=f.default.toStringXY(e.coordinate);s.innerHTML="<p>You clicked here: <code>"+t+"</code></p>"}});var T=new l.default(this,"mapClickIsEnabled");t.registerTool("mapTools",T,!0),this.drawPoint=new p.default({type:"Point",features:r}),this.drawPoint.setActive(!1),n.default.interaction(this.drawPoint),i.addInteraction(this.drawPoint);var P=new l.default(this.drawPoint,"active");t.registerTool("mapTools",P),this.drawLine=new p.default({type:"LineString",features:r}),this.drawLine.setActive(!1),n.default.interaction(this.drawLine),i.addInteraction(this.drawLine);var b=new l.default(this.drawLine,"active");t.registerTool("mapTools",b),this.drawPolygon=new p.default({type:"Polygon",features:r}),this.drawPolygon.setActive(!1),n.default.interaction(this.drawPolygon),i.addInteraction(this.drawPolygon);var O=new l.default(this.drawPolygon,"active");t.registerTool("mapTools",O)},P.MainController.$inject=["ngeoFeatureOverlayMgr","ngeoToolActivateMgr"],P.module.controller("MainController",P.MainController),t.default=P},553:function(e,t){},6:function(e,t,o){"use strict";var i=o(0),r=o(21),a=o(20);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(n,r.a),t.a=n}},[551]);
//# sourceMappingURL=toolActivate.87910b5e91682a82b67e.js.map