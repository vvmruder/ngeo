!function(e){function t(t){for(var n,l,u=t[0],i=t[1],s=t[2],m=0,p=[];m<u.length;m++)l=u[m],r[l]&&p.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,u=1;u<o.length;u++){var i=o[u];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={9:0};var a=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;a.push([393,0]),o()}({392:function(e,t,o){"use strict";o.r(t);o(515);var n=o(102),r=o(50),a=o(306),l=o(25),u=o(144),i=o(56),s=o(33),c=o(46),m=o(30),p=o(54),f={};f.module=angular.module("gmfapp",["gettext",n.a.name,r.a.name,a.a.name,l.a.module.name,u.a.name]),f.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),f.module.value("gmfPrintUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/printproxy"),f.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi"),f.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/"),f.module.constant("defaultTheme","Demo"),f.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),f.MainController=function(e,t){var o=this;e.loadThemes(),this.map=new s.a({layers:[new m.a({source:new p.a})],view:new c.a({projection:i.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),this.defaulPrintFieldstValues={comments:"Default comments example",legend:!0},this.themes=void 0,this.treeSource=void 0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),t.init(this.map)},f.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr"],f.module.controller("MainController",f.MainController),t.default=f},393:function(e,t,o){o(75),o(74),e.exports=o(392)},515:function(e,t){}});
//# sourceMappingURL=print.dd57f1e4991fe6b62f08.js.map