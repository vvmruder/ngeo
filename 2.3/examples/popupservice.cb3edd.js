!function(e){function t(t){for(var i,u,a=t[0],s=t[1],l=t[2],c=0,m=[];c<a.length;c++)u=a[c],r[u]&&m.push(r[u][0]),r[u]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(p&&p(t);m.length;)m.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],i=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(i=!1)}i&&(n.splice(t--,1),e=u(u.s=o[0]))}return e}var i={},r={9:0},n=[];function u(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=i,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=s;n.push([341,0]),o()}({340:function(e,t,o){"use strict";o.r(t),function(e){o(470),o(270);var i=o(164),r={};r.module=angular.module("app",["gettext",i.a.module.name]),r.MainController=function(t,o){this.sce_=t,this.createPopup_=o,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},r.MainController.$inject=["$sce","ngeoCreatePopup"],r.MainController.prototype.simplePopup=function(){var e=this.createPopup_();e.setAutoDestroy(!0),e.setTitle("Simple popup");var t=this.sce_.trustAsHtml("This is a simple 400x300 px popup.");e.setContent(t),e.setWidth("400px"),e.setHeight("300px"),e.setOpen(!0)},r.MainController.prototype.iframePopup=function(){var e=this.createPopup_();e.setAutoDestroy(!0),e.addClass("popup-with-iframe"),e.setTitle("Iframe popup"),e.setUrl("http://geomapfish.org/"),e.setSize("400px","300px"),e.setOpen(!0)},r.MainController.prototype.heavyPopup=function(){var e=this.createPopup_();e.setAutoDestroy(!0),e.setTitle("This is a popup with lots and lots of content and a very long title");var t=this.sce_.trustAsHtml("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egetquam at ex euismod bibendum et eget enim. Nulla sodales tortor acsagittis aliquet. Ut malesuada quam vitae pulvinar porta. Nunc idmagna id risus malesuada elementum eget id purus. Curabitur vel augueblandit, faucibus nulla quis, consequat tellus. Phasellus commodo,tellus et vulputate ultricies, nulla libero ornare arcu, quisfermentum sem diam quis tellus. Aliquam ut sapien tristique, laciniaante et, lacinia arcu. Quisque sagittis eros at quam blanditgravida. Nulla sit amet enim semper, efficitur eros sit amet,porttitor libero. Fusce quis tellus est. Quisque ornare, ex egetluctus pharetra, nisl leo lobortis purus, sed tristique neque leo egetodio. Maecenas lobortis nisl ac magna mollis, ac pulvinar risusconvallis. Donec ullamcorper sollicitudin maximus. Quisque bibendumelit sit amet ultrices ornare. Donec aliquam felis id urna ultricesscelerisque.");e.setContent(t),e.setOpen(!0)},r.MainController.prototype.openPopupWithContent=function(){var e=this.createPopup_(),t=this.sce_.trustAsHtml("This popup was opened using the <code>open</code> method.");e.open({autoDestroy:!0,content:t,height:"200px",title:'Opened with "open"',width:"300px"})},r.MainController.prototype.openPopupWithUrl=function(){this.createPopup_().open({autoDestroy:!0,cls:"popup-with-iframe",height:"300px",title:'Opened with "open" and "iframe"',url:"http://geomapfish.org/",width:"400px"})},r.module.controller("MainController",r.MainController),t.default=r}.call(this,o(38))},341:function(e,t,o){o(40),o(39),e.exports=o(340)},470:function(e,t){}});
//# sourceMappingURL=popupservice.cb3edd.js.map