!function(e){function r(r){for(var t,l,u=r[0],i=r[1],s=r[2],c=0,f=[];c<u.length;c++)l=u[c],o[l]&&f.push(o[l][0]),o[l]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(p&&p(r);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(t=!1)}t&&(a.splice(r--,1),e=l(l.s=n[0]))}return e}var t={},o={2:0};var a=[];function l(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,r,n){l.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var p=i;a.push([379,0]),n()}({378:function(e,r,n){"use strict";n.r(r);n(508);var t=n(50),o=n(281),a=n(56),l=n(33),u=n(46),i=n(30),s=n(54),p=n(31),c=n(14),f=n(34),m=n(69),d={};d.module=angular.module("gmfapp",["gettext",t.a.name,o.a.name]),d.module.value("ngeoWfsPermalinkOptions",{url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",wfsTypes:[{featureType:"fuel",label:"display_name"},{featureType:"osm_scale",label:"display_name"}],defaultFeatureNS:"http://mapserver.gis.umn.edu/mapserver",defaultFeaturePrefix:"feature"}),d.module.constant("defaultTheme","Demo"),d.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),d.MainController=function(){this.map=new l.a({layers:[new i.a({source:new s.a})],view:new u.a({projection:a.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});var e=new f.a({color:[255,170,0,.6]}),r=new p.a({color:[255,170,0,1],width:2});this.featureStyle=new c.a({fill:e,image:new m.a({fill:e,radius:5,stroke:r}),stroke:r})},d.module.controller("MainController",d.MainController),r.default=d},379:function(e,r,n){n(75),n(74),e.exports=n(378)},508:function(e,r){}});
//# sourceMappingURL=wfspermalink.be9db5c7532a8b3bea5e.js.map