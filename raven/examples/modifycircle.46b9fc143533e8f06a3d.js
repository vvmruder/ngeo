!function(e){function r(r){for(var n,i,u=r[0],s=r[1],c=r[2],f=0,p=[];f<u.length;f++)i=u[f],a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(r);p.length;)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,u=1;u<t.length;u++){var s=t[u];0!==a[s]&&(n=!1)}n&&(o.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},a={14:0};var o=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=r,u=u.slice();for(var c=0;c<u.length;c++)r(u[c]);var l=s;o.push([348,0]),t()}({347:function(e,r,t){"use strict";t.r(r);t(454);var n=t(60),a=t(259),o=t(21),i=t(27),u=t(20),s=t(44),c=t(32),l=t(36),f=t(144),p=t(31),h=t(33),v=t(18),w=t(26),d={},b=angular.module("app",["gettext",w.a.name]);d.MainController=function(){this.map=new o.a({layers:[new u.a({source:new c.a})],view:new i.a({center:[-10997148,4569099],zoom:4})});var e=this.map,r=new f.a([-10691093,4966327],465e3);this.features=new h.a;var t=new v.a({geometry:p.b.fromCircle(r),color:"#000000",label:"Circle 1",opacity:"0.5",stroke:"2"});t.set(n.a.IS_CIRCLE,!0),this.features.push(t);var w=new l.a({features:this.features});new s.a({source:w}).setMap(e),this.interaction=new a.a({features:this.features});var d=this.interaction;d.setActive(!0),e.addInteraction(d)},b.controller("MainController",d.MainController),r.default=d},348:function(e,r,t){t(56),t(54),e.exports=t(347)},454:function(e,r){}});
//# sourceMappingURL=modifycircle.46b9fc143533e8f06a3d.js.map