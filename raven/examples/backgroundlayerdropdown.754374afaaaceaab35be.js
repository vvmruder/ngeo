!function(r){function e(e){for(var o,l,c=e[0],u=e[1],p=e[2],i=0,d=[];i<c.length;i++)l=c[i],t[l]&&d.push(t[l][0]),t[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(r[o]=u[o]);for(s&&s(e);d.length;)d.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var r,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==t[u]&&(o=!1)}o&&(a.splice(e--,1),r=l(l.s=n[0]))}return r}var o={},t={37:0};var a=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=r,l.c=o,l.d=function(r,e,n){l.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},l.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},l.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return l.d(e,"a",e),e},l.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var s=u;a.push([402,0]),n()}({400:function(r,e){r.exports='<div class=dropdown> <button type=button class="btn btn-primary" data-toggle=dropdown> {{$ctrl.currentBgLayer.name}} <span class=caret></span> </button> <ul class=dropdown-menu role=menu> <li ng-repeat="layer in ::$ctrl.bgLayers"> <a href ng-click=$ctrl.setLayer(layer)>{{::layer.name}}</a> </li> </ul> </div> '},401:function(r,e,n){"use strict";n.r(e);n(478);var o=n(179),t=n(101),a=n(21),l=n(27),c=n(80),u=n(20),p=n(72),s=n(26),i={};i.module=angular.module("app",["gettext",s.a.name]),i.backgroundlayerComponent={bindings:{map:"=appBackgroundlayerMap"},template:n(400),controller:"AppBackgroundlayerController"},i.module.component("appBackgroundlayer",i.backgroundlayerComponent),i.BackgroundlayerController=function(r,e){var n=this;r.get("data/backgroundlayers.json").then(function(r){var e=r.data;n.bgLayers=e,n.setLayer(e[0])}),this.backgroundLayerMgr_=e},i.BackgroundlayerController.$inject=["$http","ngeoBackgroundLayerMgr"],i.BackgroundlayerController.prototype.setLayer=function(r){this.currentBgLayer=r;var e=this.createLayer_(r.name);this.backgroundLayerMgr_.set(this.map,e)},i.BackgroundlayerController.prototype.createLayer_=function(r){if("blank"===r)return new u.a;var e=new o.a({layer:r});return new u.a({source:e})},i.module.controller("AppBackgroundlayerController",i.BackgroundlayerController),i.MainController=function(r){var e=new a.a({view:new l.a({projection:t.a,resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});this.map=e;var n=new c.a({source:new p.a({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});e.addLayer(n)},i.MainController.$inject=["$scope"],i.module.controller("MainController",i.MainController),e.default=i},402:function(r,e,n){n(56),n(54),r.exports=n(401)},478:function(r,e){}});
//# sourceMappingURL=backgroundlayerdropdown.754374afaaaceaab35be.js.map