!function(e){function t(t){for(var r,a,s=t[0],l=t[1],u=t[2],g=0,h=[];g<s.length;g++)a=s[g],n[a]&&h.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);h.length;)h.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={6:0};var i=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([331,0]),o()}({317:function(e,t,o){"use strict";o.r(t);var r=o(26),n=o(139),i=o(105),a=function(e,t,o){this.$http_=e,this.ngeoDebounce_=o,this.nominatimUrl_="https://nominatim.openstreetmap.org/",t.has("ngeoNominatimUrl")&&(this.nominatimUrl_=t.get("ngeoNominatimUrl"),"/"!==this.nominatimUrl_.substr(-1)&&(this.nominatimUrl_+="/")),this.searchDefaultParams_={},t.has("ngeoNominatimSearchDefaultParams")&&(this.searchDefaultParams_=t.get("ngeoNominatimSearchDefaultParams")),this.typeaheadDebounceDelay_=500,this.typeaheadSourceDebounced=this.ngeoDebounce_(this.typeaheadSource_.bind(this),this.typeaheadDebounceDelay_,!0)};a.$inject=["$http","$injector","ngeoDebounce"],a.$inject=["$http","$injector","ngeoDebounce"],a.prototype.search=function(e,t){var o=this.nominatimUrl_+"search?q="+e;if(t=t||{},(t=Object.assign({},this.searchDefaultParams_,t)).format="json",t){o+="&";var r=[],n=Object.keys(t),i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var s;if(i){if(a>=n.length)break;s=n[a++]}else{if((a=n.next()).done)break;s=a.value}var l=s;r.push(l+"="+t[l])}o+=r.join("&")}return this.$http_.get(o)},a.prototype.reverse=function(e,t){var o=this.nominatimUrl_+"reverse";if((t=Object.assign({},t)).lon=e[0],t.lat=e[1],t.format="json",t){o+="?";var r=[],n=Object.keys(t),i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var s;if(i){if(a>=n.length)break;s=n[a++]}else{if((a=n.next()).done)break;s=a.value}var l=s;r.push(l+"="+t[l])}o+=r.join("&")}return this.$http_.get(o)},a.prototype.typeaheadSource_=function(e,t,o){this.search(e,{}).then(function(e){o(e.data.map(function(e){return{coordinate:[e.lon,e.lat],name:e.display_name}}))},function(e){o([])})},(a.module=angular.module("ngeoNominatimService",[n.a.name])).service("ngeoNominatimService",a);var s=a,l=function(e,t){this.$http_=e,this.routingOptions_=t.has("ngeoRoutingOptions")?t.get("ngeoRoutingOptions"):{},this.ngeoOsrmBackendUrl_=this.routingOptions_.backendUrl||"http://router.project-osrm.org/","/"!==this.ngeoOsrmBackendUrl_.substr(-1)&&(this.ngeoOsrmBackendUrl_+="/"),this.protocolVersion_="v1"};l.$inject=["$http","$injector"],l.$inject=["$http","$injector"],l.prototype.getRoute=function(e,t){(t=t||{}).service||(t.service="route"),t.profile||(t.profile="car");var o=this.ngeoOsrmBackendUrl_;if(t.instance&&(o+=t.instance+"/"),o+=t.service+"/"+this.protocolVersion_+"/"+t.profile+"/",o+=e.map(function(e){return e.join(",")}).join(";"),t.options){o+="?";var r=[],n=Object.keys(t.options),i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var s;if(i){if(a>=n.length)break;s=n[a++]}else{if((a=n.next()).done)break;s=a.value}var l=s;r.push(l+"="+t.options[l])}o+=r.join("&")}return this.$http_.get(o)},l.prototype.getNearest=function(e,t){(t=t||{}).service="nearest",t.profile||(t.profile="car");var o=this.ngeoOsrmBackendUrl_;if(t.instance&&(o+=t.instance+"/"),o+=t.service+"/"+this.protocolVersion_+"/"+t.profile+"/",o+=e.join(","),t.options){o+="?";var r=[],n=Object.keys(t.options),i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var s;if(i){if(a>=n.length)break;s=n[a++]}else{if((a=n.next()).done)break;s=a.value}var l=s;r.push(l+"="+t.options[l])}o+=r.join("&")}return this.$http_.get(o)},(l.module=angular.module("ngeoRoutingService",[])).service("ngeoRoutingService",l);var u=l,c=o(253),g={};function h(e,t){return t(e)}g.module=angular.module("ngeoRoutingNominatimInputComponent",[c.a.module.name,s.module.name]),g.run(["$templateCache",function(e){e.put("ngeo/routing/nominatiminput",o(330))}]),g.module.value("ngeoRoutingNominatimInputComponentTemplateUrl",function(e){var t=e.ngeoRoutingNominatimInputComponentTemplateUrl;return void 0!==t?t:"ngeo/routing/nominatiminput"}),h.$inject=["$attrs","ngeoRoutingNominatimInputComponentTemplateUrl"],g.Controller=function(e,t,o,r){this.element_=e,this.$scope_=o,this.ngeoNominatimService=r,this.onSelect,this.inputValue,this.options={},this.datasets=[{name:"nominatim",display:"name",source:this.ngeoNominatimService.typeaheadSourceDebounced}],this.listeners={select:this.select_.bind(this)},this.placeholder=""},g.Controller.$inject=["$element","$injector","$scope","ngeoNominatimService"],g.Controller.prototype.select_=function(e,t,o){this.onSelect&&this.onSelect(t)},g.component_={controller:g.Controller,bindings:{onSelect:"=?ngeoNominatimInputOnSelect",inputValue:"=?ngeoNominatimInputValue",placeholder:"@?ngeoNominatimInputPlaceholder"},templateUrl:h},g.module.component("ngeoNominatimInput",g.component_);var p=g,m=o(8),d=o(18),f=o(33),v=o(36),_=o(44),y=o(17),b=o(120),$=o(38),C=o(35),w=o(30),F=o(238),S=o(75),R={};function j(e,t){return t(e)}R.module=angular.module("ngeoRoutingFeatureComponent",[s.module.name,p.module.name]),R.run(["$templateCache",function(e){e.put("ngeo/routing/routingfeature",o(329))}]),R.module.value("ngeoRoutingFeatureTemplateUrl",function(e){var t=e.ngeoRoutingFeatureTemplateUrl;return void 0!==t?t:"ngeo/routing/routingfeature"}),j.$inject=["$attrs","ngeoRoutingFeatureTemplateUrl"],R.Controller=function(e,t,o,r){this.scope_=e,this.timeout_=t,this.$q_=o,this.ngeoNominatimService_=r,this.map,this.feature,this.featureLabel="",this.fillColor,this.strokeColor,this.onChange,this.vectorFeatures_=new f.a,this.vectorSource_=new v.a({features:this.vectorFeatures_}),this.vectorLayer_=new _.a({source:this.vectorSource_,style:function(e,t){return[new y.a({text:new b.a({fill:new $.a({color:this.fillColor||"#000000"}),font:"normal 30px FontAwesome",offsetY:-15,stroke:new C.a({width:3,color:this.strokeColor||"#000000"}),text:""})})]}.bind(this)}),this.modifyFeature_=new F.a({features:this.vectorFeatures_}),this.draw_=null,this.onSelect=this.onSelect_.bind(this),this.errorMessage=""},R.Controller.$inject=["$scope","$timeout","$q","ngeoNominatimService"],R.Controller.prototype.$onInit=function(){var e=this;this.map.addLayer(this.vectorLayer_),this.modifyFeature_.setActive(!0),this.map.addInteraction(this.modifyFeature_),this.modifyFeature_.on("modifyend",function(t){var o=t.features.getArray()[0];e.vectorSource_.clear(),e.snapFeature_(o)}),this.scope_.$watch(function(){return e.feature},function(t,o){t&&e.onFeatureChange_(),null===t&&(e.vectorSource_.clear(),e.featureLabel="")})},R.Controller.prototype.$onDestroy=function(){this.map.removeLayer(this.vectorLayer_),this.modifyFeature_.setActive(!1),this.map.removeInteraction(this.modifyFeature_)},R.Controller.prototype.set=function(){var e=this;this.draw_&&this.map.removeInteraction(this.draw_),this.draw_=new S.a({features:this.vectorFeatures_,type:"Point"}),this.draw_.on("drawstart",function(){e.feature&&e.vectorSource_.removeFeature(e.feature)}),this.draw_.on("drawend",function(t){e.draw_&&e.map.removeInteraction(e.draw_),e.snapFeature_(t.feature),e.modifyFeature_.setActive(!0)}),this.modifyFeature_.setActive(!1),this.map.addInteraction(this.draw_)},R.Controller.prototype.setFeature_=function(e,t){var o=m.g(e,this.map.getView().getProjection());""===t&&(t=o.join("/")),this.feature=new d.a({geometry:new w.a(o),name:t})},R.Controller.prototype.onFeatureChange_=function(){var e=this;this.featureLabel=this.feature.get("name")||"",this.vectorSource_.clear(),this.vectorSource_.addFeature(this.feature),this.onChange&&this.timeout_(function(){e.onChange(e.feature)})},R.Controller.prototype.onSelect_=function(e){var t=e.coordinate.map(parseFloat),o=e.label;this.setFeature_(t,o);var r=this.feature.getGeometry().getCoordinates();this.map.getView().setCenter(r)},R.Controller.prototype.snapFeature_=function(e){var t=this.getLonLatFromPoint_(e),o=function(e){var t=[parseFloat(e.data.lon),parseFloat(e.data.lat)],o=e.data.display_name;this.setFeature_(t,o)}.bind(this),r=function(e){this.errorMessage="Error: nominatim server not responding.",console.log(e)}.bind(this);this.$q_.when(this.ngeoNominatimService_.reverse(t,{})).then(o.bind(this),r.bind(this))},R.Controller.prototype.getLonLatFromPoint_=function(e){var t=e.getGeometry().getCoordinates(),o=this.map.getView().getProjection();return m.m(t,o)},R.component_={controller:R.Controller,bindings:{map:"<ngeoRoutingFeatureMap",feature:"=ngeoRoutingFeatureFeature",fillColor:"<?ngeoRoutingFeatureFillColor",strokeColor:"<?ngeoRoutingFeatureStrokeColor",onChange:"=?ngeoRoutingFeatureOnChange"},templateUrl:j},R.module.component("ngeoRoutingFeature",R.component_);var k=R,P=o(156),D=o(42),x={};function A(e,t){return t(e)}x.module=angular.module("ngeoRoutingComponent",[n.a.name,i.a.name,s.module.name,u.module.name,k.module.name]),x.run(["$templateCache",function(e){e.put("ngeo/routing/routing",o(328))}]),x.module.value("ngeoRoutingTemplateUrl",function(e){var t=e.ngeoRoutingTemplateUrl;return void 0!==t?t:"ngeo/routing/routing"}),A.$inject=["$attrs","ngeoRoutingTemplateUrl"],x.Controller=function(e,t,o,r,n,i){var a=this;this.$scope_=t,this.ngeoRoutingService_=o,this.ngeoNominatimService_=r,this.routingOptions_=e.has("ngeoRoutingOptions")?e.get("ngeoRoutingOptions"):{},this.routingProfiles=this.routingOptions_.profiles||[],this.selectedRoutingProfile=this.routingProfiles.length>0?this.routingProfiles[0]:null,t.$watch(function(){return a.selectedRoutingProfile},this.calculateRoute.bind(this)),this.$q_=n,this.map,this.errorMessage="",this.startFeature_=null,this.targetFeature_=null,this.viaArray=[],this.colors={"start.fill":"#6BE62E","start.stroke":"#4CB01E","destination.fill":"#FF3E13","destination.stroke":"#CD3412","via.fill":"#767676","via.stroke":"#000000"},this.routeSource_=new v.a({features:[]}),this.routeLayer_=new _.a({source:this.routeSource_,style:new y.a({fill:new $.a({color:"rgba(16, 112, 29, 0.6)"}),stroke:new C.a({color:"rgba(16, 112, 29, 0.6)",width:5})})}),this.routeDistance=0,this.routeDuration=null,this.regexIsFormattedCoord=/\d+\.\d+\/\d+\.\d+/,this.draw_=null;this.handleChange=i(this.calculateRoute.bind(this),200,!0)},x.Controller.$inject=["$injector","$scope","ngeoRoutingService","ngeoNominatimService","$q","ngeoDebounce"],x.Controller.prototype.$onInit=function(){this.map.addLayer(this.routeLayer_)},x.Controller.prototype.clearRoute=function(){this.startFeature_=null,this.targetFeature_=null,this.viaArray=[],this.routeDistance=0,this.routeDuration=null,this.routeSource_.clear(),this.errorMessage=""},x.Controller.prototype.getLonLatFromPoint_=function(e){var t=e.getGeometry().getCoordinates(),o=this.map.getView().getProjection();return m.m(t,o)},x.Controller.prototype.reverseRoute=function(){var e=this.startFeature_;this.startFeature_=this.targetFeature_,this.targetFeature_=e,this.viaArray=this.viaArray.reverse()},x.Controller.prototype.parseRoute_=function(e){var t,o=[],r=new P.a,n={dataProjection:"EPSG:4326",featureProjection:this.map.getView().getProjection()};e.legs?(o=e.legs.map(function(e){return e.steps.map(function(e){return new d.a({geometry:r.readGeometry(e.geometry,n)})})}),o=(t=[]).concat.apply(t,o)):e.geometry&&o.push(new d.a({geometry:r.readGeometry(e.geometry,n)}));return o},x.Controller.prototype.calculateRoute=function(){var e=this;if(this.startFeature_&&this.targetFeature_){this.routeSource_.clear();var t=this.getLonLatFromPoint_(this.startFeature_),o=this.getLonLatFromPoint_(this.targetFeature_),r=this.viaArray.filter(function(e){return null!==e.feature}).map(function(t){return e.getLonLatFromPoint_(t.feature)}),n=[t].concat(r,[o]),i=function(e){var t=this.parseRoute_(e.data.routes[0]);if(0!==t.length){this.routeSource_.addFeatures(t),this.map.getView().fit(this.routeSource_.getExtent()),this.routeDistance=parseInt(e.data.routes[0].distance,10),this.routeDuration=e.data.routes[0].duration;var o=t[0].getGeometry().getCoordinateAt(0),r=t[t.length-1].getGeometry().getCoordinateAt(1),n=[this.startFeature_.getGeometry().getCoordinates(),o],i=[r,this.targetFeature_.getGeometry().getCoordinates()],a=[new d.a(new D.a(n)),new d.a(new D.a(i))];this.routeSource_.addFeatures(a)}else console.log("No route or not supported format.")}.bind(this),a=function(e){this.errorMessage="Error: routing server not responding.",console.log(e)}.bind(this),s={steps:!0,overview:!1,geometries:"geojson"},l={};l.options=s,this.selectedRoutingProfile&&(l.instance=this.selectedRoutingProfile.profile),this.$q_.when(this.ngeoRoutingService_.getRoute(n,l)).then(i.bind(this),a.bind(this))}},x.Controller.prototype.addVia=function(){this.viaArray.push({feature:null,onSelect:null})},x.Controller.prototype.deleteVia=function(e){this.viaArray.length>e&&(this.viaArray.splice(e,1),this.calculateRoute())},x.module.component("ngeoRouting",{controller:x.Controller,bindings:{map:"<ngeoRoutingMap"},templateUrl:A});var O=x,U=angular.module("ngeoRoutingModule",[O.module.name]),L=o(21),N=o(27),I=o(20),V=o(32),M={};M.module=angular.module("app",["gettext",r.a.name,U.name]),M.MainController=function(){this.map=new L.a({layers:[new I.a({source:new V.a})],view:new N.a({center:[931010.1535989442,5961705.842297254],zoom:9})}),this.routingfeatureActive=!0},M.module.controller("MainController",M.MainController);t.default=M},328:function(e,t){e.exports='<div class=ngeo-routing> <div class="ngeo-routing-start form-group"> <ngeo-routing-feature ngeo-routing-feature-map=$ctrl.map ngeo-routing-feature-feature=$ctrl.startFeature_ ngeo-routing-feature-fill-color="$ctrl.colors[\'start.fill\']" ngeo-routing-feature-stroke-color="$ctrl.colors[\'start.stroke\']" ngeo-routing-feature-on-change=$ctrl.handleChange> </ngeo-routing-feature> </div> <div class="ngeo-routing-vias form-group" ng-repeat="(index, via) in $ctrl.viaArray"> <div class=form-inline> <div class=form-group> <ngeo-routing-feature ngeo-routing-feature-map=$ctrl.map ngeo-routing-feature-feature=via.feature ngeo-routing-feature-fill-color="$ctrl.colors[\'via.fill\']" ngeo-routing-feature-stroke-color="$ctrl.colors[\'via.stroke\']" ngeo-routing-feature-on-change=$ctrl.handleChange> </ngeo-routing-feature> </div> <button type=button class="btn btn-primary delete-via" ng-click=$ctrl.deleteVia(index)> <span class="fa fa-trash-o"></span> </button> </div> </div> <div class="ngeo-routing-destination form-group"> <ngeo-routing-feature ngeo-routing-feature-map=$ctrl.map ngeo-routing-feature-feature=$ctrl.targetFeature_ ngeo-routing-feature-fill-color="$ctrl.colors[\'destination.fill\']" ngeo-routing-feature-stroke-color="$ctrl.colors[\'destination.stroke\']" ngeo-routing-feature-on-change=$ctrl.handleChange> </ngeo-routing-feature> </div> <div class="form-group pull-right"> <button type=button class="btn btn-primary" ng-click=$ctrl.clearRoute()> <span class="fa fa-trash-o"></span> <span translate>Clear</span> </button> <button type=button class="btn btn-primary" ng-click=$ctrl.reverseRoute()> <span class="fa fa-exchange"></span> <span translate>Reverse</span> </button> <button type=button class="btn btn-primary" ng-click=$ctrl.addVia()> <span class="fa fa-plus"></span> <span translate>Add via</span> </button> </div> <div class=clearfix></div> <div class=form-horizontal ng-if="$ctrl.routingProfiles.length > 1"> <div class=form-group> <label class="control-label col-md-4" translate>Profile</label> <div class=col-md-8> <select class=form-control ng-model=$ctrl.selectedRoutingProfile> <option ng-repeat="profile in $ctrl.routingProfiles" ng-value=profile>{{profile.label}}</option> </select> </div> </div> </div> <div class="ngeo-routing-error form-group clearfix" ng-hide="$ctrl.errorMessage === \'\'"> {{$ctrl.errorMessage}} </div> <div class=clearfix></div> <div class=form-horizontal ng-hide="$ctrl.routeDuration === null && $ctrl.routeDistance <= 0"> <div class=row> <div class=col-md-12> <strong translate>Route statistics</strong> </div> </div> <div class=row ng-hide="$ctrl.routeDuration === null"> <div class="col-md-4 text-right" translate> Duration </div> <div class=col-md-8> {{$ctrl.routeDuration | ngeoDuration}} </div> </div> <div class=row ng-hide="$ctrl.routeDistance <= 0"> <div class="col-md-4 text-right" translate> Distance </div> <div class=col-md-8> {{$ctrl.routeDistance | ngeoUnitPrefix:\'m\'}} </div> </div> </div> </div> '},329:function(e,t){e.exports='<div class=ngeo-routing-feature> <div class=input-group> <ngeo-nominatim-input ngeo-nominatim-input-value=$ctrl.featureLabel ngeo-nominatim-input-placeholder="{{\'Search...\' | translate}}" ngeo-nominatim-input-on-select=$ctrl.onSelect> </ngeo-nominatim-input> <div class="input-group-addon btn" ng-click=$ctrl.set()> <span class="fa fa-map-marker"></span> </div> </div> </div> '},330:function(e,t){e.exports="<div class=ngeo-nominatim-input> <input type=text class=form-control placeholder={{$ctrl.placeholder}} ng-model=$ctrl.inputValue ngeo-search=$ctrl.options ngeo-search-datasets=$ctrl.datasets ngeo-search-listeners=$ctrl.listeners> </div> "},331:function(e,t,o){o(56),o(54),e.exports=o(317)}});
//# sourceMappingURL=routing.c73665dea3ecaebc94ce.js.map